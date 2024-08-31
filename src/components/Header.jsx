import {Menu,X} from "lucide-react"
import { useState } from "react"
import MyImage from '../assets/Logo.png'
export default function Header(){
    const [menu,setMenu] = useState(false)
    return(
        <>
        <header className="flex justify-between p-3">

        { menu  ?
            <div className="fixed top-0 left-0 duration-1000 bg-zinc-600 w-full h-screen z-10">
                <div className="bg-green-800">
                <button onClick={()=> setMenu(false)}><X/></button>
                <ul></ul>
                </div>
            </div>
            :null
        }
            <img src={MyImage} alt="Logo" />


            <div className="flex gap-4 ">
                <button className="text-white bg-orange-500 rounded-xl p-2">Contate-nos</button>
                <div onClick={()=>setMenu(true)} className="bg-green-900 rounded-xl flex items-center p-2">
                    <Menu color="white"/>
                </div>
            </div>
        </header>
        </>
    )
}