import { useContext } from "react"
import { BioContext, useBioContext } from "."
import { useToggleContext } from "../toggle/ToggleContext"
export const Home=()=>{
     const {myName,age}=useBioContext()
     const {dark,setDark}=useToggleContext()
     console.log(dark)
    return(
    <>
    <div style={dark ? {backgroundColor:"black"}:{backgroundColor:"white"}}> 
    <h1 style={dark ? {color:"white"}:{color:"black"}}>Hi {myName} your age is {age}</h1>
    <button onClick={()=>setDark(!dark)}>
            toggle mode
    </button>
    </div>
    </>
    )
}