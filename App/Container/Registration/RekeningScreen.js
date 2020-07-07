import React, {useState} from 'react'
import { View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text, Input, Item, Form, Picker } from 'native-base'

export default function RekeningScreen({navigation}) {
    return (
        <Container>
            <Content style={{padding:8}}>  
                <View style={{backgroundColor:"#CFCFCF", padding:10, marginBottom:10, borderRadius:8}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Perhatian</Text>
                    <Text style={{fontStyle:'italic',fontSize:14,}}>Pastikan anda memasukan data Rekening dengan benar karena itu menjadi penentu permohonan anda akan di terima</Text>
                </View>      
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
                
                
            </Content>
            <Button style={{margin:5, justifyContent:'center'}}  onPress={()=>navigation.navigate('Persyaratan')}><Text>Lanjut</Text></Button>
        </Container>
    )
}