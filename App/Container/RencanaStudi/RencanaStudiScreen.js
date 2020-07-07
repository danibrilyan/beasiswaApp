import React, {useState} from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base'

export default function RencanaStudiScreen({navigation}) {
    const [state, setstate] = useState([
        {
            periode : '2020',
            semester : 1,
            jumlah_sks : 20,
            tgl_input : Date(),
            status : 'Terkirim'
        },
        {
            periode : '2019',
            semester : 2,
            jumlah_sks : 20,
            tgl_input : Date(),
            status : 'Diterima'
        },
        {
            periode : '2019',
            semester : 1,
            jumlah_sks : 20,
            tgl_input : Date(),
            status : 'Diterima'
        },
        {
            periode : '2020',
            semester : 1,
            jumlah_sks : 20,
            tgl_input : Date(),
            status : 'Terkirim'
        },
        {
            periode : '2019',
            semester : 2,
            jumlah_sks : 20,
            tgl_input : Date(),
            status : 'Diterima'
        },
        {
            periode : '2019',
            semester : 1,
            jumlah_sks : 20,
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
                                    <Text>Jumlah SKS : {item.jumlah_sks}</Text>
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
