import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";


export default function Atuacao() {
    return (
        <>
                <Header/>
            <div className="sm:px-10 px-20">
                <Info Title={"Onde atuamos"}/>
                <div>
                    <img src="" alt="" />
                    <p>A Dinâmica possui mais de 6 mil cooperados, e presta seus serviços através de seus cooperados em empresas públicas e privadas, presentes nos estados de Alagoas, Pernambuco e Paraíba.</p>
                </div>
            </div>
                <Footer/>
        </>
    )
}