import {Menu,X} from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import MyImage from '../assets/Logo.png'
import Dinamic from '../assets/Vector.svg'
export default function Header(){
    const [menu,setMenu] = useState("hidden")
    const [contact,setContact] = useState(false)

    return(
        <>
        <header className="flex justify-between p-3">

            <div className={`fixed ${menu}   justify-end top-0 left-0  bg-black w-full h-screen z-50`}>
                <div className="bg-green-900 flex flex-col h-screen overflow-hidden animate-wiggle w-11/12 p-2 pt-4">
                <div className="flex w-full justify-end">
                <button onClick={() => setMenu("hidden")}><X className="text-green-900 bg-white p-1 rounded-md"/></button>
                </div>
                <ul className="flex justify-start flex-col mt-4 text-white gap-10 pl-4">
                    <li className="flex gap-2 flex-col">
                        <Link to="/" className="relative border-white  hover:left-4">Home</Link>
                    <hr className=" border-zinc-100"/>
                    </li>
                    <li className="flex gap-2 flex-col">
                        <Link to="/noticias" className="relative border-white hover:left-4 ">Nóticias</Link>
                    <hr className=" border-zinc-100"/>
                    </li>
                    <li className="flex gap-2 flex-col">
                        <Link to="/dinamica" className="relative border-white  hover:left-4">Dinamica</Link>
                    <hr className=" border-zinc-100"/>
                    </li>
                </ul>
                </div>
            </div>
        {
            contact ?
            <div className="fixed  flex justify-center items-center bg-black bg-opacity-75 w-full h-screen top-0 left-0 z-40">
                <section className="bg-white p-4 rounded-3xl  sm:w-1/3 z-20">
                <div className="flex justify-between pt-4">
                    <h1 className="text-xl font-semibold">Contate-nos</h1>
                <button onClick={()=> setContact(false)}><X className="text-zinc-700 bg-zinc-200 p-1 rounded-md"/></button>
                </div>
                <div className="flex flex-col w-full mt-4 justify-start items-start gap-4 p-4">
                    <input type="text" placeholder="Primeiro Nome" className="p-2 w-full bg-zinc-200 rounded outline-none"/>
                    <input type="text" placeholder="Sobrenome" className="p-2 w-full bg-zinc-200 rounded outline-none"/>
                    <input type="text" placeholder="E-mail" className="p-2 w-full bg-zinc-200 rounded outline-none"/>
                    <textarea placeholder="Mensagem" className="p-2 w-full bg-zinc-200 rounded outline-none"></textarea>
                    <button className="bg-orange-500 text-white p-2 px-8 rounded-xl">Enviar</button>
                </div>
                </section>                
            </div>
            :null
        }


            <div className="flex gap-10 p-2 justify-between w-full items-center sm:pr-10">
            <div className="flex gap-2 sm:mr-20 items-center">
            <img src={MyImage} alt="Logo" className="h-10"/>
            <img src={Dinamic} alt="" className="hidden  lg:block"/>
            </div>
            <div className="flex gap-10">
                <ul className="hidden justify-center mt-4 gap-10 sm:flex">
                    <li><Link to="/" className="pb-2 border-b border-white  a hover:text-orange-500 hover:underline">Home</Link></li>
                    <li><Link to="/dinamica" className="pb-2 border-b border-white hover:text-orange-500 hover:underline text-nowrap">A Dinâmica</Link></li>
                    <li><Link to="/noticias" className="pb-2 border-b border-white hover:text-orange-500 hover:underline">Nóticias</Link></li>
                </ul>
                <div className="flex gap-4 justify-end sm:pt-3">
                    <button className="text-white bg-orange-500 rounded-xl p-2 flex text-nowrap duration-300 border-2 border-orange-500 hover:text-orange-500  hover:bg-white" onClick={()=>{setContact(true)}}>Contate-nos</button>
                <div onClick={()=>setMenu("flex")} className="bg-green-900 rounded-xl flex items-center p-2 sm:hidden">
                    <Menu color="white"/>
                </div>
                </div>
                </div>

            </div>
        </header>
        </>
    )
}