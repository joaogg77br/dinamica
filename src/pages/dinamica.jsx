import Explain from "../components/Explain";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import reuniao from "../assets/sede.png"
import Scrolltop from "../components/ScrollTop";

export default function Dinamica() {
    return (
        <div className="font-nunitoSans">
            <Scrolltop/>
            <div className="sm:px-10 md:px-20 lg:px-40 2xl:px-80">
                <Header />
                <Info Title={"A Dinâmica"} text={"Cooperativa de trabalho, serviços gerais e administrativos."} />
            </div>
            <section className=" flex justify-center items-center">
                <div className="flex flex-col justify-center lg:py-10 sm:items-center lg:items-start lg:flex-row gap-4 lg:p-10  lg:px-40 2xl:px-80 w-full sm:pt-10 md:pb-10">
                    <img src={reuniao} alt="" className="sm:h-80 w-full sm:w-auto sm:rounded-custom" />
                    <div className="flex flex-col gap-4 lg:ml-10  sm:text-center lg:text-start justify-center items-center md:px-40 lg:px-0 px-7 pb-8">
                        <p className="mt-4">Constituída em 2021, a Dinâmica Cooperativa de Trabalho foi fundada por 9 profissionais
                            de diferentes áreas de atuação, que apesar da severa crise econômica mundial causada
                            pelo coronavírus, uniram esforços para edificar esse projeto em busca de oportunidades
                            e inserção no Mercado de Trabalho.
                        </p>
                        <p className="">
                            Com natureza associativa, a Dinâmica não possui vínculo empregatício ou subordinação.
                            Ao integrar-se ao seu quadro social, o profissional torna-se ASSOCIADO, podendo opinar,
                            participar e decidir sobre qualquer melhoria a ser implementada ao aperfeiçoamento e
                            condições de trabalho oferecidas na prestação de serviços da Cooperativa.
                        </p>
                        <p>
                            Para fazer parte da Dinâmica, além da manifestação espontânea da vontade de se associar, o profissional precisa estar legalmente capacitado a exercer as atividades que precisa desempenhar. Seus direitos e deveres estão estabelecidos na LEI 12.690/2012, que dispõe a organização e funcionamento das Cooperativas de Trabalho.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    )
}