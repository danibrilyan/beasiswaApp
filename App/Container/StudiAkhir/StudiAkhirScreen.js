import React, {useState} from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base'

export default function StudiAkhirScreen({navigation}) {
    return (
        <Container>
            <Content>
                <View style={{padding:15}}>
                    <Text>Judul Studi Akhir : Lengan Robot Pemilih Objek Berwarna</Text>
                    <Text>Dosen Pembimbing : Ir. Christofer Yohanes, MT</Text>
                    <Text>Tgl Pemasukan Dokumen : 20-07-2020</Text>
                    <Text>Status Permohonan : Diusulkan</Text>
                    <Text>Dokumen Proposal : </Text>
                </View>
            </Content>
            <View style={{padding:15}}>
                <Button style={{ justifyContent:'center', alignItems:'center', alignSelf:'center', width:'100%'}}>
                    <Text>Upload Dokumen Studi Akhir</Text>
                </Button>
            </View>
        </Container>
    )
}
