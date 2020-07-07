import React, {useEffect,useContext} from 'react'
import { View, Text, Button, Image } from 'react-native'
import { StackActions } from '@react-navigation/native';
import logoantam from '../../Assets/Images/antam.png'
import { AuthContext } from '../../Context/AuthContext';

export default function SplashScreen({navigation}) {
    const {auth, authdispatch} = useContext(AuthContext)
    useEffect(() => {        
        setTimeout( () => {
            if(!auth){
                navigation.dispatch(
                    StackActions.replace('MainNav')
                )                
            }
            else{
                navigation.dispatch(
                    StackActions.replace('RegistrationNav')
                )
            }
        },5000);
    }, [])
    return (
        <View style={{justifyContent:'center',flex: 1, alignItems:'center', alignSelf:'center', alignContent:'center'}}>
            <Image source={logoantam}/>
            <Text style={{fontSize:16, marginTop:10}}>Selamat Datang di </Text>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Aplikasi Verifikasi Beasiswa ANTAM</Text>
            <Text style={{fontSize:18}}>UBPN Maluku Utara</Text>
            {/* <Button title="Login" onPress={()=>
                navigation.dispatch(
                    StackActions.replace('RegistrationNav')
                )
            } />
            <Button title="Home" onPress={()=>
                navigation.dispatch(
                    StackActions.replace('MainNav')
                )
            } /> */}
        </View>
    )
}
