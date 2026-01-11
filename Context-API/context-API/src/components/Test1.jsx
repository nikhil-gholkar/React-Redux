import { useBioContext } from "../contextAPI"
import { useToggleContext } from "../toggle/ToggleContext"

export const Test1=()=>{

    const {dark,setDark} =useToggleContext()
    const {age,myName}=useBioContext()
    return(
    
        <div style={dark?{backgroundColor:"black"}:{backgroundColor:"white"}}>
            <h1 style={dark?{color:"white"}:{color:"black"}}>hello there {myName}</h1>
            <h3 style={dark?{color:"white"}:{color:"black"}}>hi hi hhi {age}</h3>
        </div>
    )
}