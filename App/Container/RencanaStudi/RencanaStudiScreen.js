import React, {useState, useEffect} from 'react'
import { View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text, Input, Item } from 'native-base'
import Modal from 'react-native-modal';
import Api from '../../Services/Api';
import DocumentPicker from 'react-native-document-picker';
import moment from 'moment'
import AsyncStorage from '@react-native-community/async-storage';

export default function RencanaStudiScreen({navigation}) {
    const [state, setstate] = useState([])
    const [SKS, setSKS] = useState(0)
    const [dokumen, setdokumen] = useState('')
    const [isModalVisible, setModalVisible] = useState(false);
    const [kode_profile, setkode_profile] = useState('')
    const [periode, setperiode] = useState({})
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    async function getData(){
        const value = await AsyncStorage.getItem('kode');
        const valueperiode = await AsyncStorage.getItem('periode');
        console.log('value', value)
        setkode_profile(value)
        setperiode(JSON.parse(valueperiode))
        Api.sks_participant(value).then(res=>{
            console.log('res.data', res.data)
            setstate(res.data)
        })
    }

    useEffect(() => {
        let mounted = true
        getData()
        return ()=>{
            mounted = false
        }
    }, [])
    return (
        <Container>
            <Content>
                <FlatList 
                    data={state} 
                    renderItem={({item})=>{
                        return(
                            <TouchableOpacity onPress={()=>alert('tes', JSON.stringify(item))}>
                                <View style={{padding:15, borderBottomWidth:1, borderBottomColor:'#CFCFCF'}}>
                                    <Text style={{fontSize:18, fontWeight:'bold'}}>Periode {item.Tahun} - Semester {item.Semester}</Text>
                                    <Text>Jumlah SKS : {item.SKS}</Text>
                                    <Text>Tgl Input : {moment(item.DibuatTanggal).format("DD-MM-YYYY HH:mm:ss")}</Text>
                                    <Text>Status : {item.status}</Text>
                                </View>
                            </TouchableOpacity>
                            
                        )
                    }}
                />
                <Modal isVisible={isModalVisible}>
                    <View style={{ backgroundColor:'white', borderRadius:10, padding:10}}>
                        <Text style={{marginBottom:5, borderBottomColor:'#CFCFCF', borderBottomWidth:1}}>Isi Rencana Studi</Text>
                        <Text style={{fontSize:14}}>Tahun</Text>        
                        <Item regular style={{marginBottom:5}}>                   
                            <Input style={{fontSize:13, height:40}} disabled={true}  keyboardType='number-pad' value={periode.TahunPeriode} />
                        </Item>
                        <Text style={{fontSize:14}}>Semester</Text>        
                        <Item regular style={{marginBottom:5}}>                   
                            <Input style={{fontSize:13, height:40}} disabled={true}  keyboardType='number-pad' value={periode.SemesterPeriode} />
                        </Item>
                        <Text style={{fontSize:14}}>Jumlah SKS yang diambil</Text>        
                        <Item regular style={{marginBottom:5}}>                   
                            <Input style={{fontSize:13, height:40}}  keyboardType='number-pad' value={SKS} onChangeText={text=>{setSKS(text)}} />
                        </Item>
                        <Text style={{fontSize:14}}>Upload Kartu Rencana Studi</Text>        
                        <TouchableOpacity onPress={()=>selectOneFile()}>
                            <View style={{marginTop:10, marginBottom:20, width:90, height:60, backgroundColor:"#CFCFCF"}}>
                                <Image style={{width:90, height:60,}} source={{ uri: dokumen}} />
                            </View>
                        </TouchableOpacity>
                        <View style={{flexDirection:'row'}}>
                            <Button style={{width:'48%', marginRight:5, justifyContent:'center'}} onPress={toggleModal}><Text style={{textAlign:'center'}}>Tutup</Text></Button>
                            <Button style={{width:'48%', justifyContent:'center'}} onPress={async()=>{
                                // const value = await AsyncStorage.getItem('kode');
                                var data = {kode_profile, SKS , kode_form: periode._id,  Dokumen : dokumen, Tahun: periode.TahunPeriode, Semester : periode.SemesterPeriode, DibuatOleh : kode_profile, DibuatTanggal : new Date()}
                                Api.sks_register(data).then(res=>{
                                    console.log('res.data', res.data)
                                    var dataupdate =  [...state, res.data]
                                    setstate(dataupdate)
                                    toggleModal()
                                })
                            }}><Text style={{textAlign:'center'}}>Kirim</Text></Button>
                        </View>
                        
                    </View>
                </Modal>
            </Content>
            <View style={{padding:15}}>
                <Button style={{ justifyContent:'center', alignItems:'center', alignSelf:'center', width:'100%'}} onPress={toggleModal}>
                    <Text>Tambah</Text>
                </Button>
            </View>
        </Container>
    )
}
