import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Scrolltop from "../components/ScrollTop"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Info from "../components/Info"
import "../anima.css"
import secondImage from "../assets/imagens-otimizadas/MATERIA-3_2-BKPExm7o.jpg"
import {Loader} from "lucide-react"
export default function NoticesDescription() {
  const { id, page } = useParams()
  const [loading,setLoading] = useState(false)
  const [item, setItem] = useState({})
  useEffect(() => {
    setLoading(true)
    fetch(`https://api.zeruns.com.br/noticias?page=${page}`)
      .then(e => e.json())
      .then(data => {
        setLoading(false)
        console.log("")
        setItem(data.data[id])
        console.log(data.data[id].conteudo)
      })
    .catch(err => console.log(err))
  }, [])
  return (
    <>
      <div>
      <div className="w-full justify-center items-center">
      </div>
        <div className="md:px-20 lg:px-40 2xl:px-80">
          <Scrolltop />
          <Header />
          <Info Title={item.titulo} />
        </div>
        <main className="md:px-20 lg:px-40 2xl:px-80 font-nunitoSans py-10">
          { loading ?
            <div className="w-full flex items-center justify-center">
              <Loader className="spin"/>
            </div>
           :
            <div>
            <div className="">
              <img src={item.imagem_capa} alt="" className="w-full  md:h-1/2 lg:h-720 md:rounded-custom object-cover" />
            </div>
            <div className="text-zinc-800 w-full pt-10 md:px-40 flex xl:items-center xl:justify-center flex-col gap-4">
              <div   dangerouslySetInnerHTML={{ __html: item.conteudo }}></div>
          </div>
            </div>
         }  
        </main>
        <Footer />
      </div>
    </>
  )
}
