import React, {useEffect, useState, useContext, useReducer} from 'react'
import { View, FlatList, TouchableOpacity, Image,SafeAreaView, ScrollView  } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text, Input, Item, Form, Picker } from 'native-base'
import StepperScreen from './StepperScreen'
import DocumentPicker from 'react-native-document-picker';

export default function RekeningScreen({route,navigation}) {
    const [NomorRekening, setNomorRekening] = useState('')
    const [NamaBank, setNamaBank] = useState('0')
    const [PemilikRekening, setPemilikRekening] = useState('')
    const [DokumenRekening, setDokumenRekening] = useState('')

    async function selectOneFile() {
        //Opening Document Picker for selection of one file
        try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.images],
            //There can me more options as well
            // DocumentPicker.types.allFiles
            // DocumentPicker.types.images
            // DocumentPicker.types.plainText
            // DocumentPicker.types.audio
            // DocumentPicker.types.pdf
          });
          //Printing the log realted to the file
          console.log('res : ' + JSON.stringify(res));
          console.log('URI : ' + res.uri);
          console.log('Type : ' + res.type);
          console.log('File Name : ' + res.name);
          console.log('File Size : ' + res.size);
          //Setting the state to show single file attributes
          setDokumenRekening(res.uri)
        //   this.setState({ singleFile: res });
        } catch (err) {
          //Handling any exception (If any)
          if (DocumentPicker.isCancel(err)) {
            //If user canceled the document selection
            alert('Canceled from single doc picker');
          } else {
            //For Unknown Error
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
      }
    return(
        <Container>
            <Content style={{padding:8}}>  
                <View style={{backgroundColor:"#CFCFCF", padding:10, marginBottom:10, borderRadius:8}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Perhatian</Text>
                    <Text style={{fontStyle:'italic',fontSize:14,}}>Pastikan anda memasukan data profil dengan benar karena itu menjadi penentu permohonan anda akan di terim</Text>
                </View>
                <StepperScreen step={2}/>
                <View style={{marginBottom:10}}>
                    <Text style={{fontSize:14}}>Nama Bank</Text>        
                    <Form style={{borderWidth:1, borderColor:'#CFCFCF', marginBottom:10}}>
                        <Picker
                            mode="dropdown"
                            headerStyle={{ backgroundColor: "#b95dd3" }}
                            headerBackButtonTextStyle={{ color: "#fff" }}
                            headerTitleStyle={{ color: "#fff" }}
                            selectedValue={NamaBank}
                            onValueChange={(itemValue)=>setNamaBank(itemValue)}
                        >
                            <Picker.Item label="Pilih Bank" value="0" />
                            <Picker.Item label="Bank Mandiri" value="Bank Mandiri" />                    
                            <Picker.Item label="Bank BNI" value="Bank BNI" />
                            <Picker.Item label="Bank BRI" value="Bank BRI" />
                            <Picker.Item label="Bank BCA" value="Bank BCA" />
                            <Picker.Item label="Bank BTN" value="Bank BTN" />
                            <Picker.Item label="Bank Permata" value="Bank Permata" />
                        </Picker>
                    </Form>

                    <Text style={{fontSize:14}}>Nomor Rekening</Text>
                    <Item regular style={{marginBottom:5}}>
                        <Input style={{fontSize:13, height:40}} keyboardType='number-pad' value={NomorRekening} onChangeText={text=>setNomorRekening(text)} />
                    </Item>

                    <Text style={{fontSize:14}}>Nama Pemilik Rekening</Text>
                    <Item regular style={{marginBottom:5}}>
                        <Input style={{fontSize:13, height:40}}  value={PemilikRekening} onChangeText={text=>setPemilikRekening(text)} />
                    </Item>

                    <Text>Upload Buku Rekening</Text>
                    <TouchableOpacity onPress={()=>selectOneFile()}>
                        <View style={{marginTop:10, marginBottom:20, width:90, height:60, backgroundColor:"#CFCFCF"}}>
                            <Image style={{width:90, height:60}} source={{ uri: DokumenRekening}} />
                        </View>
                    </TouchableOpacity>
                </View>
                
            </Content>
            <View style={{flexDirection:'row'}}>
                    <Button style={{width:'47%', margin:5, justifyContent:'center'}} onPress={()=>{
                        navigation.goBack()
                    }}><Text>Kembali</Text></Button>
                    <Button style={{width:'47%', margin:5, justifyContent:'center'}}  onPress={()=>{
                        const { dataPermohonan } = route.params;
                        var data = dataPermohonan
                        data = {...data, 
                            NamaBank,
                            NomorRekening,
                            PemilikRekening,
                            DokumenRekening
                        }
                        console.log(data)
                        navigation.navigate('Persyaratan', {dataPermohonan: data})
                    }}><Text>Lanjut</Text></Button>
                </View>
        </Container>
        
        
    )
}
