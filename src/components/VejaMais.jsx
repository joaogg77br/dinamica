import { ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import ComponentNews from "./ComponentNews"
import Imagem from "../assets/imagens-otimizadas/MATERIA 1-BqG8et9F.jpg"
import Imagem2 from "../assets/imagens-otimizadas/MATERIA-2-Dtl-boMR.jpg"
import Imagem3 from "../assets/imagens-otimizadas/MATERIA-3_2-BKPExm7o.jpg"
import { Link } from "react-router-dom"
import { Loader } from "lucide-react"
export default function VejaMais() {
    const [noticias, setNoticias] = useState([])
    const [loading, setLoading] = useState(true)
    const rota = "https://api.zeruns.com.br/noticias?page=1"

    useEffect(() => {
        async function Api() {
            await fetch(rota)
                .then(e => e.json())
                .then(item => {
                    console.log(loading)
                    const data = item.data
                    setNoticias(data)
                    setLoading(false)
                })
                .catch(err => console.log(err))
        }
        Api()


    }, [])
    // 
    return (
        <>
            <div className="w-full bg-zinc-100 p-4 md:px-20 lg:px-40 2xl:px-80 pt-10">
                <div className="flex justify-center w-full items-center">
                    <p className="text-3xl font-bold">Veja <span className="text-laranja">Mais</span></p>
                </div>
            </div>
            <div className="w-full flex items-center justify-center bg-zinc-100 px-10">
                <main className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:flex-row  gap-8 bg-zinc-100  py-10 2xl:gap-16">
                    {loading ?
                        <div className="w-full flex items-center justify-center">
                            <Loader className="spin" />
                        </div>
                        : noticias.map((noticia, index) => {
                            return (
                                <>
                                    <Link key={index} to={`/noticias/1/${index}`}>
                                        <ComponentNews
                                            key={index + 1}
                                            Imagem={noticia.imagem_capa}
                                            Title={noticia.titulo}
                                        >
                                        </ComponentNews>
                                    </Link>
                                </>
                            )
                        })
                    }
                </main>
            </div>
        </>

    )
}
