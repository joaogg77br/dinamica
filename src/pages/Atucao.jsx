import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import manual from "../assets/brazil.svg"

export default function Atuacao() {
    return (
        <div className="font-nunitoSans">
            <div className="sm:px-10 lg:px-40">
                <Header/>
                <Info Title={"Onde atuamos"}/>
            </div>
                <div className="flex flex-col items-center flex-wrap-reverse w-full  p-2 lg:p-16 bg-zinc-100">
                    <p className=" text-center lg:text-md p-4 lg:px-40">A Dinâmica possui mais <span className="font-bold">de 6 mil cooperados</span>, e presta seus serviços através de seus cooperados em empresas públicas e privadas,presentes nos estados de <span className="font-bold">Alagoas, Pernambuco e Paraíba.</span></p>
                    <img className=" lg:w-4/5 p-4" src={manual} alt="" />
                </div>
                <Footer/>
        </div>
    )
}