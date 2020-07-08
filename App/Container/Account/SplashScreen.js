import React, {useEffect,useContext} from 'react'
import { View, Text, Button, Image } from 'react-native'
import { StackActions } from '@react-navigation/native';
import logoantam from '../../Assets/Images/antam.png'
import { AuthContext, checklogin } from '../../Context/AuthContext';
import { DomisiliContext, getDomisili } from '../../Context/DomisiliContext';
import { UniversitasContext, getUniversitas } from '../../Context/UniversitasContext';


export default function SplashScreen({navigation}) {
    const {auth, authdispatch} = useContext(AuthContext)
    const { Domisilidispatch } = useContext(DomisiliContext)
    const { Universitasdispatch } = useContext(UniversitasContext)
    useEffect(() => {     
        console.log('load data')   
        setTimeout( () => {            
            getDomisili(Domisilidispatch)
            getUniversitas(Universitasdispatch)
            checklogin(navigation)
        },2000);
    }, [])
    return (
        <View style={{justifyContent:'center',flex: 1, alignItems:'center', alignSelf:'center', alignContent:'center'}}>
            <Image source={logoantam}/>
            <Text style={{fontSize:16, marginTop:10}}>Selamat Datang di </Text>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Aplikasi Verifikasi Beasiswa ANTAM</Text>
            <Text style={{fontSize:18}}>UBPN Maluku Utara</Text>
        </View>
    )
}
