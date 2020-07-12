import React, {useContext, useState} from 'react'
import { View } from 'react-native'
import { Container, Item, Content, Footer, Input, Button, Text } from 'native-base'
import ApiNotification from '../../Services/ApiNotification'
import AsyncStorage from '@react-native-community/async-storage'
import Api from '../../Services/Api'

export default function VerifikasiTelpScreen({navigation}) {
    const [NomorWA, setNomorWA] = useState('')
    const [validWA, setvalidWA] = useState('')
    const [KodeVerifikasi, setKodeVerifikasi] = useState('')
    const [KodeOTP, setKodeOTP] = useState('')
    const [NomorTerdaftar, setNomorTerdaftar] = useState(false)

    function randomCode(length) {
        var result           = '';
        var characters       = '0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    return (
        <Container>
            <Content style={{padding:10}}>
                <View style={{backgroundColor:"#CFCFCF", padding:10, marginBottom:10, borderRadius:8}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Perhatian</Text>
                    <Text style={{fontStyle:'italic',fontSize:14,}}>Pastikan anda memasukan data profil dengan benar karena itu menjadi penentu permohonan anda akan di terim</Text>
                </View> 
                {
                    validWA === "" || validWA === "validWA" ?
                    <View>
                        <Text style={{fontSize:14}}>Masukkan Nomor Whatsapp kamu</Text>        
                        <Item regular style={{marginBottom:10}}>                   
                            <Input keyboardType="number-pad" style={{fontSize:13, height:40}} value={NomorWA} 
                                onChangeText={text=>{if(text.length>11)
                                    {
                                        Api.profile_select(text).then(res=>{
                                            if(res.data.length> 0){
                                                setNomorTerdaftar(true)
                                            }
                                            else{
                                                setvalidWA("validWA");
                                            }
                                        })
                                         }
                                else{setvalidWA(""); setNomorTerdaftar(false)}; setNomorWA(text)}} />
                        </Item>
                    </View> : null
                }
                {
                    validWA === "kirim" || validWA === "valid" ?
                    <View>
                        <Text style={{fontSize:14}}>Kode Verifikasi</Text>        
                        <Item regular style={{marginBottom:10}}>                   
                            <Input keyboardType="number-pad" style={{fontSize:13, height:40}} value={KodeVerifikasi} 
                                onChangeText={text=>{if(text === KodeOTP){setvalidWA("valid")}else{setvalidWA("kirim")};setKodeVerifikasi(text)}} />
                        </Item>
                    </View> : null
                }
                {
                    validWA === "valid"? 
                    <Button style={{justifyContent:'center'}} onPress={()=>{ AsyncStorage.setItem('Telp', NomorWA); navigation.navigate('Profile', {NomorWA}) }}><Text>Lanjut ke Pendaftaran</Text></Button> :                     
                    validWA === "validWA" ? 
                    <Button style={{justifyContent:'center'}} 
                        onPress={()=>{
                            var code = randomCode(5)
                            setKodeOTP(code)
                            ApiNotification.sendwa(NomorWA, "Kode Verifikasi Anda : "+code).then(res=>console.log(res.data))
                            setvalidWA("kirim")

                    }}>
                            <Text>Kirim Kode Verifikasi</Text>
                    </Button> : null
                }
                {
                    NomorTerdaftar? 
                    <Text style={{fontStyle:'italic'}}>Nomor ini telah terdaftar. Silahkan gunakan nomor yang lain.</Text> : null
                }
            </Content>
            
        </Container>
    )
}
