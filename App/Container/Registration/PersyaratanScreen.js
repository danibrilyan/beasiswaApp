import React, {useEffect, useState, useContext, useReducer} from 'react'
import { View, FlatList, TouchableOpacity, Image,SafeAreaView, ScrollView  } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text, Input, Item, Form, Picker } from 'native-base'
import StepperScreen from './StepperScreen'

export default function PersyaratanScreen({navigation}) {
    return(
        <Container>
            <Content style={{padding:8}}>  
                <View style={{backgroundColor:"#CFCFCF", padding:10, marginBottom:10, borderRadius:8}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Perhatian</Text>
                    <Text style={{fontStyle:'italic',fontSize:14,}}>Pastikan anda memasukan data profil dengan benar karena itu menjadi penentu permohonan anda akan di terim</Text>
                </View>
                <StepperScreen step={3}/>
                <View style={{marginBottom:10}}>
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
                
            </Content>
            <View style={{flexDirection:'row'}}>
                    <Button style={{width:'47%', margin:5, justifyContent:'center'}} onPress={()=>{
                        navigation.goBack()
                    }}><Text>Kembali</Text></Button>
                    <Button style={{width:'47%', margin:5, justifyContent:'center'}}  onPress={()=>{
                        navigation.navigate('Login')
                    }}><Text>Kirim</Text></Button>
                </View>
        </Container>
        
        
    )
}
