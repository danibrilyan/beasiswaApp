import React, {useEffect, useContext, useState} from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import {Container, Header, Content, Footer, FooterTab, Button, Text, Badge } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAddressCard, faChalkboardTeacher, faGraduationCap, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { AuthContext, userlogout } from '../../Context/AuthContext';
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../../Services/Api'

import HomeScreen from './HomeScreen'
import AkunScreen from './AkunScreen'
import PesanScreen from './PesanScreen'
import RiwayatScreen from './RiwayatScreen'

export default function HomeContainerScreen({navigation}) {
    const {auth, authdispatch} = useContext(AuthContext)
    const [tabScreen, settabScreen] = useState(0)
    return (
        <Container>
            <Content>
                {
                    tabScreen == 0 ?
                    <HomeScreen navigation={navigation} /> :
                    tabScreen == 1 ?
                    <PesanScreen navigation={navigation}/> : 
                    tabScreen == 2 ?
                    <RiwayatScreen  navigation={navigation}/> :
                    <AkunScreen  navigation={navigation} />
                }
                
            </Content>
             <Footer>
                <FooterTab style={{backgroundColor:'white', borderTopColor:'#CFCFCF', borderTopWidth:1}}>
                    <Button style={[tabScreen == 0 ? {borderBottomColor:'#3F51B5'} : {borderBottomColor:'white'}, {borderBottomWidth:3}]} onPress={()=>settabScreen(0)}>
                        <Text style={[{fontSize:13}, tabScreen == 0 ? {color:'#3F51B5', fontWeight:'bold'} : {color:'black'}]}>Home</Text>
                    </Button>
                    <Button style={[tabScreen == 1 ? {borderBottomColor:'#3F51B5'} : {borderBottomColor:'white'}, {borderBottomWidth:3, position:'relative'}]} onPress={()=>settabScreen(1)}>
                        <Text style={[{fontSize:13},tabScreen == 1 ? {color:'#3F51B5', fontWeight:'bold'} : {color:'black'}]}>
                            Pesan
                            
                        </Text>
                        <Badge style={{position:'absolute', right:0, top:-5}}>
                            <Text>2</Text>
                        </Badge>
                    </Button>
                    <Button style={[tabScreen == 2 ? {borderBottomColor:'#3F51B5'} : {borderBottomColor:'white'}, {borderBottomWidth:3}]} onPress={()=>settabScreen(2)}>
                        <Text style={[{fontSize:13},tabScreen == 2 ? {color:'#3F51B5', fontWeight:'bold'} : {color:'black'}]}>Riwayat</Text>
                    </Button>
                    <Button style={[tabScreen == 3 ? {borderBottomColor:'#3F51B5'} : {borderBottomColor:'white'}, {borderBottomWidth:3}]} onPress={()=>{
                            settabScreen(3)
                            //userlogout(authdispatch, navigation)
                        }} >
                        <Text style={[{fontSize:13},tabScreen == 3 ? {color:'#3F51B5', fontWeight:'bold'} : {color:'black'}]}>Akun</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    )
}
