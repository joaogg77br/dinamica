import Header from "../components/Header";
import Footer from "../components/Footer";
import Info from "../components/Info";
import WhiteHome from "../assets/Frame 55.svg"
import Pdf1 from "../assets/Pdfs/LEI 5.764.pdf"
import Pdf2 from "../assets/Pdfs/Lei 12.690-12.pdf"
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







import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Conteudos() {
    return (
        <div className="font-nunitoSans">
            <Scrolltop/>
            <div className="md:px-20 lg:px-40">
                <Header />
                <Info Title={"Conteúdos"} />
            </div>
            <div className="flex flex-col justify-start items-center w-full bg-zinc-100 gap-10 p-20 lg:px-44 lg:text-2xl lg:flex-row">
                <h1 className=" text-cente text-2xl lg:text-3xl font-bold">Filme institucional</h1>
            <iframe className="lg:w-2/4 h-60" src="https://www.youtube.com/embed/LsEf4r_ocS8?si=QTcdzgN5R1I5MgFS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="flex flex-col justify-center p-4 ">
                <h1 className="text-xl font-medium">Dinâmica <span className="text-orange-500">News</span></h1>
                <div className="flex">
                        <div>
                            <img src="" alt="" />
                        </div>
                </div>
            </div>
            <section className="flex flex-col gap-6 justify-center items-center pt-12 bg-zinc-100 p-4 lg:pb-32">
                <img src={WhiteHome} alt="" />
                <h1 className="text-xl font-medium">Leis do <span className="text-orange-500">Cooperativismo</span></h1>
                <p className="text-center">A Cooperativa Dinâmica é regida pelas<br /><span className="font-bold">Leis nº 5.764/71 e Lei nº 12.690/12.</span></p>

                <div className="flex flex-col lg:flex-row md:px-24 lg:px-40 gap-4">
                    <div className="rounded-2xl p-6 bg-white">
                            <a href={Pdf1} className="underline" target="_blank" rel="noopener noreferrer" download><span className="font-bold">Lei nº 5.764/71 -</span> Define a Política Nacional de Cooperativismo, institui o regime jurídico das sociedades cooperativas, e dá outras providências.</a>
                    </div>
                        <div className="rounded-2xl p-6 bg-white">
                            <a href={Pdf2} className="underline" target="_blank" rel="noopener noreferrer" download><span className="font-bold">Lei nº 12.690/12 -</span>Lei nº 12.690/12 - Dispõe sobre a organização e o funcionamento das Cooperativas de Trabalho, direitos e deveres dos cooperados. </a>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-5  items-center py-10 pb-20 sm:px-20 lg:px-40">
                <h1 className="font-bold text-2xl">Parceiros Locais</h1> 
                <div className="flex flex-wrap p-2 gap-2 justify-center">
                    <img src={FrameSkin} alt="" className="h-16 w-28 rounded-xl"/>
                    <img src={FrameSkin2} alt="" className="h-16 w-28 rounded-xl"/>
                    <img src={FrameSkin3} alt="" className="h-16 w-28 rounded-xl"/>
                    <img src={FrameSkin4} alt="" className="h-16 w-28 rounded-xl"/>
                    <img src={FrameSkin5} alt="" className="h-16 w-28 rounded-xl"/>
                    <img src={FrameSkin6} alt="" className="h-16 w-28 rounded-xl"/>
                    <img src={FrameSkin7} alt="" className="h-16 w-28 rounded-xl"/>
                    <img src={FrameSkin8} alt="" className="h-16 w-28 rounded-xl"/>
                    <img src={FrameSkin9} alt="" className="h-16 w-28 rounded-xl"/>
                    <img src={FrameSkin10} alt="" className="h-16 w-28 rounded-xl"/>
                    <img src={FrameSkin11} alt="" className="h-16 w-28 rounded-xl"/>
                    <img src={FrameSkin12} alt="" className="h-16 w-28 rounded-xl"/>
                    <img src={FrameSkin13} alt="" className="h-16 w-28 rounded-xl"/>
                    <img src={FrameSkin14} alt="" className="h-16 w-28 rounded-xl"/>
                    <img src={FrameSkin15} alt="" className="h-16 w-28 rounded-xl"/>
                    <img src={FrameSkin16} alt="" className="h-16 w-28 rounded-xl"/>
                    <img src={FrameSkin17} alt="" className="h-16 w-28 rounded-xl"/>
                    <img src={FrameSkin18} alt="" className="h-16 w-28 rounded-xl"/>
                    <img src={FrameSkin19} alt="" className="h-16 w-28 rounded-xl"/>
                    <img src={FrameSkin20} alt="" className="h-16 w-28 rounded-xl"/>
                    <img src={FrameSkin21} alt="" className="h-16 w-28 rounded-xl"/>
                    <img src={FrameSkin22} alt="" className="h-16 w-28 rounded-xl"/>
                </div>
            </section>

            <Footer />
        </div>
    )
}