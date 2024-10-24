import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import axios from "axios"
import { useState, useEffect } from "react";
import Scrolltop from "../components/ScrollTop";
import ComponentNews from "../components/ComponentNews";
import Imagem1 from "../assets/Banners/MATERIA 1.jpg"
import Imagem2 from "../assets/Banners/MATERIA-2.jpg"
import Imagem3 from "../assets/Banners/MATERIA-3_2.png"

export default function Notices() {

  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([])
    return(
        <>
        <div className="md:px-20 lg:px-40 2xl:px-80">
          <Scrolltop/>
          <Header />
          <Info Title={"Notícias"} />
        </div><main className="flex flex-col px-4 md:px-0 items-center justify-center lg:flex-row gap-14 w-full bg-zinc-100  py-10 2xl:gap-12">
      <div className="w-full flex items-center justify-center lg:px-10">
        <main className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:flex-row  gap-8 bg-zinc-100  py-10 2xl:gap-14 ">
          <ComponentNews Title={"OUTUBRO ROSA: UM GESTO DE CUIDADO, UMA ATITUDE DE AMOR!"} Imagem={Imagem1} link={"/notices/outubro_rosa"} />
          <ComponentNews Title={"COOPERADOS REALIZAM TREINAMENTO E CAPACITAÇÃO DAS NR 10 E NR 35 "} Imagem={Imagem2} link={"/notices/cooperados"} />
          <ComponentNews Title={"COOPERATIVA DINÂMICA REALIZA O DIA C 2024 EM PORTO DE PEDRAS/AL"} Imagem={Imagem3} link={"/notices/cooperativa"} />
        </main>
      </div>
        </main>
        <Footer/>
        </>
    )

}