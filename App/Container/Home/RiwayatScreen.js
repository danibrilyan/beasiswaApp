import React from 'react'
import { View } from 'react-native'
import { Container, Button, Header, Content, Body, Thumbnail,  List, ListItem, Text, Left, Right, Icon } from 'native-base'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function RiwayatScreen() {

    return (
        <View>
            <List>
                {
                    [1,2,3,4,5,6].map(item=>{
                        return(
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                                </Left>
                                <Body>
                                    <Text>Kumar Pratik</Text>
                                    <Text note>Doing what you like will always keep you happy . .</Text>
                                </Body>
                                <Right>
                                    <Text note>3:43 pm</Text>
                                </Right>
                            </ListItem>
                        )
                    })
                }
            </List>
        </View>
    )
}
