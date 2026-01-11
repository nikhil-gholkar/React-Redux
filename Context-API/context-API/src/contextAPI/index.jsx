import { createContext } from "react";

// createContext returns a component not variable
// so the variable name intial letter should be capital
export const BioContext = createContext();

// create a provider component
export const BioProvider = ({ children }) => {
  const myName = "samarth";
  const age=60
  return <BioContext.Provider value={{myName:myName,age:age}}>{children}</BioContext.Provider>;
};
