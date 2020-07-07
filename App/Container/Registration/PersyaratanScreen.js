import React, {useState} from 'react'
import { View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text, Input, Item, Form, Picker } from 'native-base'

export default function PersyaratanScreen({navigation}) {
    return (
        <Container>
            <Content style={{padding:8}}>  
                <View style={{backgroundColor:"#CFCFCF", padding:10, marginBottom:10, borderRadius:8}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Perhatian</Text>
                    <Text style={{fontStyle:'italic',fontSize:14,}}>Pastikan anda memasukan data persyaratan dengan benar karena itu menjadi penentu permohonan anda akan di terima</Text>
                </View>      
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
                
            </Content>
            <Button style={{margin:5, justifyContent:'center'}}  onPress={()=>navigation.navigate('Login')}><Text>Kirim</Text></Button>
        </Container>
    )
}
