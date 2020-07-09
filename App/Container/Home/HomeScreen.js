import React, {useEffect, useContext, useState} from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import {Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAddressCard, faChalkboardTeacher, faGraduationCap, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { AuthContext, userlogout } from '../../Context/AuthContext';
import { DomisiliContext } from '../../Context/DomisiliContext';
import { UniversitasContext } from '../../Context/UniversitasContext';
import { ProfileContext, getProfile } from '../../Context/ProfileContext';
import AsyncStorage from '@react-native-community/async-storage';

export default function HomeScreen({navigation}) {
    const {auth, authdispatch} = useContext(AuthContext)
    const {Profile, Profiledispatch} = useContext(ProfileContext)
    const {Domisili} = useContext(DomisiliContext)
    const {Universitas} = useContext(UniversitasContext)

    const [dataUniversitas, setdataUniversitas] = useState('')
    const [dataFakultas, setdataFakultas] = useState('')
    const [dataJurusan, setdataJurusan] = useState('')

    useEffect(async() => {
        console.log('domisili', Domisili)
        console.log('Universitas', Universitas)
        const value = await AsyncStorage.getItem('Telp');
        getProfile(Profiledispatch)
        // console.log('Telp',value)
        // const data = Profile.map(y=>y.Universitas)
        // console.log('data',data)
        // setdataUniversitas(data)
    }, [])
    return (
        <Container>
            <Content>
                <View style={{paddingTop:10, paddingBottom:10, alignContent:'center', alignItems:'center', borderBottomWidth:1, borderBottomColor:'#CFCFCF'}}>
                    <Image style={{width:90,height:90, borderRadius:90, marginTop:5, marginBottom:5}}
                        source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <Text style={{fontSize:22, textAlign:'center'}}>Hi, {Profile.map(item=>item.NamaLengkap)}</Text>
                    <Text style={{fontSize:16, textAlign:'center'}}>Mahasiswa {Profile.map(item=>item.Jurusan)}</Text>
                    <Text style={{fontSize:16, textAlign:'center'}}>{ dataUniversitas } - {Profile.map(item=>item.Universitas)}</Text>
                    <Button 
                        style={{marginTop:10}}><Text>Pemasukan Berkas</Text></Button>
                </View>
                <View style={{padding:20, backgroundColor:'#CFCFCF', borderBottomWidth:1, borderBottomColor:'#CFCFCF'}}>
                    <Grid>
                        <TouchableOpacity style={{width:'25%'}} onPress={()=>navigation.navigate('RencanaStudi')}>
                            <Col style={{padding:5, justifyContent:'center', alignContent:'center', alignItems:'center' }}>
                                <View style={{width:70, height:70, backgroundColor:'#AFAFAF', borderRadius:80, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                                    <FontAwesomeIcon color="white" icon={faAddressCard} size="40"/>
                                </View>
                                <Text style={{fontSize:12, marginTop:5}}>Rencana Studi</Text>
                            </Col>
                        </TouchableOpacity>

                        <TouchableOpacity style={{width:'25%'}} onPress={()=>navigation.navigate('HasilStudi')}>
                            <Col style={{padding:5, justifyContent:'center', alignContent:'center', alignItems:'center' }}>
                                <View style={{width:70, height:70, backgroundColor:'#AFAFAF', borderRadius:80, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                                    <FontAwesomeIcon color="white" icon={faChalkboardTeacher} size="40"/>
                                </View>
                                <Text style={{fontSize:12, marginTop:5}}>Hasil Studi</Text>
                            </Col>
                        </TouchableOpacity>

                        <TouchableOpacity style={{width:'25%'}} onPress={()=>navigation.navigate('StudiAkhir')}>
                            <Col style={{padding:5, justifyContent:'center', alignContent:'center', alignItems:'center' }}>
                                <View style={{width:70, height:70, backgroundColor:'#AFAFAF', borderRadius:80, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                                    <FontAwesomeIcon color="white" icon={faGraduationCap} size="40"/>
                                </View>
                                <Text style={{fontSize:12, marginTop:5}}>Studi Akhir</Text>
                            </Col>
                        </TouchableOpacity>

                        <TouchableOpacity style={{width:'25%'}} onPress={()=>navigation.navigate('Akun')}>
                            <Col style={{padding:5, justifyContent:'center', alignContent:'center', alignItems:'center' }}>
                                <View style={{width:70, height:70, backgroundColor:'#AFAFAF', borderRadius:80, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                                    <FontAwesomeIcon color="white" icon={faDollarSign} size="40"/>
                                </View>
                                <Text style={{fontSize:12, marginTop:5}}>Bantuan</Text>
                            </Col>
                        </TouchableOpacity>
                    </Grid>
                </View>
                <View style={{padding:10}}>
                    <Text style={{fontSize:18, fontWeight:'bold', marginBottom:5}}>Informasi Terbaru</Text>
                    <View>
                        <Text>Silahkan masukkan berkas usulan anda sebelum tanggal 20 Juni 2020.</Text>
                    </View>
                </View>
                
                
                
            </Content>
            <Footer>
                <FooterTab style={{backgroundColor:'#CFCFCF'}}>
                    <Button active>
                        <Text>Home</Text>
                    </Button>
                    <Button>
                        <Text style={{color:'black'}}>Pesan</Text>
                    </Button>
                    <Button>
                        <Text style={{color:'black'}}>Riwayat</Text>
                    </Button>
                    <Button onPress={()=>{
                            userlogout(authdispatch, navigation)
                        }} >
                        <Text style={{color:'black'}}>Akun</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    )
}
