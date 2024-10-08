import { ChevronRight } from "lucide-react"
import ComponentNews from "./ComponentNews"
import Imagem from "../assets/image 2.jpg"
import { Link } from "react-router-dom"
export default function LastNews(){
    return(
        
        <div className="w-full bg-zinc-100 p-4 md:px-20 lg:px-56">
          <Link to="/noticias">
           <p className="flex gap-2 text-white p-2 rounded-2xl duration-300 justify-center bg-laranja w-48 border-2 border-laranja hover:bg-white hover:text-laranja ">Ultimas nóticias <ChevronRight/></p> 
          </Link>
        <main className="flex flex-col items-center justify-center lg:flex-row gap-10 md:px-20 lg:px-40 w-full bg-zinc-100  py-10">
          <ComponentNews Title={"OUTUBRO ROSA: UM GESTO DE CUIDADO, UMA ATITUDE DE AMOR!"} Imagem={Imagem} link={"/notices/outubro_rosa"}/>
          <ComponentNews Title={"COOPERADOS REALIZAM TREINAMENTO E CAPACITAÇÃO DAS NR 10 E NR 35 "} Imagem={Imagem} link={"/notices/cooperados"}/>
          <ComponentNews Title={"COOPERATIVA DINÂMICA REALIZA O DIA C 2024 EM PORTO DE PEDRAS/AL"} Imagem={Imagem} link={"/notices/cooperativa"}/>
        </main>
        </div>
        
    )
}