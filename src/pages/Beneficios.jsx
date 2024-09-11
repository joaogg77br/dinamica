import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info"


export default function Beneficios(){
    return(
        <>
        <div>
            <Header/>
            <Info Title={"Benéficios exclusivos da Dinâmica"}/>
            <section className="flex mt-10 p-4">
            <div className="flex gap-4 border-b border-zinc-400 p-4 ">
                <img src="" alt="" />
                <p>Cursos de capacitação e profissionalizantes</p>
            </div>
            </section>
            <Footer/>
        </div>
        </>
    )
}