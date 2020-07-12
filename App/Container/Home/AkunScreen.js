import React, {useEffect, useContext, useState} from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Container, Button, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { faPen, faChevronRight, faChalkboardTeacher, faGraduationCap, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { AuthContext, userlogout } from '../../Context/AuthContext';
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../../Services/Api'

export default function AkunScreen({navigation}) {
    const {auth, authdispatch} = useContext(AuthContext)
    return (
        <View>
            <View style={{flexDirection:'row', padding:10, borderBottomWidth:1, borderBottomColor:'#CFCFCF'}}>
                <Image style={{width:60,height:60, borderRadius:50, marginTop:5, marginBottom:5, marginRight:18}}
                    source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <View style={{marginTop:5, width:'68%'}}>
                    <Text style={{fontSize:18}}>Hi, Syahri Ramadhan</Text>
                    <Text style={{fontSize:18, fontWeight:'bold'}}>081241572296</Text>
                </View>
                <View>
                    <FontAwesomeIcon icon={faPen} size="24" style={{marginTop:10}}/>
                </View>
            </View>
            <List>
                <ListItem selected={false}>
                <Left>
                    <Text>FAQ</Text>
                </Left>
                <Right>
                    <FontAwesomeIcon icon={faChevronRight} />
                </Right>
                </ListItem>
                <ListItem>
                <Left>
                    <Text>Keluhan</Text>
                </Left>
                <Right>
                    <FontAwesomeIcon icon={faChevronRight} />
                </Right>
                </ListItem>
                <ListItem>
                <Left>
                    <Text>Bantuan</Text>
                </Left>
                <Right>
                    <FontAwesomeIcon icon={faChevronRight} />
                </Right>
                </ListItem>
            </List>
            <View style={{padding:10}}>
                <Button style={{width:'100%', justifyContent:'center', borderRadius:30}} 
                    onPress={()=>{
                        userlogout(authdispatch, navigation)
                    }}
                ><Text>Keluar</Text></Button>
            </View>
            
        </View>
    )
}
