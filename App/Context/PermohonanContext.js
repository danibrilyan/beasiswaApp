import React, { useEffect, createContext, useReducer} from 'react'
export const PermohonanContext = createContext()

const PermohonanContextProvider = (props) =>{
    const [Permohonan, Permohonandispatch] = useReducer(PermohonanReducer,false) 
    return(
        <PermohonanContext.Provider value={{Permohonan, Permohonandispatch}}>
            { props.children }
        </PermohonanContext.Provider>
    )
}

const PermohonanReducer = (state, action) =>{
    switch(action.type){
        case 'SET_DATA': 
            return state = action.data
        default:
            return state
    }
}

export default PermohonanContextProvider