import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import { useState, useEffect } from "react";
import Scrolltop from "../components/ScrollTop";
import ComponentNews from "../components/ComponentNews";
import { ChevronLeft, ChevronRight, Loader, ChevronsLeft, ChevronsRight } from "lucide-react"

export default function Notices() {

  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([])
  let [limit, setLimit] = useState(1)
  let [x, setX] = useState([])
  let [pag, setPag] = useState([])
  let [id, setId] = useState(1)

  useEffect(() => {
    if (id == 1) {
      setPag(pag = [1, 2, 3].filter(page => page <= limit))
      return
    } else if (id == limit) {
      setPag(pag = [limit - 2, limit - 1, limit].filter(page => page >= 1))
      return
    }
    setPag(pag = [id - 1, id, id + 1].filter(page => page >= 1 && page <= limit))

  }, [id, limit])

  function ordenadeByDate(array) {
    console.log("arry:", array)
    let ordanadeArray = array.sort((a, b) => a.createdAt - b.createdAt)
    console.log("ordenadeArry:", ordanadeArray)
  }

  const Api = () => {
    const url = `https://api.zeruns.com.br/noticias?page=${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.data); // Atualiza o estado com as notícias
        ordenadeByDate(data.data)
        setLoading(true)
      })
      .catch((err) => console.error("Erro ao buscar notícias:", err));
  };

  // useEffect que dispara a busca sempre ue o ID muda
  useEffect(() => {
    setLoading(false)
    Api();
  }, [id]); // Executa sempre que o ID mudar

  useEffect(() => {
    setLoading(false)
    const url = `https://api.zeruns.com.br/noticias?page=${id}`;
    async function Api() {
      await fetch(url)
        .then(item => item.json())
        .then(data => {
          const t = data.total / 3
          const r = data.total % 3
          if (r != 0 && r < 3) {
            setLimit(Math.floor(t + 1))
            return
          }
          setLimit(Math.floor(t))
        })
        .catch(err => console.log(err))
    }
    Api()
  }, [])

  return (
    <>
      <div className="md:px-20 lg:px-40 2xl:px-80">
        <Scrolltop />
        <Header />
        <Info Title={"Notícias"} />
      </div><main className="flex flex-col px-4 md:px-0 items-center justify-center lg:flex-row gap-14 w-full bg-zinc-100  py-10 2xl:gap-12">
        <div className="w-full flex items-center justify-center lg:px-10">
          <main className="grid grid-cols-1 justify-center lg:grid-cols-2 xl:grid-cols-3 lg:flex-row  gap-8 bg-zinc-100  2xl:gap-14 ">
            {loading ?
              news.map((notice, index) => {
                return (
                  <Link to={`/noticias/${id}/${index}`}>
                    <ComponentNews key={index + 1} Title={notice.titulo} Imagem={notice.imagem_capa} />
                  </Link>
                )
              })
              :
              <div className="w-full flex items-center justify-center">
                <Loader className="spin" />
              </div>
            }
          </main>
        </div>
      </main>

      <div className="w-full flex-wrap gap-4 flex bg-zinc-100 py-10 justify-center items-center  text-laranja">

        <button className="p-3 bg-zinc-100  rounded duration-150 hover:bg-white"
          onClick={() => {
            setId(id = 1)
          }} >
          {
            <ChevronsLeft />
          }
        </button>

        <button className="p-3 bg-zinc-100 rounded duration-150 "
          onClick={() => {
            if (id <= 1) {
              console.log("minimun")
              return
            }
            setId(id - 1)
          }}
        >
          <ChevronLeft />
        </button>

        <div className="text-sm mx-6 text-black flex gap-4">
          {
            pag.map(num => {
              return (
                <button key={num + 1} className={`rounded p-2 px-4 duration-300 border-laranja border-2 ${num === id ? `bg-laranja text-white` : ` bg-zinc-100 text-laranja`}`}
                  onClick={
                    () => {
                      setId(id = num)
                    }
                  }>
                  {num}
                </button>
              )
            })
          }
        </div>

        <button className="p-3  rounded duration-150 "
          onClick={() => {
            if (id >= limit) {
              console.log("Max")
              return
            }
            setId(id + 1)
          }}
        >
          <ChevronRight />
        </button>

        <button className="p-3  rounded duration-150"
          onClick={() => {
            if (id == limit) {
              console.log("Max")
              return
            }
            setId(limit)
          }} >
          {
            <ChevronsRight />
          }
        </button>
      </div>
      <Footer />
    </>
  )
}

