import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import Adesao from "../assets/undraw_sharing_knowledge_03vp 1.svg"
import Gestao from "../assets/undraw_voting_nvu7 1.svg"
import Pizza from "../assets/undraw_pie_chart_re_bgs8 1.svg"
import Card from "../assets/undraw_online_payments_re_y8f2 1.svg"
import Education from "../assets/undraw_education_f8ru 1.svg"
import People from "../assets/undraw_people_re_8spw 1.svg"
import Community from "../assets/undraw_community_re_cyrm 1.svg"

export default function Principios() {
    return (
        <>
            <div>
                <Header />
                <Info Title={"7 Príncipios do Cooperativismo"} />
            </div>
            <section className="bg-zinc-100 p-4">
                <div className="flex flex-col text-xl font-medium">
                    <div className="relative">
                        <div className="flex justify-center p-2 bg-orange-500 rounded-t-2xl w-16  text-white">1</div>
                        <div className="flex rounded-tr-2xl rounded-bl-2xl bg-white">
                            <img src={Adesao} alt="" className="w-3/4" />
                            <p className="text-2xl p-8">Adesão Voluntária e Livre</p>
                        </div>
                    </div>
                    <div className="flex justify-end flex-col items-end">
                        <div className="flex justify-center p-4 bg-orange-500 w-16 text-white font-medium">2</div>
                        <div className="flex w-full rounded-br-2xl rounded-tl-2xl p-4  bg-white">
                            <img src={Gestao} alt="" className="w-3/4" />
                            <p className="text-2xl p-8">Gestão Democrática e Livre</p>
                        </div>
                    </div>
                    <div className="flex justify-end flex-col items-start">
                        <div className="flex justify-center p-4 bg-orange-500 w-16 text-white">3</div>
                        <div className="flex text-2xl w-full rounded-tr-2xl rounded-bl-2xl p-4 bg-white">
                            <img src={Pizza} alt="" className="w-3/4"/>
                            <p className="text-2xl p-8">Participação Econômica dos Cooperados</p>
                        </div>
                    </div>
                    <div className="flex justify-end flex-col items-end">
                        <div className="flex justify-center p-4 bg-orange-500 w-16 text-white">4</div>
                        <div className="flex  text-2xl w-full rounded-tr-2xl rounded-bl-2xl p-4 bg-white">
                            <img src={Card} alt="" className="w-3/4"/>
                            <p className="text-2xl p-8">Autonomia e Independência</p>
                        </div>
                    </div>
                    <div className="flex justify-end flex-col items-start">
                        <div className="flex justify-center p-4 bg-orange-500 w-16 text-white">5</div>
                        <div className="flex w-full rounded-tr-2xl rounded-bl-2xl p-4 bg-white">
                            <img src={Education} alt=""  className="w-3/4"/>
                            <p className="text-2xl p-8">Educação, Formação e Informação</p>
                        </div>
                    </div>
                    <div className="flex justify-end flex-col items-end">
                        <div className="flex justify-center p-4 bg-orange-500 w-16 text-white">6</div>
                        <div className="flex w-full rounded-tr-2xl rounded-bl-2xl p-4 bg-white">
                            <img src={People} alt=""  className="3/4"/>
                            <p className="text-2xl p-8">Intercoo-peração</p>
                        </div>
                    </div>
                    <div className="flex justify-end flex-col items-start">
                        <div className="flex justify-center p-4 bg-orange-500 w-16 text-white">7</div>
                        <div className="flex w-full rounded-tr-2xl rounded-bl-2xl p-4 bg-white">
                            <img src={Community} alt="" className="w-3/4"/>
                            <p className="text-2xl p-8">Interesse Pela Comunidade</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}