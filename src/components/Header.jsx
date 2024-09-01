import {Menu,X} from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import MyImage from '../assets/Logo.png'
export default function Header(){
    const [menu,setMenu] = useState(false)
    return(
        <>
        <header className="flex justify-between p-3">

        { menu  ?
            <div className="fixed flex justify-end top-0 left-0  bg-zinc-950 w-full h-screen z-10 ">
                <div className="bg-green-900 flex flex-col h-screen w-4/5 p-2">
                <div className="flex w-full justify-end">
                <button onClick={()=> setMenu(false)}><X className="text-green-900 bg-white p-1 rounded-md"/></button>
                </div>
                <ul className="flex justify-start flex-col mt-4 text-white gap-4">
                    <li><Link to="/" className="pb-2 border-b border-white hover:bg-slate-400 ">Home</Link></li>
                    <li><Link to="/dinamica" className="pb-2 border-b border-white">A Dinâmica</Link></li>
                    <li><Link to="/noticias" className="pb-2 border-b border-white">Nóticias</Link></li>
                </ul>
                </div>
            </div>
            :null
        }


            <div className="flex gap-10 p-2 justify-between w-full items-center sm:pr-10">

            <img src={MyImage} alt="Logo" />
            <div className="flex gap-10">
                <ul className="hidden justify-center mt-4 gap-10 sm:flex">
                    <li><Link to="/" className="pb-2 border-b border-white  a hover:text-orange-500 hover:underline">Home</Link></li>
                    <li><Link to="/dinamica" className="pb-2 border-b border-white hover:text-orange-500 hover:underline">A Dinâmica</Link></li>
                    <li><Link to="/noticias" className="pb-2 border-b border-white hover:text-orange-500 hover:underline">Nóticias</Link></li>
                </ul>
                <div className="flex justify-end sm:pt-3">
                <button className="text-white bg-orange-500 rounded-xl p-2 flex">Contate-nos</button>
            </div>
                </div>

                <div onClick={()=>setMenu(true)} className="bg-green-900 rounded-xl flex items-center p-2 sm:hidden">
                    <Menu color="white"/>
                </div>
            </div>
        </header>
        </>
    )
}