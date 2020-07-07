import React, {useState} from 'react'
import { View, FlatList, TouchableOpacity, Image,SafeAreaView, ScrollView  } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text, Input, Item, Form, Picker } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';

function DataProfil(){
    return(
        <View>
            <Text style={{fontSize:14}}>Nomor KTP</Text>        
            <Item regular style={{marginBottom:5}}>                   
                <Input style={{fontSize:13, height:40}}  />
            </Item>

            <Text style={{fontSize:14}}>Nama Lengkap</Text>
            <Item regular style={{marginBottom:5}}>
                <Input style={{fontSize:13, height:40}}  />
            </Item>
            
            <Text style={{fontSize:14}}>Jenis Kelamin</Text>
            <Form style={{borderWidth:1, borderColor:'#CFCFCF', marginBottom:10}}>
                <Picker
                    mode="dropdown"
                    //iosIcon={<Icon name="arrow-down" />}
                    headerStyle={{ backgroundColor: "#b95dd3" }}
                    headerBackButtonTextStyle={{ color: "#fff" }}
                    headerTitleStyle={{ color: "#fff" }}
                    // selectedValue={this.state.selected}
                // onValueChange={this.onValueChange.bind(this)}
                >
                    <Picker.Item label="Laki-laki" value="Laki-laki" />
                    <Picker.Item label="Perempuan" value="Perempuan" />
                </Picker>
            </Form>

            <Text style={{fontSize:14}}>Tempat Lahir</Text>  
            <Item regular style={{marginBottom:5}}>
                <Input style={{fontSize:13, height:40}}  />
            </Item>

            <Text style={{fontSize:14}}>Tanggal Lahir</Text>  
            <Item regular style={{marginBottom:5}}>
                <Input style={{fontSize:13, height:40}}  />
            </Item>

            <Text style={{fontSize:14}}>Alamat</Text>  
            <Item regular style={{marginBottom:5}}>
                <Input style={{fontSize:13, height:40}}  />
            </Item>

            <Text>Upload Foto</Text>
            <View style={{marginTop:10, marginBottom:20, width:90, height:90, borderRadius:90, backgroundColor:"#CFCFCF"}}></View>
        </View>
    )
}

function DataAkademik(){
    return(
        <View>
            <Text style={{fontSize:14}}>Universitas</Text>        
            <Form style={{borderWidth:1, borderColor:'#CFCFCF', marginBottom:10}}>
                <Picker
                    mode="dropdown"
                    headerStyle={{ backgroundColor: "#b95dd3" }}
                    headerBackButtonTextStyle={{ color: "#fff" }}
                    headerTitleStyle={{ color: "#fff" }}
                >
                    <Picker.Item label="Pilih Universitas" value="0" />
                    <Picker.Item label="Perempuan" value="Perempuan" />
                </Picker>
            </Form>

            <Text style={{fontSize:14}}>Fakultas</Text>        
            <Form style={{borderWidth:1, borderColor:'#CFCFCF', marginBottom:10}}>
                <Picker
                    mode="dropdown"
                    headerStyle={{ backgroundColor: "#b95dd3" }}
                    headerBackButtonTextStyle={{ color: "#fff" }}
                    headerTitleStyle={{ color: "#fff" }}
                >
                    <Picker.Item label="Pilih Fakultas" value="0" />
                    <Picker.Item label="Perempuan" value="Perempuan" />
                </Picker>
            </Form>

            <Text style={{fontSize:14}}>Jurusan</Text>        
            <Form style={{borderWidth:1, borderColor:'#CFCFCF', marginBottom:10}}>
                <Picker
                    mode="dropdown"
                    headerStyle={{ backgroundColor: "#b95dd3" }}
                    headerBackButtonTextStyle={{ color: "#fff" }}
                    headerTitleStyle={{ color: "#fff" }}
                >
                    <Picker.Item label="Pilih Jurusan" value="0" />
                    <Picker.Item label="Perempuan" value="Perempuan" />
                </Picker>
            </Form>

            <Text style={{fontSize:14}}>Jenjang Pendidikan</Text>        
            <Form style={{borderWidth:1, borderColor:'#CFCFCF', marginBottom:10}}>
                <Picker
                    mode="dropdown"
                    headerStyle={{ backgroundColor: "#b95dd3" }}
                    headerBackButtonTextStyle={{ color: "#fff" }}
                    headerTitleStyle={{ color: "#fff" }}
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
                <Input style={{fontSize:13, height:40}}  />
            </Item>

            <Text style={{fontSize:14}}>Biaya SKS</Text>
            <Item regular style={{marginBottom:5}}>
                <Input style={{fontSize:13, height:40}}  />
            </Item>
            
        </View>
    )
}

function DataRekening(){
    return(
        <View>      
            <Text style={{fontSize:14}}>Nama Bank</Text>        
            <Form style={{borderWidth:1, borderColor:'#CFCFCF', marginBottom:10}}>
                <Picker
                    mode="dropdown"
                    headerStyle={{ backgroundColor: "#b95dd3" }}
                    headerBackButtonTextStyle={{ color: "#fff" }}
                    headerTitleStyle={{ color: "#fff" }}
                >
                    <Picker.Item label="Pilih Bank" value="0" />
                    <Picker.Item label="Perempuan" value="Perempuan" />
                </Picker>
            </Form>

            <Text style={{fontSize:14}}>Nomor Rekening</Text>
            <Item regular style={{marginBottom:5}}>
                <Input style={{fontSize:13, height:40}}  />
            </Item>

            <Text style={{fontSize:14}}>Nama Pemilik Rekening</Text>
            <Item regular style={{marginBottom:5}}>
                <Input style={{fontSize:13, height:40}}  />
            </Item>
        </View>
    )
}

function DataPersyaratan(){
    return(
        <View>
            <Text style={{fontSize:14}}>KTP</Text>        
            <Button style={{justifyContent:'center', height:35, marginBottom:10}}><Text style={{fontSize:12}}>Upload Dokumen</Text></Button>

            <Text style={{fontSize:14}}>Kartu Keluarga</Text>        
            <Button style={{justifyContent:'center', height:35, marginBottom:10}}><Text style={{fontSize:12}}>Upload Dokumen</Text></Button>

            <Text style={{fontSize:14}}>Slip Pembayaran Semester</Text>        
            <Button style={{justifyContent:'center', height:35, marginBottom:10}}><Text style={{fontSize:12}}>Upload Dokumen</Text></Button>

            <Text style={{fontSize:14}}>Kartu Tanda Mahasiswa</Text>        
            <Button style={{justifyContent:'center', height:35, marginBottom:10}}><Text style={{fontSize:12}}>Upload Dokumen</Text></Button>

            <Text style={{fontSize:14}}>Buku Tabungan</Text>        
            <Button style={{justifyContent:'center', height:35, marginBottom:10}}><Text style={{fontSize:12}}>Upload Dokumen</Text></Button>
            
        </View>
    )
}

export default function RegistrationScreen({navigation}) {
    const [step, setstep] = useState(0)
    return (
        <Container>
            <Content style={{padding:8}}>  
                <View style={{backgroundColor:"#CFCFCF", padding:10, marginBottom:10, borderRadius:8}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Perhatian</Text>
                    <Text style={{fontStyle:'italic',fontSize:14,}}>Pastikan anda memasukan data profil dengan benar karena itu menjadi penentu permohonan anda akan di terim</Text>
                </View>   
                <View style={{marginBottom:10}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={[step===0? {fontWeight:'bold', backgroundColor:'#AFAFAF'}: {backgroundColor:'#DFDFDF'}, {width:'25%', textAlign:'center', fontSize:12,  padding:3}]}>1. Profile</Text>
                        <Text style={[step===1? {fontWeight:'bold', backgroundColor:'#AFAFAF'}: {backgroundColor:'#DFDFDF'}, {width:'25%', textAlign:'center', fontSize:12,  padding:3}]}>2. Akademik</Text>
                        <Text style={[step===2? {fontWeight:'bold', backgroundColor:'#AFAFAF'}: {backgroundColor:'#DFDFDF'}, {width:'25%', textAlign:'center', fontSize:12,  padding:3}]}>3. Rekening</Text>
                        <Text style={[step===3? {fontWeight:'bold', backgroundColor:'#AFAFAF'}: {backgroundColor:'#DFDFDF'}, {width:'25%', textAlign:'center', fontSize:12,  padding:3}]}>4. Persyaratan</Text>
                    </View>                    
                </View> 
                <SafeAreaView>
                <ScrollView>
                {
                    step === 0 ?
                    <DataProfil/> :
                    step === 1 ? 
                    <DataAkademik/> : 
                    step === 2 ? 
                    <DataRekening/> : 
                    <DataPersyaratan/>
                }
                </ScrollView>
                </SafeAreaView>
                
            </Content>
            {
                step > 0 ?
                <View style={{flexDirection:'row'}}>
                    <Button style={{width:'47%', margin:5, justifyContent:'center'}} onPress={()=>{
                        setstep(step-1)
                    }}><Text>Kembali</Text></Button>
                    <Button style={{width:'47%', margin:5, justifyContent:'center'}}  onPress={()=>{
                        if(step<3){
                            setstep(step+1)
                        }
                        else{
                            navigation.navigate('Login')
                        }
                    }}><Text>{step<3?"Lanjut":"Kirim"}</Text></Button>
                </View>
                : 
                <Button style={{margin:5, justifyContent:'center'}}  onPress={()=>{
                        setstep(step+1)
                }}><Text>Lanjut</Text></Button>
            }
        </Container>
            
    )
}
