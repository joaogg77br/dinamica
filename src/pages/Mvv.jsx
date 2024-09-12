import { Gem } from "lucide-react";
import Header from "../components/Header";
import Info from "../components/Info";
import Footer from "../components/Footer"
import Interative from "../assets/interactive@2x.svg"
import Eye from "../assets/eye.svg"

export default function Mvv() {
    return (
        <>
            <div className="sm:px-10 md:px-20">
                <Header />
                <Info Title={"Missão, Visão e Ação"} text={""} />
            </div>
                <section className=" w-full p-10 lg:p-20  grid grid-cols-1  gap-10 bg-zinc-100">
                    <div className="bg-orange-500 text-white rounded-2xl flex flex-col sm:flex-row sm:items-center lg:justify-center lg:p-10">
                        <img src={Interative} alt="" className="p-4 flex justify-center max-w-40 items-center rounded-2xl bg-white m-10" />
                        <div className="flex  gap-4 flex-col p-10 text-start ">
                            <h1 className="font-medium text-3xl">Missão</h1>
                            <p className="">A Dinâmica é uma organização que, norteada pela filosofia cooperativista, busca: <br />
                                - Agregar profissionais da área Serviços Gerais e Administrativos para defesa do exercício liberal, ético e qualitativo de sua profissão com condições adequadas de trabalho e justa remuneração, proporcionando serviços de qualidade com responsabilidade e transparência na evolução operacional e pessoal do seu quadro de associados.</p>
                        </div>
                    </div>
                    <div className="bg-green-900 text-white rounded-2xl flex flex-col sm:flex-row sm:items-center lg:justify-center lg:p-10">
                        <img src={Eye} alt="" className="p-4 flex justify-center max-w-40 items-center rounded-2xl bg-white m-10" />
                        <div className="flex  gap-4 flex-col p-10 text-start ">
                            <h1 className="font-medium text-3xl">Visão</h1>
                            <p className="">Ser a Cooperativa de Trabalho e Serviços Gerais e Administrativos e afins, referência nacional, buscando continua e progressivamente:</p>
                                <br />
                            <p>- Alcançar a satisfação dos cooperados, tomadores de serviços e população;
                                <br />- Contribuir com a qualidade de vida e o bem-estar da comunidade a quem prestamos nossos serviços;
                                <br />- Manter colaboradores qualificados e comprometidos;
                                <br />- Comprometer-se com as questões sociais e ambientais.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white text-black font-medium rounded-2xl flex flex-col sm:flex-row sm:items-center lg:justify-center lg:p-10">
                         <div className="p-4 bg-zinc-200 flex justify-center max-w-40 items-center rounded-2xl bg-white m-10 font-black">
                         <Gem color="black" className="" size={100}/>
                         </div>
                        <div className="flex gap-4 flex-col p-10 text-start ">
                            <h1 className="font-medium text-3xl">Valores</h1>
                            <p className="">A Dinâmica é uma organização que, norteada pela filosofia cooperativista, busca: <br />
                                - Agregar profissionais da área Serviços Gerais e Administrativos para defesa do exercício liberal, ético e qualitativo de sua profissão com condições adequadas de trabalho e justa remuneração, proporcionando serviços de qualidade com responsabilidade e transparência na evolução operacional e pessoal do seu quadro de associados.</p>
                        </div>
                    </div>

                </section>
            <Footer />
        </>
    )
}