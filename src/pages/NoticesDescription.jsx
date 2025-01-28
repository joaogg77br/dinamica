import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Scrolltop from "../components/ScrollTop"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Info from "../components/Info"
import Post from "../components/Post"
import "../anima.css"
import secondImage from "../assets/imagens-otimizadas/MATERIA-3_2-BKPExm7o.jpg"
import VejaMais from "../components/VejaMais"
import { Loader } from "lucide-react"
import LastNews from "../components/LastNews"
export default function NoticesDescription() {
  const { id, page } = useParams()
  const [loading, setLoading] = useState(false)
  const [item, setItem] = useState({})

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.zeruns.com.br/noticias?page=${page}`)
      .then(e => e.json())
      .then(data => {
        setLoading(false)
        console.log(data.data[id])
        console.log(data.data[id].titulo)
        console.log(data.data[id].updatedAt)
        setItem(data.data[id])
      })
      .catch(err => console.log(err))
  }, [id, page])

  return (
    <>
      <div>
        <div className="w-full justify-center items-center">
        </div>
        <div className="md:px-20 lg:px-40 2xl:px-80">
          <Scrolltop />
          <Header />
          <Post
            Title={item.titulo}
            Time={item.updatedAt}
          />
        </div>
        <main className="font-nunitoSans py-10">
          {loading ?
            <div className="w-full flex items-center justify-center">
            </div>
            :
            <div>
              <div className="sm:pr-10 text-zinc-800 w-full px-4 pt-10 md:px-32  xl:items-center xl:justify-center flex-col gap-4">
                <div className="l flex items-center flex-col" dangerouslySetInnerHTML={{ __html: item.conteudo }}></div>
              </div>
            </div>
          }
        </main>
        <VejaMais />
        <Footer />
      </div>
    </>
  )
}
