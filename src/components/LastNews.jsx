import { ChevronRight } from "lucide-react"
import ComponentNews from "./ComponentNews"
import Imagem from "../assets/imagens-otimizadas/MATERIA 1-BqG8et9F.jpg"
import Imagem2 from "../assets/imagens-otimizadas/MATERIA-2-Dtl-boMR.jpg"
import Imagem3 from "../assets/imagens-otimizadas/MATERIA-3_2-BKPExm7o.jpg"
import { Link } from "react-router-dom"
export default function LastNews() {
  return (

    <>
      <div className="w-full bg-zinc-100 p-4 md:px-20 lg:px-40 2xl:px-80 pt-10">
        <div className="w-48">
          <Link to="/noticias" className="w-auto">
            <button className="flex gap-2 text-white  p-2 rounded-2xl duration-300 justify-center bg-laranja w-48 border-2 border-laranja hover:bg-white hover:text-laranja  ">Ultimas nóticias <ChevronRight /></button>
          </Link>
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-zinc-100 px-10">
        <main className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:flex-row  gap-8 bg-zinc-100  py-10 2xl:gap-16">
          <ComponentNews Title={"OUTUBRO ROSA: UM GESTO DE CUIDADO, UMA ATITUDE DE AMOR!"} Imagem={Imagem} link={"/notices/outubro_rosa"} />
          <ComponentNews Title={"COOPERADOS REALIZAM TREINAMENTO E CAPACITAÇÃO DAS NR 10 E NR 35 "} Imagem={Imagem2} link={"/notices/cooperados"} />
          <ComponentNews Title={"COOPERATIVA DINÂMICA REALIZA O DIA C 2024 EM PORTO DE PEDRAS/AL"} Imagem={Imagem3} link={"/notices/cooperativa"} />
        </main>
      </div>
    </>

  )
}