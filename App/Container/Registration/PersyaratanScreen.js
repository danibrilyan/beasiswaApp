import React, {useEffect, useState, useContext, useReducer} from 'react'
import { View, FlatList, TouchableOpacity, Image,SafeAreaView, ScrollView  } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text, Input, Item, Form, Picker } from 'native-base'
import { AuthContext, userlogin } from '../../Context/AuthContext';
import { UniversitasContext } from '../../Context/UniversitasContext'

import StepperScreen from './StepperScreen'
import Api from "../../Services/Api"
export default function PersyaratanScreen({route, navigation}) {
    const {auth, authdispatch} = useContext(AuthContext)
    const {Universitas} = useContext(UniversitasContext)
    const [Telp, setTelp] = useState('')
    const [KodeVerifikasi, setKodeVerifikasi] = useState('')
    const [kirimVerifikasi, setkirimVerifikasi] = useState('false')
    const [valid, setvalid] = useState('false')

    const { dataPermohonan } = route.params;
    return(
        <Container>
            <Content style={{padding:8}}>  
                <View style={{backgroundColor:"#CFCFCF", padding:10, marginBottom:10, borderRadius:8}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Perhatian</Text>
                    <Text style={{fontStyle:'italic',fontSize:14,}}>Pastikan anda memasukan data profil dengan benar karena itu menjadi penentu permohonan anda akan di terim</Text>
                </View>
                <StepperScreen step={3}/>
                <View style={{marginBottom:10}}>
                    <Text style={{fontSize:14}}>Nomor Whatsapp</Text>
                    <Text style={{fontSize:16, borderBottomWidth:1, borderBottomColor:'#CFCFCF', fontWeight:'bold', marginBottom:5}}>{dataPermohonan.Telp}</Text>
                    <Text style={{fontSize:14}}>Nama Lengkap</Text>
                    <Text style={{fontSize:16, borderBottomWidth:1, borderBottomColor:'#CFCFCF', fontWeight:'bold', marginBottom:5}}>{dataPermohonan.NamaLengkap}</Text>
                    <Text style={{fontSize:14}}>Jenis Kelamin</Text>
                    <Text style={{fontSize:16, borderBottomWidth:1, borderBottomColor:'#CFCFCF', fontWeight:'bold', marginBottom:5}}>{dataPermohonan.JenisKelamin}</Text>
                    <Text style={{fontSize:14}}>Tempat Tanggal Lahir</Text>
                    <Text style={{fontSize:16, borderBottomWidth:1, borderBottomColor:'#CFCFCF', fontWeight:'bold', marginBottom:5}}>{dataPermohonan.TempatLahir+', '+dataPermohonan.TanggalLahir}</Text>
                    <Text style={{fontSize:14}}>Alamat</Text>
                    <Text style={{fontSize:16, borderBottomWidth:1, borderBottomColor:'#CFCFCF', fontWeight:'bold', marginBottom:5}}>{dataPermohonan.Alamat}</Text>
                    <Text style={{fontSize:14}}>Pendidikan</Text>
                    <Text style={{fontSize:16, borderBottomWidth:1, borderBottomColor:'#CFCFCF', fontWeight:'bold', marginBottom:5}}>{dataPermohonan.JenjangPendidikan +' - '+ Universitas.filter(x=>x._id === dataPermohonan.Jurusan).map(y=>y.Nama)+ ' '+Universitas.filter(x=>x._id === dataPermohonan.Fakultas).map(y=>y.Nama)+' '+Universitas.filter(x=>x._id === dataPermohonan.Universitas).map(y=>y.Nama)}</Text>
                    <Text style={{fontSize:14}}>Identitas Mahasiswa</Text>
                    <Text style={{fontSize:16, borderBottomWidth:1, borderBottomColor:'#CFCFCF', fontWeight:'bold', marginBottom:5}}>{'Angkatan '+ dataPermohonan.TahunMasuk+' Semester '+dataPermohonan.Semester+' NIM. '+dataPermohonan.NIM}</Text>
                    <Text style={{fontSize:14}}>Biaya SKS</Text>
                    <Text style={{fontSize:16, borderBottomWidth:1, borderBottomColor:'#CFCFCF', fontWeight:'bold', marginBottom:5}}>{dataPermohonan.BiayaSKS}</Text>
                    <Text style={{fontSize:14}}>Biaya SPP</Text>
                    <Text style={{fontSize:16, borderBottomWidth:1, borderBottomColor:'#CFCFCF', fontWeight:'bold', marginBottom:5}}>{dataPermohonan.BiayaSPP}</Text>
                    <Text style={{fontSize:14}}>Rekening</Text>
                    <Text style={{fontSize:16, borderBottomWidth:1, borderBottomColor:'#CFCFCF', fontWeight:'bold', marginBottom:5}}>{dataPermohonan.NamaBank +' No.'+dataPermohonan.NomorRekening +' a/n '+dataPermohonan.PemilikRekening}</Text>
                    
                </View>
                <Button style={{marginBottom:30, justifyContent:'center'}}  onPress={()=>{
                    Api.profile_register(dataPermohonan).then(res=>{
                        userlogin(authdispatch, navigation)
                    })
                    
                }}><Text>Kirim</Text></Button>
            </Content>
                
        </Container>
        
        
    )
}
