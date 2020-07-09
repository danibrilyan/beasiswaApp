import React, {useEffect, useState, useContext, useReducer} from 'react'
import { View, FlatList, TouchableOpacity, Image,SafeAreaView, ScrollView  } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text, Input, Item, Form, Picker } from 'native-base'
import { UniversitasContext } from '../../Context/UniversitasContext'
import StepperScreen from './StepperScreen'
import DocumentPicker from 'react-native-document-picker';

export default function AkademikScreen({route, navigation}) {
    const {Universitas} = useContext(UniversitasContext)
    const [dataUniversitas, setdataUniversitas] = useState('0')
    const [dataFakultas, setdataFakultas] = useState('0')
    const [dataJurusan, setdataJurusan] = useState('0')
    const [dataJenjangPendidikan, setdataJenjangPendidikan] = useState('0')
    const [dataBiayaSPP, setdataBiayaSPP] = useState(0)
    const [dataBiayaSKS, setdataBiayaSKS] = useState(0)
    const [NIM, setNIM] = useState('')
    const [TahunMasuk, setTahunMasuk] = useState(0)
    const [Semester, setSemester] = useState(0)
    const [DokumentKartuMahasiswa, setDokumentKartuMahasiswa] = useState('')

    async function selectOneFile() {
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
          setDokumentKartuMahasiswa(res.uri)
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
    return(
        <Container>
            <Content style={{padding:8}}>  
                <View style={{backgroundColor:"#CFCFCF", padding:10, marginBottom:10, borderRadius:8}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Perhatian</Text>
                    <Text style={{fontStyle:'italic',fontSize:14,}}>Pastikan anda memasukan data profil dengan benar karena itu menjadi penentu permohonan anda akan di terim</Text>
                </View>
                <StepperScreen step={1}/>
                <View style={{marginBottom:10}}>
                    <Text style={{fontSize:14}}>Universitas</Text>        
                    <Form style={{borderWidth:1, borderColor:'#CFCFCF', marginBottom:10}}>
                        <Picker
                            mode="dropdown"
                            headerStyle={{ backgroundColor: "#b95dd3" }}
                            headerBackButtonTextStyle={{ color: "#fff" }}
                            headerTitleStyle={{ color: "#fff" }}
                            selectedValue={dataUniversitas}
                            onValueChange={(itemValue)=>setdataUniversitas(itemValue)}
                        >
                            <Picker.Item label="Pilih Universitas" value="0" />
                            {
                                Universitas.filter(x=>x.Tingkat === "Universitas").map(item=>{
                                    return(
                                        <Picker.Item label={item.Nama} value={item._id} />
                                    )
                                })
                            }
                        </Picker>
                    </Form>

                    <Text style={{fontSize:14}}>Fakultas</Text>        
                    <Form style={{borderWidth:1, borderColor:'#CFCFCF', marginBottom:10}}>
                        <Picker
                            mode="dropdown"
                            headerStyle={{ backgroundColor: "#b95dd3" }}
                            headerBackButtonTextStyle={{ color: "#fff" }}
                            headerTitleStyle={{ color: "#fff" }}
                            selectedValue={dataFakultas}
                            onValueChange={(itemValue)=>setdataFakultas(itemValue)}
                        >
                            <Picker.Item label="Pilih Fakultas" value="0" />
                            {
                                Universitas.filter(x=>x.Tingkat === "Fakultas" && x.Induk === dataUniversitas).map(item=>{
                                    return(
                                        <Picker.Item label={item.Nama} value={item._id} />
                                    )
                                })
                            }
                        </Picker>
                    </Form>

                    <Text style={{fontSize:14}}>Jurusan</Text>        
                    <Form style={{borderWidth:1, borderColor:'#CFCFCF', marginBottom:10}}>
                        <Picker
                            mode="dropdown"
                            headerStyle={{ backgroundColor: "#b95dd3" }}
                            headerBackButtonTextStyle={{ color: "#fff" }}
                            headerTitleStyle={{ color: "#fff" }}
                            selectedValue={dataJurusan}
                            onValueChange={(itemValue)=>setdataJurusan(itemValue)}
                        >
                            <Picker.Item label="Pilih Jurusan" value="0" />
                            {
                                Universitas.filter(x=>x.Tingkat === "Jurusan" && x.Induk === dataFakultas).map(item=>{
                                    return(
                                        <Picker.Item label={item.Nama} value={item._id} />
                                    )
                                })
                            }
                        </Picker>
                    </Form>

                    <Text style={{fontSize:14}}>Jenjang Pendidikan</Text>        
                    <Form style={{borderWidth:1, borderColor:'#CFCFCF', marginBottom:10}}>
                        <Picker
                            mode="dropdown"
                            headerStyle={{ backgroundColor: "#b95dd3" }}
                            headerBackButtonTextStyle={{ color: "#fff" }}
                            headerTitleStyle={{ color: "#fff" }}
                            selectedValue={dataJenjangPendidikan}
                            onValueChange={(itemValue)=>setdataJenjangPendidikan(itemValue)}
                        >
                            <Picker.Item label="Pilih Jenjang Pendidikan" value="0" />
                            <Picker.Item label="D3" value="D3" />
                            <Picker.Item label="S1" value="S1" />
                            <Picker.Item label="S2" value="S2" />
                            <Picker.Item label="S3" value="S3" />
                        </Picker>
                    </Form>
                    <Text style={{fontSize:14}}>Nomor Induk/Pokok Mahasiswa</Text>
                    <Item regular style={{marginBottom:5}}>
                        <Input style={{fontSize:13, height:40}} value={NIM} onChangeText={text=>{setNIM(text) }} />
                    </Item>
                    <Text style={{fontSize:14}}>Tahun Masuk</Text>
                    <Item regular style={{marginBottom:5}}>
                        <Input keyboardType='number-pad' style={{fontSize:13, height:40}} value={TahunMasuk} onChangeText={text=>{setTahunMasuk(text) }} />
                    </Item>
                    <Text style={{fontSize:14}}>Semester Saat ini</Text>
                    <Item regular style={{marginBottom:5}}>
                        <Input keyboardType='number-pad' style={{fontSize:13, height:40}} value={Semester} onChangeText={text=>{setSemester(text) }} />
                    </Item>
                    <Text style={{fontSize:14}}>Biaya SPP</Text>
                    <Item regular style={{marginBottom:5}}>
                        <Input style={{fontSize:13, height:40}} keyboardType='number-pad' value={dataBiayaSPP} onChangeText={text=>setdataBiayaSPP(text)}  />
                    </Item>
                    <Text style={{fontSize:14}}>Biaya SKS</Text>
                    <Item regular style={{marginBottom:5}}>
                        <Input style={{fontSize:13, height:40}} keyboardType='number-pad' value={dataBiayaSKS} onChangeText={text=>setdataBiayaSKS(text)}  />
                    </Item>

                    <Text>Upload Kartu Mahasiswa</Text>
                    <TouchableOpacity onPress={()=>selectOneFile()}>
                        <View style={{marginTop:10, marginBottom:20, width:90, height:60, backgroundColor:"#CFCFCF"}}>
                            <Image style={{width:90, height:60}} source={{ uri: DokumentKartuMahasiswa}} />
                        </View>
                    </TouchableOpacity>
                </View>
                
            </Content>
            <View style={{flexDirection:'row'}}>
                    <Button style={{width:'47%', margin:5, justifyContent:'center'}} onPress={()=>{
                        navigation.goBack()
                    }}><Text>Kembali</Text></Button>
                    <Button style={{width:'47%', margin:5, justifyContent:'center'}}  onPress={()=>{

                        const { dataPermohonan } = route.params;
                        var data = dataPermohonan
                        data = {...data, 
                            Universitas: dataUniversitas,
                            Fakultas : dataFakultas,
                            Jurusan : dataJurusan,
                            JenjangPendidikan : dataJenjangPendidikan,
                            NIM : NIM,
                            TahunMasuk: TahunMasuk,
                            Semester : Semester,
                            BiayaSKS : dataBiayaSKS,
                            BiayaSPP : dataBiayaSPP,
                            DokumenRekening: DokumenRekening
                        }
                        console.log(data)
                        navigation.navigate('Rekening', {dataPermohonan: data})
                    }}><Text>Lanjut</Text></Button>
                </View>
        </Container>
        
        
    )
}
