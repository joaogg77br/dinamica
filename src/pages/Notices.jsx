import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import axios from "axios"
import { useState, useEffect } from "react";
import Scrolltop from "../components/ScrollTop";
import ComponentNews from "../components/ComponentNews";
import Imagem from "../assets/Parceiros/Frame 58.svg"

export default function Notices() {

  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([])
    return(
        <>
        <div className="md:px-20 lg:px-40">
          <Scrolltop/>
          <Header />
          <Info Title={"Notícias"} />
        </div>
        <main className="flex justify-center gap-10 md:px-20 lg:px-44 w-full bg-zinc-100 p-2">
          <ComponentNews Title={"Como viver a vida "} Imagem={Imagem}/>
          <ComponentNews Title={"Como viver a vida "} Imagem={Imagem}/>
          <ComponentNews Title={"Como viver a vida "} Imagem={Imagem}/>
        </main>
        </>
    )

}