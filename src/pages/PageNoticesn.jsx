import Header from "../components/Header";
import Info from "../components/Info";
import Scrolltop from "../components/ScrollTop";
import secondImage from "../assets/Banners/MATÉRIA-2.jpg"
import Footer from "../components/Footer";


export default function PageNoticessA() {
    return (
        <>
            <div className="md:px-20 lg:px-40">
                <Scrolltop />
                <Header />
                <Info Title={"COOPERADOS REALIZAM TREINAMENTO E CAPACITAÇÃO DAS NR 10 E NR 35 "} />
            </div>
            <main className="md:px-20 lg:px-40 font-nunitoSans py-10">
                <img src={secondImage} alt="" className="w-full md:w-3/4 h-auto mx-auto md:rounded-custom" />
                <div className="w-full p-4 pt-10  md:px-40 md:items-center md:justify-center flex-col gap-4">
                    <p className="text-xl">Na última sexta-feira (10), a Dinâmica Cooperativa em
                        parceria com a Empresa @threynnare realizou mais
                        uma edição do treinamento e capacitação das NR 10
                        e NR 35, com os cooperados eletricistas atuantes em
                        São Miguel dos Campos/AL.
                        <br/><br/>
                        O curso ministrado pelo Técnico em Segurança no
                        Trabalho e Bombeiro Civil, Sr. Paulo da Silva, é dividido
                        em aulas teóricas e práticas, regado a muito
                        conhecimento e dinamismo.
                        <br/><br/>
                        Com a Dinâmica não poderia ser diferente. Os
                        cooperados eletricistas ficaram bastante satisfeitos
                        com a capacitação, que trará mais confiança e
                        segurança na execução das suas atividades.
                        <br /><br/>
                        O Presidente, Eustáquio Ângelo, também marcou
                        presença, e na oportunidade conscientizou os participantes da importância de se especializar
                        e usar de forma adequada os uniformes e Equipamentos de Proteção Individual - EPI’s, para
                        desempenhar uma boa prestação de serviços.
                        <br/><br/>
                        Os cooperados também receberam, gratuitamente, uniformes, EPI’s e certificação por 100%
                        de aproveitamento no curso. </p>
                </div>
            </main>
            <Footer />
        </>
    )
}