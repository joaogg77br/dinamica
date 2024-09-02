import { Link } from "react-router-dom";
import LogoGray from '../assets/LogoGray.svg'


export default function Footer(){
    return(

        <footer className="sm:flex sm:justify-between">
            <div className="flex sm:items-center  sm:gap-4 flex-col text-zinc-400 sm:flex-row p-10">
                <img src={LogoGray} alt="" className="h-20 w-40"/>
                <p>Dinâmica Cooperativa © 2024. Todos os diretos reservados</p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 pl-2 gap-5 mt-5 duration-300 sm:gap-4 w-2/5 mb-10">
                <li className="relative pl-4 cursor-pointer duration-300 hover:text-orange-500 hover:right-4 hover:font-bold hover:underline"><Link to={"/"}>Home</Link></li>
                <li className="relative pl-4 cursor-pointer duration-300 hover:text-orange-500 hover:right-4 hover:font-bold hover:underline"><Link to={"/dinamica"}>A Dinâmica</Link></li>
                <li className="relative pl-4 cursor-pointer duration-300 hover:text-orange-500 hover:right-4 hover:font-bold hover:underline">Blog</li>
                <li className="relative pl-4 cursor-pointer duration-300 hover:text-orange-500 hover:right-4 hover:font-bold hover:underline">Contate-nos</li>
                <li className="relative pl-4 cursor-pointer duration-300 hover:text-orange-500 hover:right-4 hover:font-bold hover:underline">Termos & Privacidade</li>
                <li className="relative pl-4 cursor-pointer duration-300 hover:text-orange-500 hover:right-4 hover:font-bold hover:underline">FAQ</li>
            </ul>
        </footer>
    )
}