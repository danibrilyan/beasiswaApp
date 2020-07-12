import React, {useState, useEffect} from 'react'
import { View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text, Item, Input } from 'native-base'
import Modal from 'react-native-modal';
import DocumentPicker from 'react-native-document-picker';
import nodata from '../../Assets/Images/nodata.png'
export default function StudiAkhirScreen({navigation}) {
    
    const [dataStudiAkhir, setdataStudiAkhir] = useState(null)
    const [IPS, setIPS] = useState(0)
    const [dokumen, setdokumen] = useState('')
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const [kode_profile, setkode_profile] = useState('')
    const [periode, setperiode] = useState({})
    

    async function getData(){
        const value = await AsyncStorage.getItem('kode');
        const valueperiode = await AsyncStorage.getItem('periode');
        console.log('value', value)
        setkode_profile(value)
        setperiode(JSON.parse(valueperiode))
    }

    useEffect(() => {
        getData()
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
            <Content style={{padding:15}}>
                {
                    dataStudiAkhir === null ?
                    <View style={{padding:15, justifyContent:'center', flex:1, alignContent:'center', alignItems:'center'}}>
                        <Image style={{width:300, height:300,  marginTop:5, marginBottom:5}}
                            source={nodata}
                        />
                        <Text style={{textAlign:'center'}}>Silahkan Ajukan Bantuan Studi Akhir Anda. Pastikan Jumlah SKS memenuhi dan telah mempunyai Proposal Studi Akhir yang telah disetujui</Text>
                        <Button style={{ marginTop:30, borderRadius:30, justifyContent:'center', alignItems:'center', alignSelf:'center', width:'100%'}} onPress={toggleModal} >
                            <Text>Upload Dokumen Studi Akhir</Text>
                        </Button>
                    </View> :
                    <View style={{padding:15, borderWidth:1, borderColor:'#CFCFCF', }}>
                        <Text style={{marginBottom:20}}>Judul : <Text style={{fontWeight:'bold'}}>Lengan Robot Pemilih Objek Berwarna</Text></Text>
                        <View style={{marginBottom:20}}>
                            <Text style={{fontWeight:'bold'}}>Dosen Pembimbing :</Text>
                            <Text>1. Dr.Ir. Zahir Zainudding, MT, M.Sc </Text>
                            <Text>2. Ir. Christofer Yohanes, MT</Text>
                            
                        </View>
                        <Text style={{marginBottom:20}}>Jumlah SKS yang telah diperoleh : <Text style={{fontWeight:'bold'}}>200 Kredit</Text></Text>
                        <Text style={{marginBottom:20}}>Dokumen Proposal : <Text>Lihat Dokumen</Text>
                        </Text>
                        <View style={{marginBottom:20}}>
                            <Text>Tgl Pemasukan Dokumen : 20-07-2020</Text>
                            <Text>Status Pengajuan : <Text style={{fontWeight:'bold'}}>Diusulkan</Text></Text>
                        </View>
                        <Button style={{ marginTop:10, borderRadius:30, justifyContent:'center', alignItems:'center', alignSelf:'center', width:'100%'}} onPress={toggleModal} >
                            <Text>Upload Ulang</Text>
                        </Button>

                        
                    </View>
                    
                }
                
                
            </Content>
            <Modal isVisible={isModalVisible}>
                <View style={{ backgroundColor:'white', borderRadius:10, padding:10}}>
                    <Text style={{marginBottom:5, borderBottomColor:'#CFCFCF', borderBottomWidth:1}}>Form Bantuan Studi Akhir</Text>
                    <Text style={{fontSize:14}}>Tahun</Text>        
                    <Item regular style={{marginBottom:5}}>                   
                        <Input style={{fontSize:13, height:40}} disabled={true}  keyboardType='number-pad'  />
                    </Item>
                    <Text style={{fontSize:14}}>Semester saat ini</Text>        
                    <Item regular style={{marginBottom:5}}>                   
                        <Input style={{fontSize:13, height:40}} disabled={true}  keyboardType='number-pad'  />
                    </Item>
                    <Text style={{fontSize:14}}>Jumlah SKS yang telah diperoleh</Text>        
                    <Item regular style={{marginBottom:5}}>                   
                        <Input style={{fontSize:13, height:40}}  keyboardType='number-pad' />
                    </Item>
                    <Text style={{fontSize:14}}>Proposal Skipsi/Tugas Akhir</Text>        
                    <TouchableOpacity onPress={()=>selectOneFile()}>
                        <View style={{marginTop:10, marginBottom:20, width:90, height:60, backgroundColor:"#CFCFCF"}}>
                            <Image style={{width:90, height:60,}} source={{ uri: dokumen}} />
                        </View>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row'}}>
                        <Button style={{width:'48%', marginRight:5, justifyContent:'center'}} onPress={toggleModal}><Text style={{textAlign:'center'}}>Tutup</Text></Button>
                        <Button style={{width:'48%', justifyContent:'center'}} onPress={()=>{toggleModal(); setdataStudiAkhir('1234')}} ><Text style={{textAlign:'center'}}>Kirim</Text></Button>
                    </View>
                    
                </View>
            </Modal>
        </Container>
    )
}
