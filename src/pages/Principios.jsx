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
import Scrolltop from "../components/ScrollTop";

export default function Principios() {
    return (
        <div className="font-nunitoSans">
            <Scrolltop/>
            <div className="sm:px-10 lg:px-40 2xl:px-80">
                <Header />
                <Info Title={"7 Príncipios do Cooperativismo"} />
            </div>
            <div className="flex flex-col p-2 bg-cinza sm:pt-10 pb-10 xl:text-2xl py-10 text-zinc-800">
                <section className="flex flex-col px-5 lg:px-40 2xl:px-80 sm:flex-row sm:h-52">
                    <div className="sm:hidden ">
                        <div className="bg-laranja h-10 w-10 p-2 flex  rounded-t-xl justify-center items-center text-white">1</div>
                    </div>
                    <div className="w-full flex flex-col sm:w-1/2">
                        <div className="flex justify-center items-center p-2 bg-rounded-tl-xl sm:h-52  bg-white  rounded-tr-3xl rounded-bl-3xl sm:rounded-tr-none sm:rounded-tl-3xl ">
                            <img src={Adesao} alt="" className="w-1/2 2xl:h-full" />
                            <p className="font-bold">Adesão Voluntária e Livre</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex sm:w-1/2">
                        <div className="bg-laranja h-10 w-10 p-2 ronded-t-xl rounded-r-xl flex justify-center items-center text-white">1</div>
                    </div>
                </section>
                <section className="flex flex-col px-5 lg:px-40 2xl:px-80 sm:flex-row">
                    <div className="sm:w-1/2 flex items-start justify-end">
                        <div className="bg-laranja h-10 w-10 p-2  flex justify-center items-center sm:rounded-bl-xl text-white">2</div>
                    </div>
                    <div className="w-full flex flex-col bg-white sm:w-1/2 rounded-tl-3xl  rounded-br-3xl sm:rounded-tl-none sm:rounded-br-2xl sm:rounded-tr-3xl">
                        <div className="flex justify-center items-center p-2 gap-4 sm:h-52">
                            <img src={Gestao} alt="" className="w-1/2 2xl:h-full" />
                            <p className="font-bold">Gestão Democrática e Livre</p>
                        </div>
                    </div>
                    <div className="hidden sm:w-1/2">
                        <div className="bg-laranja h-10 w-10 p-2 ronded-t-xl rounded-r-xl flex justify-center items-center text-white">1</div>
                    </div>
                </section>
                <section className="flex flex-col px-5 lg:px-40 2xl:px-80 sm:flex-row">
                    <div className="sm:hidden">
                        <div className="bg-laranja h-10 w-10 p-2   flex justify-center items-center text-white">3</div>
                    </div>
                    <div className="w-full flex flex-col bg-white sm:w-1/2 rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl sm:rounded-tr-none">
                        <div className="flex justify-center items-center p-2 gap-4 sm:h-52">
                            <img src={Pizza} alt="" className="w-1/2 2xl:h-full" />
                            <p className="font-bold">Participação Econômica dos Cooperados</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex sm:w-1/2">
                        <div className="bg-laranja h-10 w-10 p-2  rounded-br-xl flex justify-center items-center text-white">3</div>
                    </div>
                </section>
                <section className="flex flex-col px-5 lg:px-40 2xl:px-80 sm:flex-row">
                    <div className=" flex justify-end sm:w-1/2  items-end sm:justify-end sm:items-start ">
                        <div className="bg-laranja h-10 w-10 p-2 flex justify-center sm:rounded-bl-xl items-end text-white">4</div>
                    </div>
                    <div className="w-full flex flex-col bg-white sm:w-1/2  rounded-tl-3xl sm:rounded-tl-none  rounded-br-3xl sm:rounded-tr-3xl sm:rounded-br-3xl">
                        <div className="flex justify-center items-center p-2 gap-4 sm:h-52">
                            <img src={Card} alt="" className="w-1/2 2xl:h-full" />
                            <p className="font-bold">Autonomia e Independência</p>
                        </div>
                    </div>
                    <div className="hidden">
                        <div className="bg-laranja h-10 w-10 p-2 ronded-t-xl rounded-r-xl flex justify-center items-center text-white">3</div>
                    </div>
                </section>
                <section className="flex flex-col px-5 lg:px-40 2xl:px-80 sm:flex-row">
                    <div className="sm:hidden flex">
                        <div className="bg-laranja h-10 w-10 p-2 flex justify-center items-center text-white">5</div>
                    </div>
                    <div className="w-full flex flex-col bg-white sm:w-1/2 rounded-tr-3xl sm:rounded-tr-none rounded-bl-3xl sm:rounded-tl-3xl sm:rounded-bl-3xl">
                        <div className="flex justify-center items-center p-2 sm:h-52 ">
                            <img src={Education} alt="" className="w-1/2 2xl:h-full" />
                            <p className="font-bold">Educação, Formação e Informação</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex sm:w-1/2">
                        <div className="bg-laranja h-10 w-10 p-2  rounded-br-xl flex justify-center items-center text-white">5</div>
                    </div>
                </section>
                <section className="flex flex-col px-5 lg:px-40 2xl:px-80 sm:flex-row">
                    <div className=" flex justify-end sm:justify-end sm:w-1/2">
                        <div className="bg-laranja h-10 w-10 p-2  sm:rounded-bl-xl flex justify-center items-center text-white">6</div>
                    </div>
                    <div className="w-full flex flex-col bg-white sm:w-1/2  rounded-tl-3xl  sm:rounded-tl-none rounded-br-3xl sm:rounded-tr-3xl sm:rounded-br-3xl">
                        <div className="flex justify-center items-center p-2 gap-4 sm:h-52">
                            <img src={People} alt="" className="w-1/2 2xl:h-full" />
                            <p className="font-bold">Intercooperação</p>
                        </div>
                    </div>
                    <div className="hidden sm:w-1/2">
                        <div className="bg-laranja h-10 w-10 p-2 ronded-t-xl rounded-r-xl flex justify-center items-center text-white">1</div>
                    </div>
                </section>
                <section className="flex flex-col px-5 lg:px-40 2xl:px-80 sm:flex-row">
                    <div className="sm:hidden">
                        <div className="bg-laranja h-10 w-10 p-2  flex justify-center items-center text-white">7</div>
                    </div>
                    <div className="w-full flex flex-col bg-white sm:w-1/2 rounded-b-3xl rounded-tr-3xl sm:rounded-tr-none sm:rounded-bl-3xl sm:rounded-tl-3xl">
                        <div className="flex justify-center items-center p-2 gap-4  sm:h-52">
                            <img src={Community} alt="" className="w-1/2 2xl:h-full" />
                            <p className="font-bold">Interesse Pela Comunidade</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex sm:w-1/2">
                        <div className="bg-laranja h-10 w-10 p-2  rounded-br-xl flex justify-center items-center text-white">7</div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}