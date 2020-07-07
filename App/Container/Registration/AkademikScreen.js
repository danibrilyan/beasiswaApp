import React, {useState} from 'react'
import { View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text, Input, Item, Form, Picker } from 'native-base'

export default function AkademikScreen({navigation}) {
    return (
        <Container>
            <Content style={{padding:8}}>  
                <View style={{backgroundColor:"#CFCFCF", padding:10, marginBottom:10, borderRadius:8}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Perhatian</Text>
                    <Text style={{fontStyle:'italic',fontSize:14,}}>Pastikan anda memasukan data akademik dengan benar karena itu menjadi penentu permohonan anda akan di terima</Text>
                </View>      
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
                
                
            </Content>
            <Button style={{margin:5, justifyContent:'center'}}  onPress={()=>navigation.navigate('Rekening')}><Text>Lanjut</Text></Button>
        </Container>        
    )
}
