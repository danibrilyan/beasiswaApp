import React, {useContext} from 'react'
import { View } from 'react-native'
import { AuthContext, userlogin } from '../../Context/AuthContext';
import { Container, Item, Content, Footer, Input, Button, Text } from 'native-base'
import { StackActions } from '@react-navigation/native';

export default function VerifikasiScreen({navigation}) {
    const {auth, authdispatch} = useContext(AuthContext)
    return (
        <Container>
            <Content style={{padding:10}}>
                <View style={{backgroundColor:"#CFCFCF", padding:10, marginBottom:10, borderRadius:8}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Perhatian</Text>
                    <Text style={{fontStyle:'italic',fontSize:14,}}>Pastikan anda memasukan data profil dengan benar karena itu menjadi penentu permohonan anda akan di terim</Text>
                </View> 
                <Text style={{fontSize:14}}>Masukkan Nomor Whatsapp kamu</Text>        
                <Item regular style={{marginBottom:10}}>                   
                    <Input style={{fontSize:13, height:40}}  />
                </Item>
                <Button style={{justifyContent:'center'}} onPress={()=>{userlogin(authdispatch, navigation)}}><Text>Kirim</Text></Button>
            </Content>
            
        </Container>
    )
}
