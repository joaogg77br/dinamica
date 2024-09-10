import Header from "../components/Header";
import Info from "../components/Info";
import Footer from "../components/Footer"
import Interative from "../assets/interactive@2x.svg"

export default function Mvv() {
    return (
        <>
            <div className="sm:px-10 md:px-20">
                <Header />

                <Info Title={"Missão, Visão e Ação"} text={""} />
                <section className="grid grid-cols-1 m-10">
                    <div className="bg-orange-500 text-white rounded-2xl flex flex-col sm:flex-row sm:items-center lg:justify-center lg:p-10">
                        <img src={Interative} alt="" className="p-4 flex justify-center items-center rounded-2xl bg-white m-10" />
                        <div className="flex  gap-4 flex-col p-10 text-start ">
                            <h1 className="font-medium text-3xl">Missão</h1>
                            <p className="">A Dinâmica é uma organização que, norteada pela filosofia cooperativista, busca: <br />
                                - Agregar profissionais da área Serviços Gerais e Administrativos para defesa do exercício liberal, ético e qualitativo de sua profissão com condições adequadas de trabalho e justa remuneração, proporcionando serviços de qualidade com responsabilidade e transparência na evolução operacional e pessoal do seu quadro de associados.</p>
                        </div>
                    </div>

                </section>
            </div>
            <Footer />
        </>
    )
}