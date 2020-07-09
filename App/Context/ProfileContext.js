import React, { createContext, useReducer} from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import Api from './../Services/Api'
export const ProfileContext = createContext()

const ProfileContextProvider = (props) =>{
    const [Profile, Profiledispatch] = useReducer(ProfileReducer,[]) 
    return(
        <ProfileContext.Provider value={{Profile, Profiledispatch}}>
            { props.children }
        </ProfileContext.Provider>
    )
}

export const setProfile = (Profiledispatch, data) =>{
    Profiledispatch({type:'SET_DATA', data})
}

export const getProfile = async(Profiledispatch) =>{
    const value = await AsyncStorage.getItem('Telp');
    console.log('getProfile')
    Api.profile_select(value).then(res=>{
        console.log('getProfile', res.data.length)
        Profiledispatch({type:'SET_DATA', data: res.data})
    }).catch(e=>console.log('error', e))
}

const ProfileReducer = (state, action) =>{
    switch(action.type){
        case 'SET_DATA': 
            return state = action.data
        default:
            return state
    }
}

export default ProfileContextProvider