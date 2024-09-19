import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import manual from "../assets/map.svg"

export default function Atuacao() {
    return (
        <>
            <div className="sm:px-10 lg:px-40">
                <Header/>
                <Info Title={"Onde atuamos"}/>
            </div>
                <div className="flex flex-col flex-wrap-reverse w-full gap-4 p-16 bg-zinc-100">
                    <p className=" text-center lg:text-md">A Dinâmica possui mais <span className="font-bold">de 6 mil cooperados</span>, e presta seus serviços através de seus cooperados em empresas públicas e privadas, <br></br>presentes nos estados de Alagoas, Pernambuco e Paraíba.</p>
                    <img className="lg:h-96 lg:96" src={manual} alt="" />
                </div>
                <Footer/>
        </>
    )
}