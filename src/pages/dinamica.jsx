import Explain from "../components/Explain";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import reuniao from "../assets/Snapinsta 1(1).png"

export default function Dinamica() {
    return (
        <div className="sm:px-10 md:px-20">
            <Header />
            <Info Title={"A Dinâmica"} text={"Cooperativa de trabalho, serviços gerais e administrativos."} />
            <section className="p-8 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center lg:flex-row gap-4 bg-zinc-50 rounded-2xl p-4">
                    <img src={reuniao} alt="" />

                    <div className="flex flex-col gap-4">
                        <p className="mt-4">A Dinâmica nasce em 2021 com o objetivo de ser uma cooperativa que busca uma melhor qualidade
                            de vida para seus cooperados e toda sociedade onde tem contrato formado, como também uma facilitadora para os tomadores que buscam economicidade, legalidade e respeito aos cooperados
                            e a gestão</p>
                        <p className="">
                            Nosso valor também consiste na ideia de que a cooperação fortalece os laços entre as pessoas e permite que alcancemos resultados significativos que beneficiam a comunidade como um todo, pois
                            acreditamos que cooperar torna o mundo mais justo. Como uma união de esforços em busca
                            de um bem maior.
                        </p>
                        <p>
                            Para isto, foi desenvolvido um sistema único comprometido em fornecer tecnologia de ponta e uma plataforma abrangente que aprimore a gestão e intermediação de mão de obra, a fim de trazer agilidade e segurança para nossos sócios cooperados e parceiros.
                        </p>
                    </div>

                </div>
            </section>
            <Footer />

        </div>
    )
}