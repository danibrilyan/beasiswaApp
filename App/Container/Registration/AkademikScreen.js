import React, {useEffect, useState, useContext, useReducer} from 'react'
import { View, FlatList, TouchableOpacity, Image,SafeAreaView, ScrollView  } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text, Input, Item, Form, Picker } from 'native-base'
import { UniversitasContext } from '../../Context/UniversitasContext'
import StepperScreen from './StepperScreen'

export default function AkademikScreen({navigation}) {
    const {Universitas} = useContext(UniversitasContext)
    const [dataUniversitas, setdataUniversitas] = useState('0')
    const [dataFakultas, setdataFakultas] = useState('0')
    const [dataJurusan, setdataJurusan] = useState('0')
    const [dataJenjangPendidikan, setdataJenjangPendidikan] = useState('0')
    const [dataBiayaSPP, setdataBiayaSPP] = useState(0)
    const [dataBiayaSKS, setdataBiayaSKS] = useState(0)
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

                    <Text style={{fontSize:14}}>Biaya SPP</Text>
                    <Item regular style={{marginBottom:5}}>
                        <Input style={{fontSize:13, height:40}} keyboardType='number-pad' value={dataBiayaSPP} onChangeText={text=>setdataBiayaSPP(text)}  />
                    </Item>

                    <Text style={{fontSize:14}}>Biaya SKS</Text>
                    <Item regular style={{marginBottom:5}}>
                        <Input style={{fontSize:13, height:40}} keyboardType='number-pad' value={dataBiayaSKS} onChangeText={text=>setdataBiayaSKS(text)}  />
                    </Item>
                    
                </View>
                
            </Content>
            <View style={{flexDirection:'row'}}>
                    <Button style={{width:'47%', margin:5, justifyContent:'center'}} onPress={()=>{
                        navigation.goBack()
                    }}><Text>Kembali</Text></Button>
                    <Button style={{width:'47%', margin:5, justifyContent:'center'}}  onPress={()=>{
                        navigation.navigate('Rekening')
                    }}><Text>Lanjut</Text></Button>
                </View>
        </Container>
        
        
    )
}
