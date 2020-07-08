import React, {useContext} from 'react'
import { View, Text } from 'react-native'
// import { AuthContext } from '../../Context/AuthContext';
// import { StackActions } from '@react-navigation/native';

export default function VerifikasiScreen({navigation}) {
    // const {auth, authdispatch} = useContext(AuthContext)
    return (
        <View>
            <Text>Verifikasi OTP</Text>
            <Button title="Verifikasi" 
            // onPress={()=>{
            //     authdispatch({type:'SET_DATA', data: true})
            //     navigation.dispatch(
            //         StackActions.replace('MainNav')
            //     )
            // }}
            />
        </View>
    )
}
