import Dimond from "../assets/Frame 27.svg"
import Header from "../components/Header";
import Info from "../components/Info";
import Footer from "../components/Footer"
import Interative from "../assets/Point.svg"
import Eye from "../assets/eye.svg"
import { Gem } from "lucide-react";
import Scrolltop from "../components/ScrollTop";

export default function Mvv() {
    return (
        <div className="font-nunitoSans">
            <Scrolltop />
            <div className="sm:px-10 md:px-40">
                <Header />
                <Info Title={"Missão, Visão e Valores"} text={""} />
            </div>
            <section className=" w-full p-4 lg:px-44  grid grid-cols-1  gap-10 bg-cinza pb-14 md:pt-20">
                <div className="p-10 bg-laranja text-white rounded-2xl flex flex-col sm:flex-row sm:items-center gap-10 lg:justify-start lg:p-10">
                    <img src={Interative} alt="" className=" flex justify-center max-w-40 items-center rounded-2xl  " />
                    <div className="flex  gap-4 flex-col text-start ">
                        <h1 className="font-bold text-3xl">Missão</h1>
                        <p className="">A Dinâmica é uma organização que, norteada pela filosofia cooperativista, busca: <br />
                            - Agregar profissionais da área Serviços Gerais e Administrativos para defesa do exercício liberal, ético e qualitativo de sua profissão com condições adequadas de trabalho e justa remuneração, proporcionando serviços de qualidade com responsabilidade e transparência na evolução operacional e pessoal do seu quadro de associados.</p>
                    </div>
                </div>

                <div className="p-10 bg-verde text-white rounded-2xl flex flex-col sm:flex-row sm:items-center gap-10 lg:justify-start lg:p-10">
                    <img src={Eye} alt="" className=" flex justify-center max-w-40 items-center rounded-2xl  " />
                    <div className="flex  gap-4 flex-col text-start ">
                        <h1 className="font-bold text-3xl">Visão</h1>
                        <p>Ser a Cooperativa de Trabalho e Serviços Gerais e Administrativos e afins, referência nacional, buscando continua e progressivamente</p>
                        <p>- Alcançar a satisfação dos cooperados, tomadores de serviços e população;
                          <br />  - Contribuir com a qualidade de vida e o bem-estar da comunidade a quem prestamos nossos serviços;
                          <br />  - Manter colaboradores qualificados e comprometidos;
                        <br /> - Comprometer-se com as questões sociais e ambientais.
                        </p>
                    </div>
                </div>


                <div className="p-10 bg-white text-zinc-800 rounded-2xl flex flex-col gap-10 sm:flex-row sm:items-center lg:justify-start lg:p-10">
                    <img src={Dimond} alt="" className="flex justify-center max-w-40 items-center rounded-2xl" />
                    <div className="flex  gap-4 flex-col text-start ">
                        <h1 className="font-bold text-3xl">Valores</h1>
                        <div className="w-4/5">
                            <p>Qualidade de vida e o bem-estar comum; Atuar com responsabilidade social, mantendo ética, integridade, e a valorização do ser humano; Efetuar ações íntegras e profissionais de acordo com as solicitações e orientações de nossos parceiros e colaboradores; Trabalhar com transparência dos serviços prestados.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}