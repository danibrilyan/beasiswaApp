import React, {useEffect, useState, useContext, useReducer} from 'react'
import { View, FlatList, TouchableOpacity, Image,SafeAreaView, ScrollView  } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text, Input, Item, Form, Picker } from 'native-base'
import StepperScreen from './StepperScreen'

export default function RekeningScreen({navigation}) {
    const [NomorRekning, setNomorRekning] = useState('')
    const [NamaBank, setNamaBank] = useState('')
    const [PemiliRekening, setPemiliRekening] = useState('')
    return(
        <Container>
            <Content style={{padding:8}}>  
                <View style={{backgroundColor:"#CFCFCF", padding:10, marginBottom:10, borderRadius:8}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Perhatian</Text>
                    <Text style={{fontStyle:'italic',fontSize:14,}}>Pastikan anda memasukan data profil dengan benar karena itu menjadi penentu permohonan anda akan di terim</Text>
                </View>
                <StepperScreen step={2}/>
                <View style={{marginBottom:10}}>
                    <Text style={{fontSize:14}}>Nama Bank</Text>        
                    <Form style={{borderWidth:1, borderColor:'#CFCFCF', marginBottom:10}}>
                        <Picker
                            mode="dropdown"
                            headerStyle={{ backgroundColor: "#b95dd3" }}
                            headerBackButtonTextStyle={{ color: "#fff" }}
                            headerTitleStyle={{ color: "#fff" }}
                        >
                            <Picker.Item label="Pilih Bank" value="0" />
                            <Picker.Item label="Bank Mandiri" value="Bank Mandiri" />                    
                            <Picker.Item label="Bank BNI" value="Bank BNI" />
                            <Picker.Item label="Bank BRI" value="Bank BRI" />
                            <Picker.Item label="Bank BCA" value="Bank BCA" />
                            <Picker.Item label="Bank BTN" value="Bank BTN" />
                            <Picker.Item label="Bank Permata" value="Bank Permata" />
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
                
            </Content>
            <View style={{flexDirection:'row'}}>
                    <Button style={{width:'47%', margin:5, justifyContent:'center'}} onPress={()=>{
                        navigation.goBack()
                    }}><Text>Kembali</Text></Button>
                    <Button style={{width:'47%', margin:5, justifyContent:'center'}}  onPress={()=>{
                        navigation.navigate('Persyaratan')
                    }}><Text>Lanjut</Text></Button>
                </View>
        </Container>
        
        
    )
}
