import React, { useEffect, createContext, useReducer} from 'react'
// import AsyncStorage from '@react-native-community/async-storage';
export const AuthContext = createContext()

const AuthContextProvider = (props) =>{
    const [auth, authdispatch] = useReducer(AuthReducer,false) 
    return(
        <AuthContext.Provider value={{auth, authdispatch}}>
            { props.children }
        </AuthContext.Provider>
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