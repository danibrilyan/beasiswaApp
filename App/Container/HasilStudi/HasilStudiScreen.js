import React, {useState, useEffect} from 'react'
import { View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text, Input, Item } from 'native-base'
import Modal from 'react-native-modal';
import Api from '../../Services/Api';
import DocumentPicker from 'react-native-document-picker';
import moment from 'moment'
import AsyncStorage from '@react-native-community/async-storage';

export default function HasilStudiScreen({navigation}) {
    const [state, setstate] = useState([])
    const [IPS, setIPS] = useState(0)
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
        Api.akademikprofile_participant(value).then(res=>{
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

    async function selectOneFile() {
        //Opening Document Picker for selection of one file
        try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.pdf],
            //There can me more options as well
            // DocumentPicker.types.allFiles
            // DocumentPicker.types.images
            // DocumentPicker.types.plainText
            // DocumentPicker.types.audio
            // DocumentPicker.types.pdf
          });
          //Printing the log realted to the file
          console.log('res : ' + JSON.stringify(res));
          console.log('URI : ' + res.uri);
          console.log('Type : ' + res.type);
          console.log('File Name : ' + res.name);
          console.log('File Size : ' + res.size);
          //Setting the state to show single file attributes
          setdokumen(res.uri)
        //   this.setState({ singleFile: res });
        } catch (err) {
          //Handling any exception (If any)
          if (DocumentPicker.isCancel(err)) {
            //If user canceled the document selection
            alert('Canceled from single doc picker');
          } else {
            //For Unknown Error
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
      }
    return (
        <Container>
            <Content>
                <FlatList 
                    data={state} 
                    renderItem={({item})=>{
                        return(
                            <TouchableOpacity onPress={()=>alert('tes', JSON.stringify(item))}>
                                <View style={{padding:15, borderBottomWidth:1, borderBottomColor:'#CFCFCF'}}>
                                    <Text style={{fontSize:18, fontWeight:'bold'}}>Periode {item.TahunAkademik} - Semester {item.Semester}</Text>
                                    <Text>IP Semester : {item.IPS}</Text>
                                    <Text>IP Kumulatif : {item.IPK}</Text>
                                    <Text>Tgl Input : {moment(item.DibuatTanggal).format("DD-MM-YYYY HH:mm:ss")}</Text>
                                    <Text>Status : {item.status}</Text>
                                </View>
                            </TouchableOpacity>
                            
                        )
                    }}
                />
                <Modal isVisible={isModalVisible}>
                    <View style={{ backgroundColor:'white', borderRadius:10, padding:10}}>
                        <Text style={{marginBottom:5, borderBottomColor:'#CFCFCF', borderBottomWidth:1}}>Isi Hasil Studi</Text>
                        <Text style={{fontSize:14}}>Tahun</Text>        
                        <Item regular style={{marginBottom:5}}>                   
                            <Input style={{fontSize:13, height:40}} disabled={true}  keyboardType='number-pad' value={periode.TahunPeriode} />
                        </Item>
                        <Text style={{fontSize:14}}>Semester</Text>        
                        <Item regular style={{marginBottom:5}}>                   
                            <Input style={{fontSize:13, height:40}} disabled={true}  keyboardType='number-pad' value={periode.SemesterPeriode} />
                        </Item>
                        <Text style={{fontSize:14}}>Nilai Index Prestasi</Text>        
                        <Item regular style={{marginBottom:5}}>                   
                            <Input style={{fontSize:13, height:40}}  keyboardType='number-pad' value={IPS} onChangeText={text=>{setIPS(text)}} />
                        </Item>
                        <Text style={{fontSize:14}}>Upload Dokumen IP</Text>        
                        <TouchableOpacity onPress={()=>selectOneFile()}>
                            <View style={{marginTop:10, marginBottom:20, width:90, height:60, backgroundColor:"#CFCFCF"}}>
                                <Image style={{width:90, height:60,}} source={{ uri: dokumen}} />
                            </View>
                        </TouchableOpacity>
                        <View style={{flexDirection:'row'}}>
                            <Button style={{width:'48%', marginRight:5, justifyContent:'center'}} onPress={toggleModal}><Text style={{textAlign:'center'}}>Tutup</Text></Button>
                            <Button style={{width:'48%', justifyContent:'center'}} onPress={async()=>{
                                // const value = await AsyncStorage.getItem('kode');
                                var data = {kode_profile, IPS , kode_form: periode._id,  Document : dokumen, TahunAkademik: periode.TahunPeriode, Semester : periode.SemesterPeriode, DibuatOleh : kode_profile, DibuatTanggal : new Date()}
                                Api.akademikprofile_register(data).then(res=>{
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
                {
                    periode ? 
                    <Button style={{ justifyContent:'center', alignItems:'center', alignSelf:'center', width:'100%'}} onPress={toggleModal}>
                        <Text>Tambah</Text>
                    </Button> : null
                }
                
            </View>
        </Container>
    )
}
