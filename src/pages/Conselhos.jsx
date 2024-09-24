import Header from "../components/Header";
import Info from "../components/Info";
import Conselho from "../assets/image 2.jpg"
import Persons from "../assets/undraw_term_sheet_re_ju7s 1.svg"
import Analitc from "../assets/undraw_engineering_team_a7n2 1.svg"
import Folder from "../assets/undraw_folder_re_apfp 1.svg"
import Footer from "../components/Footer";
import Scrolltop from "../components/ScrollTop";
export default function Conselhos() {
    return (
        <div className="font-nunitoSans">
            <Scrolltop/>
            <div className="sm:px-10 md:px-20 lg:px-40">
                <Header />
                <Info Title="Conselhos" />
            </div>
            <div className="flex justify-center items-center md:p-4 ">
                <img src={Conselho} alt="conselho" className="w-full  md:rounded-2xl md:w-4/5" />
            </div>
            <section className="flex flex-col gap-8 bg-zinc-100 sm:px-20 pb-10">
                <div className="flex flex-col  justify-center p-6 pt-8 bg-zinc-100 text-zinc-800  lg:px-20 xl:flex-row sm:gap-10 lg:border-b lg:border-zinc-300 lg:pb-20">
                    <img src={Persons} alt="persons" className="hidden lg:block xl:hidden" />
                    <img src={Persons} alt="persons" className="block lg:hidden" />
                    <div className="flex flex-col">
                        <h1 className="text-start font-medium mt-4 text-2xl mb-4">Conselho Administrativo</h1>
                        <p>O <span className="font-bold">Conselho de Administração</span> da sociedade cooperativa deve atender às decisões assembleares e cumprir o caráter estratégico de sua função, por meio de decisões que auxiliem o fortalecimento dos negócios, atuando com visão empreendedora e com capacidade de fazer uma leitura mais ampla dos ambientes interno e externo da cooperativa. É fundamental ter foco nos resultados sociais e econômicos para os seus cooperados, a partir de processos de governança que garantam a sustentabilidade do empreendimento cooperativo.</p>
                    </div>
                    <img src={Persons} alt="persons" className="hidden xl:block" />
                </div>
                <div className="flex flex-col  justify-center p-6 pt-8 bg-zinc-100 text-zinc-800 lg:px-20 xl:flex-row sm:gap-10 lg:border-b lg:border-zinc-300 lg:pb-20">
                    <img src={Folder} alt="persons" className="hidden lg:block xl:hidden" />
                    <img src={Folder} alt="persons" className="block lg:hidden" />
                    <div className="flex flex-col">
                        <h1 className="text-start font-medium mt-4 text-2xl mb-4">Conselho Fiscal</h1>
                        <p>O <span className="font-bold">Conselho Fiscal</span> é um órgão representativo de fato e de direito da Assembleia Geral dos cooperados, que é responsável, dentre outras funções, por fiscalizar os atos dos administradores e verificar o cumprimento de seus deveres legais e estatutários, atuando de forma independente e imparcial na realização dos trabalhos, garantindo ao quadro social tranquilidade e segurança em relação aos processos de gestão e às tomadas de decisões.</p>
                    </div>
                </div>
                <div className="flex flex-col  justify-center p-6 pt-8 bg-zinc-100 text-zinc-800 lg:px-20 xl:flex-row sm:gap-10">
                    <img src={Analitc} alt="persons" className="hidden lg:block xl:hidden" />
                    <img src={Analitc} alt="persons" className="block lg:hidden" />
                    <div className="flex flex-col">
                        <h1 className="text-start font-medium mt-4 text-2xl mb-4">Conselhos Locais</h1>
                        <p>O <span className="font-bold">Conselho de Administração</span>é uma inovação da Dinâmica, conforme a Lei 12.690/2012, que determina a eleição de um Cooperado Coordenador.<br /> <br />O Conselho Local é composto não só
                            por 1, mas 3 Cooperados Coordenadores, em cada contrato firmado, que além da sua produtividade habitual atuarão junto
                            a Dinâmica e aos Tomadores de Serviços como elo de comunicação, fiscalização e execução dos direitos, deveres e serviços prestados.</p>
                    </div>
                    <img src={Analitc} alt="persons" className="hidden xl:block" />
                </div>
            </section>
            <Footer/>
        </div>
    )
}