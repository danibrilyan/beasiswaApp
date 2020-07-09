import React, {useState, useEffect} from 'react'
import { View, FlatList, TouchableOpacity, Image,SafeAreaView, ScrollView  } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text, Input, Item, Form, Picker } from 'native-base'
import StepperScreen from './StepperScreen'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import DocumentPicker from 'react-native-document-picker';

export default function ProfileScreen({route, navigation}) {
    const [KTP, setKTP] = useState('')
    const [NamaLengkap, setNamaLengkap] = useState('')
    const [JenisKelamin, setJenisKelamin] = useState('Laki-laki')
    const [TempatLahir, setTempatLahir] = useState('')
    const [Alamat, setAlamat] = useState('')
    const [TanggalLahir, setTanggalLahir] = useState('')
    const [Foto, setFoto] = useState('')
    const [DokumenKTP, setDokumenKTP] = useState('')
    const [DokumenKK, setDokumenKK] = useState('')
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [DataNomorWA, setDataNomorWA] = useState('')


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setTanggalLahir(moment(currentDate).format("DD-MM-YYYY"))
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    async function selectOneFile(documentType) {
        //Opening Document Picker for selection of one file
        try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.images],
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
          if(documentType === "Foto"){
            setFoto(res.uri)
          }
          if(documentType === "KTP"){
            setDokumenKTP(res.uri)
          }
          if(documentType === "KK"){
            setDokumenKK(res.uri)
          }
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

    useEffect(() => {
        const {NomorWA} = route.params
        setDataNomorWA(NomorWA)
    }, [])

    return(
        <Container>
            <Content style={{padding:10}}>  
                <View style={{backgroundColor:"#CFCFCF", padding:10, marginBottom:10, borderRadius:8}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Perhatian</Text>
                    <Text style={{fontStyle:'italic',fontSize:14,}}>Pastikan anda memasukan data profil dengan benar karena itu menjadi penentu permohonan anda akan di terim</Text>
                </View>
                <StepperScreen step={0}/>
                <View style={{marginBottom:10}}>
                    <Text style={{fontSize:14}}>Nomor Whatsapp</Text>        
                    <Item regular style={{marginBottom:5}}>                   
                        <Input disabled={true} style={{fontSize:13, height:40}} value={DataNomorWA} />
                    </Item>

                    <Text style={{fontSize:14}}>Nomor KTP</Text>        
                    <Item regular style={{marginBottom:5}}>                   
                        <Input style={{fontSize:13, height:40}} value={KTP} onChangeText={text=>{setKTP(text); }} />
                    </Item>

                    <Text style={{fontSize:14}}>Nama Lengkap</Text>
                    <Item regular style={{marginBottom:5}}>
                        <Input style={{fontSize:13, height:40}} value={NamaLengkap} onChangeText={text=>{setNamaLengkap(text); }} />
                    </Item>
                    
                    <Text style={{fontSize:14}}>Jenis Kelamin</Text>
                    <Form style={{borderWidth:1, borderColor:'#CFCFCF', marginBottom:10}}>
                        <Picker
                            mode="dropdown"
                            //iosIcon={<Icon name="arrow-down" />}
                            headerStyle={{ backgroundColor: "#b95dd3" }}
                            headerBackButtonTextStyle={{ color: "#fff" }}
                            headerTitleStyle={{ color: "#fff" }}
                            selectedValue={JenisKelamin}
                            onValueChange={selectItem=> {setJenisKelamin(selectItem)} }
                        >
                            <Picker.Item label="Laki-laki" value="Laki-laki" />
                            <Picker.Item label="Perempuan" value="Perempuan" />
                        </Picker>
                    </Form>

                    <Text style={{fontSize:14}}>Tempat Lahir</Text>  
                    <Item regular style={{marginBottom:5}}>
                        <Input style={{fontSize:13, height:40}} value={TempatLahir} onChangeText={text=>{setTempatLahir(text); }}  />
                    </Item>

                    <Text style={{fontSize:14}}>Tanggal Lahir</Text>  
                    
                    <Item regular style={{marginBottom:5}}>
                        <TouchableOpacity onPress={showDatepicker} style={{width:'100%'}} >
                            <Input style={{fontSize:13, height:40}} value={TanggalLahir} disabled={true}/>
                        </TouchableOpacity>
                    </Item>
                    {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        />
                    )}
                    
                    <Text style={{fontSize:14}}>Alamat</Text>  
                    <Item regular style={{marginBottom:5}}>
                        <Input style={{fontSize:13, height:40}} value={Alamat} onChangeText={text=>setAlamat(text)}  />
                    </Item>
                    
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:'32%', marginRight:10}}>
                            <Text>Upload Foto</Text>
                            <TouchableOpacity onPress={()=>selectOneFile("Foto")}>
                                <View style={{marginTop:10, marginBottom:20, width:90, height:90, borderRadius:90, backgroundColor:"#CFCFCF"}}>
                                    <Image style={{width:90, height:90, borderRadius:90}} source={{ uri: Foto}} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{width:'32%', marginRight:10}}>
                            <Text>Upload KTP</Text>                    
                            <TouchableOpacity onPress={()=>selectOneFile("KTP")}>
                                <View style={{marginTop:10, marginBottom:20, width:90, height:60, backgroundColor:"#CFCFCF"}}>
                                    <Image style={{width:90, height:60,}} source={{ uri: DokumenKTP}} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{width:'32%'}}>
                            <Text>Upload KK</Text>
                            <TouchableOpacity onPress={()=>selectOneFile("KK")}>
                                <View style={{marginTop:10, marginBottom:20, width:90, height:60, backgroundColor:"#CFCFCF"}}>
                                    <Image style={{width:90, height:60,}} source={{ uri: DokumenKK}} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Button style={{margin:5, justifyContent:'center'}}  onPress={()=>{
                        const { NomorWA } = route.params;
                        var dataPermohonan = {
                            NIK : KTP,
                            NamaLengkap,
                            JenisKelamin,
                            TempatLahir,
                            TanggalLahir,
                            Alamat,
                            Foto,
                            DokumenKTP,
                            DokumenKK,
                            Telp : NomorWA
                        }
                        navigation.navigate('Akademik', {dataPermohonan})
                    }}><Text>Lanjut</Text></Button>
                </View>
            </Content>
        </Container>
    )
}
