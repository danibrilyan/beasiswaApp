import React, { useEffect, createContext, useReducer} from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions } from '@react-navigation/native';
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
    const value = await AsyncStorage.getItem('token');
    if(value !== null){
        navigation.dispatch(
            StackActions.replace('MainNavigator')
        )
    }
    else{
        navigation.dispatch(
            StackActions.replace('RegistrationNavigator')
        )
    }
}

export const userlogin = (authdispatch, navigation) =>{
    authdispatch({type:'SET_DATA', data: true})
    AsyncStorage.setItem('token','12345')
    navigation.dispatch(
        StackActions.replace('MainNavigator')
    )
}

export const userlogout = (authdispatch, navigation) =>{
    authdispatch({type:'SET_DATA', data: false})
    AsyncStorage.removeItem('token')
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