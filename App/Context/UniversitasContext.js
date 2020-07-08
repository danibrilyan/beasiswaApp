import React, { createContext, useReducer} from 'react'
import Api from './../Services/Api'
export const UniversitasContext = createContext()

const UniversitasContextProvider = (props) =>{
    const [Universitas, Universitasdispatch] = useReducer(UniversitasReducer,[]) 
    return(
        <UniversitasContext.Provider value={{Universitas, Universitasdispatch}}>
            { props.children }
        </UniversitasContext.Provider>
    )
}

export const setUniversitas = (Universitasdispatch, data) =>{
    Universitasdispatch({type:'SET_DATA', data})
}

export const getUniversitas = (Universitasdispatch) =>{
    console.log('getUniversitas')
    Api.universitas_select().then(res=>{
        console.log('getUniversitas', res.data)
        Universitasdispatch({type:'SET_DATA', data: res.data})
    }).catch(e=>console.log('error', e))
}

const UniversitasReducer = (state, action) =>{
    switch(action.type){
        case 'SET_DATA': 
            return state = action.data
        default:
            return state
    }
}

export default UniversitasContextProvider