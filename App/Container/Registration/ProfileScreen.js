import React, {useState} from 'react'
import { View, FlatList, TouchableOpacity, Image,SafeAreaView, ScrollView  } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text, Input, Item, Form, Picker } from 'native-base'
import StepperScreen from './StepperScreen'

export default function ProfileScreen({navigation}) {
    const [nomorKTP, setnomorKTP] = useState('')
    const [namaLengkap, setnamaLengkap] = useState('')
    const [jenisKelamin, setjenisKelamin] = useState('Laki-laki')
    const [tempatLahir, settempatLahir] = useState('')
    const [alamat, setalamat] = useState('')
    return(
        <Container>
            <Content style={{padding:10}}>  
                <View style={{backgroundColor:"#CFCFCF", padding:10, marginBottom:10, borderRadius:8}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Perhatian</Text>
                    <Text style={{fontStyle:'italic',fontSize:14,}}>Pastikan anda memasukan data profil dengan benar karena itu menjadi penentu permohonan anda akan di terim</Text>
                </View>
                <StepperScreen step={0}/>
                <View style={{marginBottom:10}}>
                    <Text style={{fontSize:14}}>Nomor KTP</Text>        
                    <Item regular style={{marginBottom:5}}>                   
                        <Input style={{fontSize:13, height:40}} value={nomorKTP} onChangeText={text=>{setnomorKTP(text); }} />
                    </Item>

                    <Text style={{fontSize:14}}>Nama Lengkap</Text>
                    <Item regular style={{marginBottom:5}}>
                        <Input style={{fontSize:13, height:40}} value={namaLengkap} onChangeText={text=>{setnamaLengkap(text); }} />
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
                        <Input style={{fontSize:13, height:40}} value={tempatLahir} onChangeText={text=>{settempatLahir(text); dataPermohonan({tempatLahir:text})}}  />
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

                    <Button style={{margin:5, justifyContent:'center'}}  onPress={()=>{
                        navigation.navigate('Akademik', {dataPermohonan:'12445'})
                    }}><Text>Lanjut</Text></Button>
                </View>
            </Content>
        </Container>
    )
}
