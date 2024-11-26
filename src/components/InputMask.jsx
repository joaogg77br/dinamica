import { useState, useEffect,useContext } from "react"
import { parsePhoneNumber } from "awesome-phonenumber"
import { NumberPhoneVerify } from "../Context/NumberPhoneV";


export default function InputPhoneMask() {
    const [numberPhone, setNumberPhone] = useState("")
    const [phoneNumber,setPhoneNumber] = useContext(NumberPhoneVerify)
    useEffect(() =>{
        function Mask() {
            let text = numberPhone
            text = (text || "").replace(/\D/g,"")
            text = text.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
            setNumberPhone(text)
            console.log(phoneNumber)
            const pn = parsePhoneNumber(numberPhone,{regionCode:"BR"})
            setPhoneNumber(pn.valid)
            console.log(pn)
        }
        Mask()
    },[numberPhone])
    return (
        <>
            <input className="w-full p-3 rounded-xl" type="text" placeholder="(00)00000-0000" maxLength={13} value={numberPhone} onChange={(e) => setNumberPhone(e.target.value)} />
            { !phoneNumber &&  numberPhone != "" ?
                <p className="text-red-400 font-bold"> O número inserido não existe</p>
            :null
            }
        </>
    )
}
