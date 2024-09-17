import { Link } from "react-router-dom";
import LogoGray from '../assets/LogoGray.svg'
import { ListCollapse } from "lucide-react";


export default function Footer() {
    return (

        <footer className="sm:flex sm:justify-between">
            <div className="flex sm:items-start  sm:gap-4 flex-col text-zinc-400 sm:flex-row p-10">
                <img src={LogoGray} alt="" className="w-40" />
                <p>Dinâmica Cooperativa © 2024. Todos os diretos reservados</p>
            </div>

            <main className="grid grid-cols-2 p-10 gap-4 lg:w-3/4">
                <div classsName="">
                    <h1 className="font-medium">Institucional</h1>
                    <ul className="grid gap-5 text-start grid-cols-1 mt-5 duration-300 sm:gap-4 w-full mb-10 text-zinc-400">
                        <li className="hover:text-orange-500"><Link to="/dinamica">Sobre a Dinâmica</Link></li>
                        <li className="hover:text-orange-500"><Link to="/mvv">Missão,Visão e Valores</Link></li>
                        <li className="hover:text-orange-500"><Link to="/beneficios">Benefícios oferecidos pela Dinâmica</Link></li>
                        <li className="hover:text-orange-500"><Link to="/area de atuacao">Onde atuamos</Link></li>
                        <li className="hover:text-orange-500"><Link to="/conselhos">Conselhos</Link></li>
                    </ul>
                </div>

                <div classsName="">
                    <h1 className="font-medium">Cooperativismo</h1>
                    <ul className="grid gap-5 text-start grid-cols-1 mt-5 duration-300 sm:gap-4 w-full mb-10 text-zinc-400">
                        <li className="hover:text-orange-500"><Link to="/cooperativismo">Cooperativismo, Cooperativa e Cooperado</Link></li>
                        <li className="hover:text-orange-500"><Link to="/principios">7 Principios do Cooperativismo</Link></li>
                        <li className="hover:text-orange-500"><Link to="/beneficios">Educação Continuada</Link></li>
                        <li className="font-medium text-black hidden lg:block mt-4"><Link to="/noticias">Nóticias</Link></li>
                        <li className="font-medium text-black hidden lg:block"><Link to="/">Conteúdo</Link></li>
                    </ul>
                </div>

                <h1 className="font-medium lg:hidden"><Link to="/noticias">Nóticias</Link></h1>
                <h1 className="font-medium lg:hidden"><Link to="/">Conteúdo</Link></h1>
            </main>
        </footer>
    )
}