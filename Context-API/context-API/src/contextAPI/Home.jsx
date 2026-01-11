import { useContext } from "react"
import { BioContext } from "."
export const Home=()=>{
     const {myName,age}=useContext(BioContext)
    return<h1>Hi {myName} your age is {age}</h1>
}