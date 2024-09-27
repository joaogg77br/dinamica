import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import Scrolltop from "../components/ScrollTop";

export default function Cooperativismo() {
    return (
        <div className="font-nunitoSans">
            <Scrolltop/>
            <div className="sm:px-20 lg:px-40">
                <Header />
                <Info Title={"Cooperativismo, Cooperativa e Cooperado"} />
            </div>

            <section className="flex  justify-center items-center gap-4 flex-col p-4 md:px-20 lg:px-40 bg-zinc-100 md:py-20 lg:pb-20">
                <div className="relative bg-white p-4 rounded-2xl pl-20 lg:p-10 lg:pl-32 lg:pr-32">
                    <div className="absolute w-5 top-0 left-0 rounded-l-3xl bg-orange-500 h-full lg:w-10"></div>
                    <div className="text-zinc-700">
                        <h1 className="font-bold text-3xl p-2 pb-4 text-orange-500 ">Cooperativismo</h1>
                        <p>É um movimento social/econômico baseado na cooperação entre pessoas que atuam em diversas atividades do mercado para propor aos envolvidos: melhoria da qualidade de vida; esforço individual por benefícios para o grupo; gestão coletiva e participativa. “Mais que um modelo de negócios, o cooperativismo é uma filosofia de vida que busca transformar o mundo em um lugar mais justo, feliz, equilibrado e com melhores oportunidades para todos”. <span className="text-zinc-500">(fonte: Sistema OCB).</span></p>
                    </div>
                </div>
                <div className="relative bg-white p-4 rounded-2xl pl-20 lg:p-10 lg:pl-32 lg:pr-32">
                    <div className="absolute w-5 top-0 left-0 rounded-l-3xl bg-green-800 h-full lg:w-10"></div>
                    <div className="text-zinc-700">
                        <h1 className="font-bold text-3xl p-2 pb-4 text-green-800 ">Cooperativa</h1>
                        <p>Cooperativa é uma associação de pessoas com interesses comuns, economicamente organizada de forma democrática,
                            que objetiva desempenhar a prestação de serviços através dos seus cooperados, sem fins lucrativos.
                        <br/>
                        <br/>
                            A Cooperativa protege os mais diversos interesses econômicos e sociais dos trabalhadores. Diferente de empresas capitalistas, constituídas para gerar lucro e concentrar capital, uma cooperativa não tem fins lucrativos. Assim, o que
                            visam é a satisfação das atividades econômicas e qualidade dos serviços prestados.
                        </p>
                    </div>
                </div>
                <div className="relative bg-white p-4 rounded-2xl pl-20 lg:p-10 lg:pl-32 lg:pr-32">
                    <div className="absolute w-5 top-0 left-0 rounded-l-3xl bg-zinc-400 h-full lg:w-10 "></div>
                    <div className="text-zinc-700">
                        <h1 className="font-bold text-3xl p-2 pb-4 text-zinc-400 ">Cooperado</h1>
                        <p>O sócio cooperado é aquele que colabora para o crescimento coletivo da cooperativa, acreditando em sua condição autônoma, a fim de trabalhar por resultados e pela excelência do serviço prestado, participando ativamente de todas as decisões da cooperativa em cumprimento aos seus deveres e fiscalização dos seus direitos.</p>
                        <br />
                        <ul className="flex flex-col gap-4 list-disc mt-2">
                            <li>O Cooperado é sócio proprietário e possui participação ativa nas decisões da Instituição. Na cooperativa ele recebe por PRODUÇÃO, sendo autônomo, sem vínculo empregatício.  </li>
                            <li>A Cooperativa dispõe de escritório administrativo, em cada município de atuação, para proporcionar atendimento especializado aos cooperados.  </li>
                            <li>A cooperativa realiza o recolhimento do INSS para que os cooperados tenham acesso aos benefícios previdenciários como a exemplo da Licença Maternidade, Auxílio doença e Aposentadoria.  </li>
                            <li>A Dinâmica fornece Fardamentos e EPI’S padronizados, além de oferecer qualificação profissional e cursos profissionalizantes.</li>
                        </ul>
                    </div>
                </div>

            </section>
            <Footer />
        </div>
    )
}