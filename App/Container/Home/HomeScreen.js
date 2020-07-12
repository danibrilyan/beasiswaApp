import React, {useEffect, useContext, useState} from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import {Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAddressCard, faChalkboardTeacher, faGraduationCap, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { AuthContext, userlogout } from '../../Context/AuthContext';
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../../Services/Api'

import AkunScreen from './AkunScreen'
import PesanScreen from './PesanScreen'
import RiwayatScreen from './RiwayatScreen'

export default function HomeScreen({navigation}) {
    const {auth, authdispatch} = useContext(AuthContext)

    const [Universitas, setUniversitas] = useState([])
    
    const [profile, setprofile] = useState({})
    const [periode, setperiode] = useState([])
    async function getData(){
        const value = await AsyncStorage.getItem('Telp');
        Api.periode_active().then(res=>{
            console.log('res.periode', res.data)
            AsyncStorage.setItem('periode', JSON.stringify(res.data[0]))
            setperiode(res.data)
        })
        Api.profile_select(value).then(async res=>{
            var dataUniversitas = await Api.universitas_select().then(async resUniversitas=>{
                return await resUniversitas.data
            })
            var dataprofile = res.data;
            var data = dataprofile.map(item=>{
                return {
                    _id : item._id,
                    NamaLengkap :  item.NamaLengkap,
                    Jurusan :  dataUniversitas.filter(x=>x._id === item.Jurusan).map(y=>y.Nama),
                    Fakultas :  dataUniversitas.filter(x=>x._id === item.Fakultas).map(y=>y.Nama),
                    Universitas :  dataUniversitas.filter(x=>x._id === item.Universitas).map(y=>y.Nama)
                }
            })
            setUniversitas(dataUniversitas)
            setprofile(data[0])
            console.log('kode',data[0]._id)
            AsyncStorage.setItem('kode', data[0]._id)
        })
    }
    useEffect(() => {
        let mounted = true
        
        getData()
        return ()=>{
            mounted = false
        }
    }, [navigation])

    return (
        // <Container>
        //     <Content>
        <View>
            <View style={{paddingTop:10, paddingBottom:10, alignContent:'center', alignItems:'center', borderBottomWidth:1, borderBottomColor:'#CFCFCF'}}>
                <Image style={{width:90,height:90, borderRadius:90, marginTop:5, marginBottom:5}}
                    source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Text style={{fontSize:22, textAlign:'center'}}>Hi, {profile.NamaLengkap}</Text>
                <Text style={{fontSize:16, textAlign:'center'}}>Mahasiswa {profile.Jurusan}</Text>
                <Text style={{fontSize:16, textAlign:'center'}}>{ profile.Fakultas } - { profile.Universitas}</Text>
                <Button 
                    style={{marginTop:10}}><Text>{periode.map(item=>"Periode Tahun "+item.TahunPeriode+" Semester-"+ item.SemesterPeriode)}</Text></Button>
            </View>
            <View style={{padding:20, backgroundColor:'#CFCFCF', borderBottomWidth:1, borderBottomColor:'#CFCFCF'}}>
                <Grid>
                    <TouchableOpacity style={{width:'25%'}} onPress={()=>navigation.navigate('RencanaStudi')}>
                        <Col style={{padding:5, justifyContent:'center', alignContent:'center', alignItems:'center' }}>
                            <View style={{width:70, height:70, backgroundColor:'#AFAFAF', borderRadius:80, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                                <FontAwesomeIcon color="white" icon={faAddressCard} size="40"/>
                            </View>
                            <Text style={{fontSize:10, marginTop:5}}>Rencana Studi</Text>
                        </Col>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width:'25%'}} onPress={()=>navigation.navigate('HasilStudi')}>
                        <Col style={{padding:5, justifyContent:'center', alignContent:'center', alignItems:'center' }}>
                            <View style={{width:70, height:70, backgroundColor:'#AFAFAF', borderRadius:80, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                                <FontAwesomeIcon color="white" icon={faChalkboardTeacher} size="40"/>
                            </View>
                            <Text style={{fontSize:10, marginTop:5}}>Hasil Studi</Text>
                        </Col>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width:'25%'}} onPress={()=>navigation.navigate('StudiAkhir')}>
                        <Col style={{padding:5, justifyContent:'center', alignContent:'center', alignItems:'center' }}>
                            <View style={{width:70, height:70, backgroundColor:'#AFAFAF', borderRadius:80, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                                <FontAwesomeIcon color="white" icon={faGraduationCap} size="40"/>
                            </View>
                            <Text style={{fontSize:10, marginTop:5}}>Studi Akhir</Text>
                        </Col>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width:'25%'}} onPress={()=>navigation.navigate('Keuangan')}>
                        <Col style={{padding:5, justifyContent:'center', alignContent:'center', alignItems:'center' }}>
                            <View style={{width:70, height:70, backgroundColor:'#AFAFAF', borderRadius:80, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                                <FontAwesomeIcon color="white" icon={faDollarSign} size="40"/>
                            </View>
                            <Text style={{fontSize:10, marginTop:5}}>Bantuan</Text>
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
        </View>
               
                
        //     </Content>
        //     <Footer>
        //         <FooterTab style={{backgroundColor:'#CFCFCF'}}>
        //             <Button active>
        //                 <Text>Home</Text>
        //             </Button>
        //             <Button>
        //                 <Text style={{color:'black'}}>Pesan</Text>
        //             </Button>
        //             <Button>
        //                 <Text style={{color:'black'}}>Riwayat</Text>
        //             </Button>
        //             <Button onPress={()=>{
        //                     userlogout(authdispatch, navigation)
        //                 }} >
        //                 <Text style={{color:'black'}}>Akun</Text>
        //             </Button>
        //         </FooterTab>
        //     </Footer>
        // </Container>
    )
}
