import Header from "../components/Header";
import Footer from "../components/Footer";
import Info from "../components/Info";
import WhiteHome from "../assets/Frame 55.svg"
import Pdf1 from "../assets/Pdfs/LEI 5.764.pdf"
import Pdf2 from "../assets/Pdfs/Lei 12.690-12.pdf"
import Noticias from "../assets/Parceiros/Noticias.svg"
import Noticias2 from "../assets/Parceiros/Noticias2.svg"
import Noticias3 from "../assets/Parceiros/Noticias3.svg"
import DinamicaNews1 from "../assets/Pdfs/DINÂMICA NEWS - 1 EDIÇÃO.pdf"
import DinamicaNews2 from "../assets/Pdfs/Dinâmica News - 2ª edição.pdf"
import DinamicaNews3 from "../assets/Pdfs/Dinâmica News - 3ª edição .pdf"
import Scrolltop from "../components/ScrollTop";
import FrameSkin from "../assets/Parceiros/Frame 56.svg"
import FrameSkin2 from "../assets/Parceiros/Frame 57.svg"
import FrameSkin3 from "../assets/Parceiros/Frame 58.svg"
import FrameSkin4 from "../assets/Parceiros/Frame 59.svg"
import FrameSkin5 from "../assets/Parceiros/Frame 60.svg"
import FrameSkin6 from "../assets/Parceiros/Frame 61.svg"
import FrameSkin7 from "../assets/Parceiros/Frame 62.svg"
import FrameSkin8 from "../assets/Parceiros/Frame 63.svg"
import FrameSkin9 from "../assets/Parceiros/Frame 64.svg"
import FrameSkin10 from "../assets/Parceiros/Frame 65.svg"
import FrameSkin11 from "../assets/Parceiros/Frame 67.svg"
import FrameSkin12 from "../assets/Parceiros/Frame 69.svg"
import FrameSkin13 from "../assets/Parceiros/Frame 70.svg"
import FrameSkin14 from "../assets/Parceiros/Frame 71.svg"
import FrameSkin15 from "../assets/Parceiros/Frame 73.svg"
import FrameSkin16 from "../assets/Parceiros/Frame 74.svg"
import FrameSkin17 from "../assets/Parceiros/Frame 75.svg"
import FrameSkin18 from "../assets/Parceiros/Frame 78.svg"
import FrameSkin19 from "../assets/Parceiros/Frame 79.svg"
import FrameSkin20 from "../assets/Parceiros/Frame 80.svg"
import FrameSkin21 from "../assets/Parceiros/Frame 81.svg"
import FrameSkin22 from "../assets/Parceiros/Frame 82.svg"
import 'swiper/css';
import 'swiper/css/pagination';
import Video from "../../public/filme.mp4"
import { X } from "lucide-react";
import { useEffect, useState, UseState } from "react"
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core"

export default function Conteudos() {
    const [pdfTrue, setpdfTrue] = useState(false)
    const [pdfCurrent, setpdfCurrent] = useState(null)

    return (
        <div className="font-nunitoSans">
            <Scrolltop />
            <div className="md:px-20 lg:px-40 2xl:px-80">
                <Header />
                <Info Title={"Conteúdos"} />
            </div>
            <div className="bg-zinc-100 flex flex-col items-center gap-4 md:px-20 lg:px-40 2xl:px-80 py-2 pb-4">
                <h1 className=" text-center text-2xl lg:text-3xl font-bold md:text-3xl ">Filme institucional</h1>
                <video className="w-full lg:w-4/5  lg:rounded-custom" controls autoPlay>
                    <source src={Video} />
                </video>
            </div>
            <div className="flex flex-col justify-center items-center p-4 py-10 lg:px-40 2xl:px-80">
                <h1 className="text-3xl font-bold p-10">Dinâmica <span className="text-orange-500">News</span></h1>
                <div className="block sm:hidden w-auto">
                    <Swiper className="w-80"
                        spaceBetween={20}
                    >
                        <SwiperSlide>
                            <Link to={"/conteudos/pdfs"}>
                                <div className="md:flex flex-col text-center gap-2 ">
                                    <img src={Noticias} alt="" className="lg:h-96 2xl:h-Max" />
                                    <p className="underline text-xl" target="_blank" rel="noopener noreferrer">Dinâmica News - 1ª edição</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to={"/conteudos/pdfs/1"}>
                                <div className=" md:flex flex-col text-center gap-2">
                                    <img src={Noticias2} alt="" className="lg:h-96 2xl:h-Max" />
                                    <p className="underline text-xl" target="_blank" rel="noopener noreferrer" download>Dinâmica News - 2ª edição</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to={"/conteudos/pdfs/2"}>
                                <div className=" md:flex flex-col text-center gap-2">
                                    <img src={Noticias3} alt="" className="lg:h-96 2xl:h-Max" />
                                    <p className="underline text-xl" target="_blank" rel="noopener noreferrer" download>Dinâmica News - 3ª edição</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="hidden sm:flex flex-row gap-10">
                    <Link to="/conteudos/pdfs">
                        <div className=" md:flex flex-col text-center gap-2">
                            <img src={Noticias} alt="" className="" />
                            <a onClick={() => {
                                console.log("ola")
                            }} className="underline text-xl" target="_blank" rel="noopener noreferrer">Dinâmica News - 1ª edição</a>
                        </div>
                    </Link>
                    <Link to="/conteudos/pdfs/1">
                        <div className="flex flex-col text-center gap-2">
                            <img src={Noticias2} alt="" className="" />
                            <a onClick={() => { console.log("ola") }} className="underline text-xl" target="_blank" rel="noopener noreferrer">Dinâmica News - 2ª edição</a>
                        </div>
                    </Link>
                    <Link to={"/conteudos/pdfs/2"}>
                        <div className="flex flex-col text-center gap-2">
                            <img src={Noticias3} alt="" className="" />
                            <a onClick={() => { console.log("ola") }} className="underline text-xl" target="_blank" rel="noopener noreferrer">Dinâmica News - 3° edição</a>
                        </div>
                    </Link>
                </div>
            </div>
            <section className="flex flex-col gap-6 justify-center items-center pt-12 bg-zinc-100 p-4 lg:pb-32 lg:px-40 2xl:px-80">
                <img src={WhiteHome} alt="" />
                <h1 className="text-xl font-medium">Leis do <span className="text-orange-500">Cooperativismo</span></h1>
                <p className="text-center">A Cooperativa Dinâmica é regida pelas<br /><span className="font-bold">Leis nº 5.764/71 e Lei nº 12.690/12.</span></p>

                <div className="flex flex-col lg:flex-row   w-full gap-4">
                    <Link to={"/conteudos/pdfs/3"}>
                        <div className="rounded-2xl p-6 bg-white">
                            <a onClick={() => { }} className="underline cursor-pointer" target="_blank" rel="noopener noreferrer" download><span className="font-bold">Lei nº 5.764/71 -</span> Define a Política Nacional de Cooperativismo, institui o regime jurídico das sociedades cooperativas, e dá outras providências.</a>
                        </div>
                    </Link>
                    <Link to={"/conteudos/pdfs/4"}>
                        <div className="rounded-2xl p-6 bg-white">
                            <a onClick={() => { }} className="underline cursor-pointer" target="_blank" rel="noopener noreferrer" download><span className="font-bold">Lei nº 12.690/12 -</span>Lei nº 12.690/12 - Dispõe sobre a organização e o funcionamento das Cooperativas de Trabalho, direitos e deveres dos cooperados. </a>
                        </div>
                    </Link>k
                </div>
            </section>

            <section className="flex flex-col gap-5  items-center py-10 pb-20 sm:px-20 lg:px-40 2xl:px-80">
                <h1 className="font-bold text-2xl">Parceiros Locais</h1>
                <div className="flex flex-wrap gap-2 justify-center ">
                    <img src={FrameSkin} alt="" className="h-16 w-28 rounded-xl" />
                    <img src={FrameSkin2} alt="" className="h-16 w-28 rounded-xl" />
                    <img src={FrameSkin3} alt="" className="h-16 w-28 rounded-xl" />
                    <img src={FrameSkin4} alt="" className="h-16 w-28 rounded-xl" />
                    <img src={FrameSkin5} alt="" className="h-16 w-28 rounded-xl" />
                    <img src={FrameSkin6} alt="" className="h-16 w-28 rounded-xl" />
                    <img src={FrameSkin7} alt="" className="h-16 w-28 rounded-xl" />
                    <img src={FrameSkin8} alt="" className="h-16 w-28 rounded-xl" />
                    <img src={FrameSkin9} alt="" className="h-16 w-28 rounded-xl" />
                    <img src={FrameSkin10} alt="" className="h-16 w-28 rounded-xl" />
                    <img src={FrameSkin11} alt="" className="h-16 w-28 rounded-xl" />
                    <img src={FrameSkin12} alt="" className="h-16 w-28 rounded-xl" />
                    <img src={FrameSkin13} alt="" className="h-16 w-28 rounded-xl" />
                    <img src={FrameSkin14} alt="" className="h-16 w-28 rounded-xl" />
                    <img src={FrameSkin15} alt="" className="h-16 w-28 rounded-xl" />
                    <img src={FrameSkin16} alt="" className="h-16 w-28 rounded-xl" />
                    <img src={FrameSkin17} alt="" className="h-16 w-28 rounded-xl" />
                    <img src={FrameSkin18} alt="" className="h-16 w-28 rounded-xl" />
                    <img src={FrameSkin19} alt="" className="h-16 w-28 rounded-xl" />
                    <img src={FrameSkin20} alt="" className="h-16 w-28 rounded-xl" />
                    <img src={FrameSkin21} alt="" className="h-16 w-28 rounded-xl" />
                    <img src={FrameSkin22} alt="" className="h-16 w-28 rounded-xl" />
                </div>
            </section>

            <Footer />
        </div>

    )
}