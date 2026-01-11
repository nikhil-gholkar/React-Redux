import { createContext, useContext } from "react";

// createContext returns a component not variable
// so the variable name intial letter should be capital
export const BioContext = createContext();

// create a provider component
export const BioProvider = ({ children }) => {
  const myName = "Nikhil";
  const age=25
  return <BioContext.Provider value={{myName:myName,age:age}}>{children}</BioContext.Provider>;
};

export const useBioContext=()=>{
    const context=useContext(BioContext)
    return context
}
