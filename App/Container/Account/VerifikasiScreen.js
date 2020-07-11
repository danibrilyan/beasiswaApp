import React, {useContext, useState} from 'react'
import { View } from 'react-native'
import { AuthContext, userlogin } from '../../Context/AuthContext';
import { Container, Item, Content, Footer, Input, Button, Text } from 'native-base'
import { StackActions } from '@react-navigation/native';
import ApiNotification from '../../Services/ApiNotification'

export default function VerifikasiScreen({navigation}) {
    const {auth, authdispatch} = useContext(AuthContext)
    const [NomorWA, setNomorWA] = useState('')
    const [validWA, setvalidWA] = useState('')
    const [KodeVerifikasi, setKodeVerifikasi] = useState('')
    const [KodeOTP, setKodeOTP] = useState('')

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
                                onChangeText={text=>{if(text.length>11){setvalidWA("validWA")}else{setvalidWA("")}; setNomorWA(text)}} />
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
                    <Button style={{justifyContent:'center'}} onPress={()=>{userlogin(authdispatch, navigation, NomorWA)}}><Text>Masuk</Text></Button> :                     
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
                
            </Content>
            
        </Container>
    )
}
