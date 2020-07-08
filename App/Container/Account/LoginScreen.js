import React, {useState, useContext} from 'react'
import { View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import logoantam from '../../Assets/Images/antam.png'
import { AuthContext } from '../../Context/AuthContext';
import { StackActions } from '@react-navigation/native';

export default function LoginScreen({navigation}) {
    const {auth, authdispatch} = useContext(AuthContext)
    return (
        <Container>
            <Content>
                <View style={{ justifyContent:'center', alignItems:'center',
                    paddingTop:50, paddingBottom:50, borderBottomColor:'#CFCFCF', borderBottomWidth:1}}>
                    <Image source={logoantam}/>
                </View>
                <View style={{padding:15}}>
                    <Text style={{fontSize:16}}>
                        Selamat Datang di Aplikasi Tim Verifikasi Beasiswa PT. Aneka Tambang UBPN Maluku Utara.
                    </Text>
                    <Text style={{fontSize:16, marginTop:8}}>
                        Anda dapat menjadi bagian peserta penerima bantuan beasiswa di area Ring 1 dan 2 UBPN Maluku Utara. 
                    </Text>
                    <Text style={{fontSize:16, marginTop:8}}>
                        Bantuan tersebut berupa : 
                    </Text>
                    <Text style={{fontSize:16}}>1. Bantuan Uang Semester (SPP dan SKS)</Text>
                    <Text style={{fontSize:16}}>2. Bantuan Studi Akhir</Text>
                    
                    <Text style={{fontSize:16, marginTop:8}}>
                        Silahkan Baca kriterianya dibawah ini 
                        
                    </Text>
                    <TouchableOpacity><Text style={{fontSize:16, marginTop:8, color:'blue'}}>Persyaratan Beasiswa</Text></TouchableOpacity>
                    
                </View>
            </Content>
            <View style={{flexDirection:'row'}}>
                <Button style={{width:'47%', margin:5, justifyContent:'center'}}  onPress={()=>navigation.navigate('Verifikasi')}><Text>Masuk</Text></Button>
                <Button style={{width:'47%', margin:5, justifyContent:'center'}} onPress={()=>navigation.navigate('Profile')}><Text>Daftar</Text></Button>
            </View>
        </Container>
        
    )
}
