
import { BioProvider } from "./contextAPI"
import { Home } from "./contextAPI/Home"


export const App=()=>{

 
  return(
 <>
    <BioProvider>
   <Home />
   </BioProvider>

   </>
   
  )
}