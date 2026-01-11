import { createContext, useContext, useState } from "react";


const ToggleContext=createContext()

export const ToggleProvider=({children})=>{
    const[dark,setDark]=useState(false)
    return<ToggleContext value={{dark,setDark}}>
{children}
    </ToggleContext>
}

export const useToggleContext=()=>{
    const context=useContext(ToggleContext)
    if(!context){
        throw("wrap the component inside the provider")
    }
    return context;
        
        
}