import React, { createContext, useReducer} from 'react'
import Api from './../Services/Api'
export const DomisiliContext = createContext()

const DomisiliContextProvider = (props) =>{
    const [Domisili, Domisilidispatch] = useReducer(DomisiliReducer,[]) 
    return(
        <DomisiliContext.Provider value={{Domisili, Domisilidispatch}}>
            { props.children }
        </DomisiliContext.Provider>
    )
}

export const setDomisili = (domisilidispatch, data) =>{
    domisilidispatch({type:'SET_DATA', data})
}

export const getDomisili = (domisilidispatch) =>{
    // console.log('getDomisili')
    Api.domisili_select().then(res=>{
        // console.log('getDomisili', res.data)
        domisilidispatch({type:'SET_DATA', data: res.data})
    }).catch(e=>console.log('error', e))
}

const DomisiliReducer = (state, action) =>{
    switch(action.type){
        case 'SET_DATA': 
            return state = action.data
        default:
            return state
    }
}

export default DomisiliContextProvider