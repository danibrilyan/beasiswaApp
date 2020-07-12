import React, {useState} from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal';
import { Container, Button, Header, Content, Body, Thumbnail,  List, ListItem, Text, Left, Right, Icon } from 'native-base'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function KeuanganScreen({navigation}) {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <View>
            <List>
                {
                    [{Tahun:2010, Semester:2, Nominal: 10000},{Tahun:2010, Semester:1, Nominal: 10000},{Tahun:209, Semester:2, Nominal: 10000},{Tahun:2009, Semester:1, Nominal: 10000},{Tahun:2008, Semester:2, Nominal: 10000}].map(item=>{
                        return(
                            <ListItem avatar button onPress={toggleModal}>
                                <Left>
                                    <Thumbnail style={{width:40, height:40}} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                                </Left>
                                <Body>
                                    <Text>Uang Semester {item.Semester} Tahun {item.Tahun}</Text>
                                    <Text note>Nominal Rp. {10000}</Text>
                                    <Text note>Status : Ditransfer</Text>
                                </Body>
                                <Right>
                                    <Text note>3:43 pm</Text>
                                </Right>
                            </ListItem>
                        )
                    })
                }
            </List>
            <Modal isVisible={isModalVisible}>
                <View style={{ backgroundColor:'white'}}>
                    <View style={{backgroundColor:'#CFCFCF', padding:10, marginBottom:10}}>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>Rincian Bantuan</Text>
                    </View>
                    <View style={{padding:10}}>
                        <Text style={{marginBottom:5}}>Nomor Transaksi : 2020/II/2/200200</Text>
                        <Text style={{marginBottom:5}}>Tanggal Transaksi : 19-08-2020</Text>
                        <Text style={{marginBottom:5}}>Ditransfer ke : </Text>
                        <Text style={{marginLeft:25}}>171-001-191919 Bank Mandiri</Text>
                        <Text style={{marginLeft:25}}>A/n Syahri Ramadhan </Text>
                    </View>
                    <View style={{padding:10,marginTop:20, marginBottom:10}}>
                        <View style={{flexDirection:'row', backgroundColor:'#3F51B5'}}>
                            <View style={{width:'50%', borderWidth:1, borderColor:'#CFCFCF', padding:5}}><Text style={{textAlign:'left', color:'white'}}>Deskripsi</Text></View>
                            <View style={{width:'50%', borderWidth:1, borderColor:'#CFCFCF', padding:5}}><Text style={{textAlign:'right', color:'white'}}>Nominal</Text></View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:'50%', borderWidth:1, borderColor:'#CFCFCF', padding:5}}><Text style={{textAlign:'left'}}>Bantuan SPP</Text></View>
                            <View style={{width:'50%', borderWidth:1, borderColor:'#CFCFCF', padding:5}}><Text style={{textAlign:'right'}}>Rp.1.000.000</Text></View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:'50%', borderWidth:1, borderColor:'#CFCFCF', padding:5}}>  
                                <Text style={{textAlign:'left'}}>Bantuan SKS</Text>
                                <Text style={{textAlign:'left', fontSize:10}}>Rp.100.000 x 20 Kredit</Text>
                            </View>
                            <View style={{width:'50%', borderWidth:1, borderColor:'#CFCFCF', padding:5}}><Text style={{textAlign:'right'}}>Rp.100.000</Text></View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:'50%', borderWidth:1, borderColor:'#CFCFCF', padding:5}}><Text style={{textAlign:'left'}}>Bantuan Prestasi</Text></View>
                            <View style={{width:'50%', borderWidth:1, borderColor:'#CFCFCF', padding:5}}><Text style={{textAlign:'right'}}>Rp.1.000.000</Text></View>
                        </View>
                        <View style={{flexDirection:'row', backgroundColor:'#3F51B5'}}>
                            <View style={{width:'50%', borderWidth:1, borderColor:'#CFCFCF', padding:5}}><Text style={{textAlign:'left', color:'white'}}>Total</Text></View>
                            <View style={{width:'50%', borderWidth:1, borderColor:'#CFCFCF', padding:5}}><Text style={{textAlign:'center', color:'white'}}>Rp.1.000.000</Text></View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', padding:10}}>
                        <Button style={{width:'100%', marginRight:5, justifyContent:'center'}} onPress={toggleModal}><Text style={{textAlign:'center'}}>Tutup</Text></Button>
                    </View>
                    
                </View>
            </Modal>
        </View>
    )
}
