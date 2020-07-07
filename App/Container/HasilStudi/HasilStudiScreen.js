import React, {useState} from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base'

export default function HasilStudiScreen() {
    const [state, setstate] = useState([
        {
            periode : '2020',
            semester : 1,
            ip_semester : 2.85,
            ip_kumulatif : 2.98,
            tgl_input : Date(),
            status : 'Terkirim'
        },
        {
            periode : '2019',
            semester : 2,
            ip_semester : 2.85,
            ip_kumulatif : 2.98,
            tgl_input : Date(),
            status : 'Diterima'
        },
        {
            periode : '2019',
            semester : 1,
            ip_semester : 2.85,
            ip_kumulatif : 2.98,
            tgl_input : Date(),
            status : 'Diterima'
        },
        {
            periode : '2020',
            semester : 1,
            ip_semester : 2.85,
            ip_kumulatif : 2.98,
            tgl_input : Date(),
            status : 'Terkirim'
        },
        {
            periode : '2019',
            semester : 2,
            ip_semester : 2.85,
            ip_kumulatif : 2.98,
            tgl_input : Date(),
            status : 'Diterima'
        },
        {
            periode : '2019',
            semester : 1,
            ip_semester : 2.85,
            ip_kumulatif : 2.98,
            tgl_input : Date(),
            status : 'Diterima'
        }
    ])
    return (
        <Container>
            <Content>
                <FlatList 
                    data={state} 
                    renderItem={({item})=>{
                        return(
                            <TouchableOpacity onPress={()=>alert('tes', JSON.stringify(item))}>
                                <View style={{padding:15, borderBottomWidth:1, borderBottomColor:'#CFCFCF'}}>
                                    <Text style={{fontSize:18, fontWeight:'bold'}}>Periode {item.periode} - Semester {item.semester}</Text>
                                    <Text>IP Semester : {item.ip_semester}</Text>
                                    <Text>IP Kumulatif : {item.ip_kumulatif}</Text>
                                    <Text>Tgl Input : {item.tgl_input}</Text>
                                    <Text>Status : {item.status}</Text>
                                </View>
                            </TouchableOpacity>
                            
                        )
                    }}
                />
                
            </Content>
            <View style={{padding:15}}>
                <Button style={{ justifyContent:'center', alignItems:'center', alignSelf:'center', width:'100%'}}>
                    <Text>Tambah</Text>
                </Button>
            </View>
        </Container>
    )
}
