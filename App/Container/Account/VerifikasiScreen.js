import React, {useContext} from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext, userlogin } from '../../Context/AuthContext';
import { StackActions } from '@react-navigation/native';

export default function VerifikasiScreen({navigation}) {
    const {auth, authdispatch} = useContext(AuthContext)
    return (
        <View>
            <Text>Verifikasi OTP</Text>
            <Button title="Verifikasi" 
                onPress={()=>{
                    userlogin(authdispatch, navigation)
                }}
            />
        </View>
    )
}
