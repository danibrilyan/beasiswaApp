import React, { useEffect, createContext, useReducer, useContext} from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions } from '@react-navigation/native';
import { ProfileContext } from '../Context/ProfileContext';
import Api from './../Services/Api'

export const AuthContext = createContext()

const AuthContextProvider = (props) =>{
    const [auth, authdispatch] = useReducer(AuthReducer,false) 
    return(
        <AuthContext.Provider value={{auth, authdispatch}}>
            { props.children }
        </AuthContext.Provider>
    )
}

export const checklogin =  async(navigation) => {
    console.log('cek login') 
    const value = await AsyncStorage.getItem('Telp');  
    if(value !== null){  
        console.log('value', value)   
        navigation.dispatch(
            StackActions.replace('MainNavigator')
        )
    }
    else{
        console.log('value', value)  
        navigation.dispatch(
            StackActions.replace('RegistrationNavigator')
        )
    }
}

export const userlogin = (authdispatch, navigation, telp) =>{
    authdispatch({type:'SET_DATA', data: true})
    AsyncStorage.setItem('Telp',telp)
    getProfile()
    navigation.dispatch(
        StackActions.replace('MainNavigator')
    )
}

export const userlogout = (authdispatch, navigation) =>{
    authdispatch({type:'SET_DATA', data: false})
    AsyncStorage.removeItem('Telp')
    navigation.dispatch(
        StackActions.replace('RegistrationNavigator')
    )
}

const AuthReducer = (state, action) =>{
    switch(action.type){
        case 'SET_DATA': 
            return state = action.data
        default:
            return state
    }
}

export default AuthContextProvider