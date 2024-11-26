import { ThemeContext } from "@react-pdf-viewer/core";
import { createContext,useState } from "react";


export const NumberPhoneVerify = createContext()

export const NumberPhoneVProvider = ({children}) =>{
    const [phoneNumber,setPhoneNumber] = useState(false)
    const [string, setString] = useState("")
    const cu = "cu"
    return   <NumberPhoneVerify.Provider value={[phoneNumber,setPhoneNumber,string,setString]}>
                 {children}
            </NumberPhoneVerify.Provider>
}