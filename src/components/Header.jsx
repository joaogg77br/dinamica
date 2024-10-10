import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import MyImage from '../assets/Logo.png'
import Dinamic from '../assets/Vector.svg'
import "../index.css"
export default function Header() {
    const [menu, setMenu] = useState("hidden")
    const [contact, setContact] = useState(false)
    const [openIns, setOpenInst] = useState(false)
    const [openCoop, setOpenCoop] = useState(false)
    const [openCon, setOpenCoon] = useState(false)
    return (
        <>
            <div className="flex w-full  justify-center mb-20">
                <header className="flex w-full justify-between p-3 fixed z-50 bg-white sm:px-20 lg:px-40 ">
                    <div className={`fixed ${menu}   justify-end top-0 left-0  bg-black bg-opacity-50 w-full h-screen z-50`}>
                        <div className="bg-verde flex flex-col h-screen overflow-hidden animate-wiggle w-11/12 p-2 pt-4">
                            <div className="flex w-full justify-end">
                                <button className="p-2 bg-white mr-4 mt-2 rounded-xl" onClick={() => setMenu("hidden")}><X className="text-green-900 rounded-md " /></button>
                            </div>
                            <ul className="flex justify-start flex-col mt-4 text-white gap-10 pl-4">
                                <li className="flex gap-2 flex-col border-b-2 border-zinc-50 border-opacity-25 pb-4">
                                    <Link to="/" className="relative font-medium border-white  hover:left-4">Home</Link>
                                </li>
                                <li className="flex gap-2 flex-col border-b-zinc-50 border-b-2 pb-4 pr-4 border-opacity-25 overflow-hidden">
                                    <div className="flex justify-between overflow-hidden">
                                        <Link to="/noticias" className="relative border-white hover:left-4 font-medium">Institucional</Link>
                                        {openIns ?
                                            <ChevronUp className="cursor-pointer" onClick={() => {
                                                console.log(openIns)
                                                setOpenInst(!openIns)
                                            }} />
                                            :
                                            <ChevronDown className="cursor-pointer" onClick={() => {
                                                console.log(openIns)
                                                setOpenInst(!openIns)
                                            }} />
                                        }
                                    </div>
                                    {openIns ?
                                        <ul className="flex flex-col gap-4 mt-4 animate-downside">
                                            <li className="underline"><Link to="/dinamica">Sobre A Dinâmica</Link></li>
                                            <li className="underline"><Link to="/mvv">Visão, Missão e vetores</Link></li>
                                            <li className="underline"><Link to="/atividades">Atividades Desenvolvidas pela Dinâmica</Link></li>
                                            <li className="underline"><Link to="/beneficios">Benefício Excluidos da Dinâmica</Link></li>
                                            <li className="underline"><Link to="/area de atuacao">Onde atuamos</Link></li>
                                            <li className="underline"><Link to="/conselhos">Conselhos</Link></li>
                                        </ul>
                                        : null
                                    }
                                </li>
                                <li className="flex gap-2 flex-col border-b-2 border-zinc-50 pb-4 border-opacity-25 overflow-hidden">
                                    <div className="flex justify-between pr-4">
                                        <Link to="/dinamica" className="relative border-white hover:left-4 font-medium">Cooperativismo</Link>

                                        {openCoop ?
                                            <ChevronUp className="cursor-pointer" onClick={() => {
                                                setOpenCoop(!openCoop)
                                            }} />
                                            :
                                            <ChevronDown className="cursor-pointer" onClick={() => {
                                                setOpenCoop(!openCoop)
                                            }} />
                                        }
                                    </div>
                                    {openCoop ?
                                        <ul className="flex flex-col gap-4 animate-downside pt-4">
                                            <li className="underline"><Link to="/cooperativismo">Cooperativismo, Cooperativa e Cooperado</Link></li>
                                            <li className="underline"><Link to="/principios">7 Princípios do Cooperativismo</Link></li>
                                            <li className="underline"><Link to="/Educacao continuada">Educação Continuada</Link></li>
                                        </ul>
                                        : null
                                    }
                                </li>
                                <li className="flex gap-2 flex-col border-b-zinc-50 border-b-2 pb-4 pr-4 border-opacity-25">
                                    <div className="flex justify-between ">
                                        <Link to="/conteudos" className="relative border-white hover:left-4 font-medium">Contéudos</Link>
                                    </div>
                                    {openCon ?
                                        <ul className="flex flex-col gap-4 mt-4 animate-wiggle">
                                            <li className="underline"><Link>Sobre A Dinâmica</Link></li>
                                            <li className="underline"><Link>Missão,Visão e Valores</Link></li>
                                            <li className="underline"><Link>Atividades Desenvolvidas pela Dinâmica</Link></li>
                                            <li className="underline"><Link>Benefício Excluidos da Dinâmica</Link></li>
                                            <li className="underline"><Link>Onde atuamos</Link></li>
                                            <li className="underline"><Link>Conselhos</Link></li>
                                        </ul>
                                        : null
                                    }
                                </li>

                                <li className="font-medium">
                                    <Link to={"/noticias"}>Nóticias</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {
                        contact ?
                            <div className="fixed  flex justify-center items-center bg-zinc-800 bg-opacity-75 w-full h-screen top-0 left-0 z-40">
                                <section className="bg-white p-4 rounded-3xl  lg:w-1/3 z-20">
                                    <div className="flex justify-between pt-4">
                                        <h1 className="text-xl font-semibold">Contate-nos</h1>
                                        <button onClick={() => setContact(false)}><X className="text-zinc-400 bg-zinc-200 p-1 rounded-md" /></button>
                                    </div>
                                    <div className="flex flex-col w-full mt-4 justify-start items-start gap-4 p-4">
                                        <input type="text" placeholder="Primeiro Nome" className="p-2 w-full bg-zinc-200 rounded outline-none" />
                                        <input type="text" placeholder="Sobrenome" className="p-2 w-full bg-zinc-200 rounded outline-none" />
                                        <input type="text" placeholder="E-mail" className="p-2 w-full bg-zinc-200 rounded outline-none" />
                                        <textarea placeholder="Mensagem" className="p-2 w-full bg-zinc-200 rounded outline-none"></textarea>
                                        <button className="bg-orange-500 text-white p-2 px-8 rounded-xl">Enviar</button>
                                    </div>
                                </section>
                            </div>
                            : null
                    }


                    <div className="flex gap-10 p-2 justify-between w-full items-center lg:pr-10">
                        <Link to="/">
                            <div className="flex gap-2 xl:mr-20 items-center min-w-10">
                                <img src={MyImage} alt="Logo" className="h-10" />
                                <img src={Dinamic} alt="" className="hidden xl:block" />
                            </div>
                        </Link>
                        <div className="flex gap-5 xl:gap-10 text-zinc-800">
                            <ul className="hidden justify-center text-sm mt-4 lg:gap-5 lg:flex xl:gap-10 font-bold">
                                <li><Link to="/" className="pb-2 border-b border-white   hover:text-orange-500 hover:underline decoration-2 underline-offset-8">Home</Link></li>
                                <li className="group  pb-6">
                                    <Link to="" className="pb-2 border-b border-white hover:text-orange-500 hover:underline text-nowrap decoration-2 underline-offset-8">Institucional</Link>
                                    <section className="força h-96 hidden flex-col overflow-hidden transition bg-white  hover:flex group-hover:flex duration-300 text-center absolute animate-downside  pb-10 w-full z-20 left-0 top-20 pt-10 px-20">
                                        <div className="px-28">
                                            <hr className="mb-10 border-10 border-gray bg-white h-0 w-full" />
                                        </div>
                                        <div className="flex gap-20 p-10 px-32 overflow-hidden">
                                            <div className=" text-4xl font-medium text-zinc-400  decoration-2 underline-offset-8">Institucional</div>
                                            <ul className="flex flex-col mt-2 text-start gap-4 ">
                                                <li className="hover:text-orange-500 duration-300 "><Link to="/dinamica">A Dinâmica</Link></li>
                                                <li className="hover:text-orange-500 duration-300"><Link to="/mvv">Missão, Visão e Valores</Link></li>
                                                <li className="hover:text-orange-500 duration-300"><Link to="/atividades">Atividades Desenvolvidas Pela Dinâmica</Link></li>
                                                <li className="hover:text-orange-500 duration-300"><Link to="/beneficios">Benefícios exclusivos da Dinâmica</Link></li>
                                                <li className="hover:text-orange-500 duration-300"><Link to="/area de atuacao">Onde atuamos</Link></li>
                                                <li className="hover:text-orange-500 duration-300"><Link to="/conselhos">Conselhos</Link></li>
                                            </ul>
                                        </div>
                                    </section>
                                </li>
                                <li className="group pb-6">
                                    <Link className="pb-2 border-b border-white hover:text-orange-500 hover:underline text-nowrap decoration-2 underline-offset-8">Cooperativismo</Link>
                                    <section className="hidden flex-col bg-white overflow-hidden hover:flex group-hover:flex duration-300 text-center absolute pb-10 w-full z-20 left-0 top-20 pt-10 px-20 força h-96">
                                        <div className="px-28">
                                            <hr className="mb-10 border-10 border-cinza bg-white h-0 w-full" />
                                        </div>
                                        <div className="flex gap-20 p-10 px-32">
                                            <div className=" text-4xl font-medium text-zinc-400">Cooperativismo</div>
                                            <ul className="flex flex-col gap-4 text-start mt-2 ">
                                                <li className="hover:text-orange-500 duration-300"><Link to="/cooperativismo">Cooperativismo, Cooperativa e Cooperado</Link></li>
                                                <li className="hover:text-orange-500 duration-300"><Link to="/principios">7 Príncipios do Coopertivismo</Link></li>
                                                <li className="hover:text-orange-500 duration-300"><Link to="/Educacao continuada">Educação Continuada</Link></li>
                                            </ul>
                                        </div>
                                    </section>
                                </li>
                                <li className="group pb-6">
                                    <Link to="/conteudos" className="pb-2 border-b border-white hover:text-orange-500 hover:underline text-nowrap decoration-2 underline-offset-8">Contéudos</Link>
                                </li>
                                <li><Link to="/noticias" className="pb-2 border-b border-white hover:text-orange-500 hover:underline decoration-2 underline-offset-8">Nóticias</Link></li>
                            </ul>
                            <div className="flex gap-4 justify-end lg:pt-3">
                                <Link to={"/fale conosco"}>
                                    <button className="text-white h-7 bg-laranja rounded-xl p-4 flex justify-center items-center text-nowrap duration-300 border-2 border-laranja hover:text-laranja  hover:bg-white" >Fale conosco</button>
                                </Link>
                                <div onClick={() => setMenu("flex")} className="bg-verde rounded-xl flex items-center p-2 lg:hidden">
                                    <Menu color="white" />
                                </div>
                            </div>
                        </div>

                    </div>
                </header>
            </div>
        </>
    )
}