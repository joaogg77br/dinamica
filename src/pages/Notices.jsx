import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import axios from "axios"
import { useState, useEffect } from "react";
import Scrolltop from "../components/ScrollTop";

export default function Notices() {

  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/news');
        console.log(response.data)
        setNews(response.data);
      } catch (err) {
        setError('Erro ao buscar os dados');
      } finally {
        setLoading(false);
      }
    }
    fetchData()
  }, []);

  return (
    <div className="font-nunitoSans">
      <Scrolltop />
      <div className="sm:px-20 lg:px-40">
        <Header />
        <Info Title={"Notícias"} />
      </div>

      <main className="bg-cinza flex flex-wrap justify-center px-4 py-10 gap-10 sm:px-20 lg:px-40 ">
        {
          news.map((conteudo, index) => {
            return (
              <Link to={`/noticias/details/${index}`}>
                <div className="bg-white rounded-xl sm:w-72 lg:h-Max">
                  <img src={conteudo.img} alt="" className="w-full rounded-t-3xl" />
                  <div className="flex flex-col justify-center ">
                    <p className="p-4 text-xl font-bold text-zinc-700">{conteudo.title}</p>
                    <p className="px-4 pb-4  text-zinc-300 font-medium">{conteudo.timer}</p>
                  </div>
                </div>
              </Link>
            )
          })
        }

      </main>
      <Footer />
    </div>
  )
}