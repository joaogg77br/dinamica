import Header from "../components/Header";
import Info from "../components/Info";
import Conselho from "../assets/image 2.jpg"
import Persons from "../assets/Nova pasta/Project-planning.svg"
import Analitc from "../assets/Nova pasta/Video-call.svg"
import Folder from "../assets/Nova pasta/Meeting (1).svg"
import Footer from "../components/Footer";
import Scrolltop from "../components/ScrollTop";
export default function Conselhos() {
    return (
        <div className="font-nunitoSans">
            <Scrolltop/>
            <div className="sm:px-10 md:px-20 lg:px-40 2xl:px-80">
                <Header />
                <Info Title="Conselhos" />
            </div>
            <section className="flex flex-col gap-8 bg-zinc-100 sm:px-40 2xl:px-80 py-10 ">
                <div className="flex flex-col  justify-center  px-6 lg:px-0 pt-8 bg-zinc-100 text-zinc-800 xl:flex-row sm:gap-10 lg:border-b lg:border-zinc-300 lg:pb-20">
                    <img src={Persons} alt="persons" className="hidden lg:block xl:hidden xl:h-60" />
                    <img src={Persons} alt="persons" className="block lg:hidden xl:h-52" />
                    <div className="flex flex-col">
                        <h1 className="text-start font-bold mt-4 text-2xl mb-4">Conselho Administrativo</h1>
                        <p>O <span className="font-bold">Conselho de Administração</span> da sociedade cooperativa deve atender às decisões assembleares e cumprir o caráter estratégico de sua função, por meio de decisões que auxiliem o fortalecimento dos negócios, atuando com visão empreendedora e com capacidade de fazer uma leitura mais ampla dos ambientes interno e externo da cooperativa. É fundamental ter foco nos resultados sociais e econômicos para os seus cooperados, a partir de processos de governança que garantam a sustentabilidade do empreendimento cooperativo.</p>
                    </div>
                    <img src={Persons} alt="persons" className="hidden xl:block xl:h-52" />
                </div>
                <div className="flex flex-col  justify-center px-6 lg:px-0 pt-8 bg-zinc-100 text-zinc-800 xl:flex-row sm:gap-10 lg:border-b lg:border-zinc-300 lg:pb-20">
                    <img src={Folder} alt="persons" className="block  xl:h-52" />
                    <div className="flex flex-col">
                        <h1 className="text-start font-bold mt-4 text-2xl mb-4">Conselho Fiscal</h1>
                        <p>O <span className="font-bold">Conselho Fiscal</span> é um órgão representativo de fato e de direito da Assembleia Geral dos cooperados, que é responsável, dentre outras funções, por fiscalizar os atos dos administradores e verificar o cumprimento de seus deveres legais e estatutários, atuando de forma independente e imparcial na realização dos trabalhos, garantindo ao quadro social tranquilidade e segurança em relação aos processos de gestão e às tomadas de decisões.</p>
                    </div>
                    <img src={Folder} alt="persons" className="hidden  xl:h-52" />
                </div>
                <div className="flex flex-col  justify-center  px-6 lg:px-0 pt-8 bg-zinc-100 text-zinc-800 xl:flex-row sm:gap-10 lg:border-b lg:border-zinc-300 lg:pb-20">
                    <img src={Analitc} alt="persons" className="hidden lg:block xl:hidden xl:h-60" />
                    <img src={Analitc} alt="persons" className="block lg:hidden xl:h-52" />
                    <div className="flex flex-col">
                        <h1 className="text-start font-bold mt-4 text-2xl mb-4">Conselho Local</h1>
                        <p>O <span className="font-bold">Conselho de Local</span><br /><br /></p>
                    </div>
                    <img src={Analitc} alt="persons" className="hidden xl:block xl:h-52" />
                </div>
            </section>
            <Footer/>
        </div>
    )
}