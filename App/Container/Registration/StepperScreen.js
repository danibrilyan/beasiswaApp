import React from 'react'
import { View, Text } from 'react-native'

export default function StepperScreen(props) {
    return (
        <View style={{marginBottom:10}}>
            <View style={{flexDirection:'row'}}>
                <Text style={[props.step===0? {fontWeight:'bold', backgroundColor:'#AFAFAF'}: {backgroundColor:'#DFDFDF'}, {width:'25%', textAlign:'center', fontSize:12,  padding:3}]}>1. Profile</Text>
                <Text style={[props.step===1? {fontWeight:'bold', backgroundColor:'#AFAFAF'}: {backgroundColor:'#DFDFDF'}, {width:'25%', textAlign:'center', fontSize:12,  padding:3}]}>2. Akademik</Text>
                <Text style={[props.step===2? {fontWeight:'bold', backgroundColor:'#AFAFAF'}: {backgroundColor:'#DFDFDF'}, {width:'25%', textAlign:'center', fontSize:12,  padding:3}]}>3. Rekening</Text>
                <Text style={[props.step===3? {fontWeight:'bold', backgroundColor:'#AFAFAF'}: {backgroundColor:'#DFDFDF'}, {width:'25%', textAlign:'center', fontSize:12,  padding:3}]}>4. Ringkasan</Text>
            </View>                    
        </View> 
    )
}
