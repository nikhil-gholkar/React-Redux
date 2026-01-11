
import { Test1 } from "./components/Test1"
import { BioProvider } from "./contextAPI"
import { Home } from "./contextAPI/Home"
import { ToggleProvider } from "./toggle/ToggleContext"



export const App=()=>{

 
  return(
 <>
 <ToggleProvider>
    <BioProvider>
   <Home />
   <Test1 />
   </BioProvider>
   </ToggleProvider>

   </>
   
  )
}