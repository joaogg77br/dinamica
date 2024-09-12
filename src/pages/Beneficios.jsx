import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info"


export default function Beneficios(){
    return(
        <>
        <div className="sm:px-10 lg:px-20">
            <Header/>
            <Info Title={"Benéficios exclusivos da Dinâmica"}/>
        </div>
            <section className="flex flex-col gap-8 mt-10 p-4 bg-zinc-100">
            <div className="flex flex-row gap-4 border-b-2 border-opacity-25 border-zinc-400  w-full p-6 font-medium">
                <img src="" alt="" />
                <p>Cursos de capacitação e profissionalizantes</p>
            </div>
            <div className="flex flex-row gap-4 border-b-2 border-opacity-25 border-zinc-400  w-full p-6 font-medium">
                <img src="" alt="" />
                <p>Cursos de capacitação e profissionalizantes</p>
            </div>
            </section>
            <Footer/>
        </>
    )
}