import Header from "../components/Header";
import Footer from "../components/Footer";
import Info from "../components/Info";
import WhiteHome from "../assets/Frame 55.svg"
import Scrolltop from "../components/ScrollTop";


export default function Conteudos() {
    return (
        <div className="font-nunitoSans">
            <Scrolltop/>
            <div className="sm:px-10 lg:px-20">
                <Header />
                <Info Title={"Conteúdos"} />
            </div>
            <div className="flex flex-col justify-center items-center w-full bg-zinc-100 gap-4 p-20 lg:text-2xl lg:flex-row">
                <h1 className=" text-center text-2xl font-bold">Filme institucional</h1>
            <iframe className="lg:w-2/4 h-60" src="https://www.youtube.com/embed/LsEf4r_ocS8?si=QTcdzgN5R1I5MgFS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="flex justify-center p-4">
                <h1 className="text-xl font-medium">Dinâmica <span className="text-orange-500">News</span></h1>
            </div>
            <section className="flex flex-col gap-6 justify-center items-center pt-12 bg-zinc-100 p-4 lg:pb-32">
                <img src={WhiteHome} alt="" />
                <h1 className="text-xl font-medium">Leis do <span className="text-orange-500">Cooperativismo</span></h1>
                <p className="text-center">A Cooperativa Dinâmica é regida pelas<br /><span className="font-bold">Leis nº 5.764/71 e Lei nº 12.690/12.</span></p>

                <div className="flex flex-col lg:flex-row lg:px-24 gap-4">
                    <div className="rounded-2xl p-6 bg-white">
                        <p className="underline"><span className="font-bold">Lei nº 5.764/71 - </span>Define a Política Nacional de Cooperativismo, institui o regime jurídico das sociedades cooperativas, e dá outras providências.</p>
                    </div>
                    <div className="rounded-2xl p-6 bg-white">
                        <p className="underline"><span className="font-bold">Lei nº 5.764/71 -</span> Define a Política Nacional de Cooperativismo, institui o regime jurídico das sociedades cooperativas, e dá outras providências.</p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-5  items-center py-10">
                <h1 className="font-bold text-2xl">Parceiros Locais</h1> 
                <div className="flex flex-wrap p-2 gap-2 justify-center">
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                    <img src="" alt="" className="h-16 w-28 rounded-xl"/>
                </div>
            </section>

            <Footer />
        </div>
    )
}