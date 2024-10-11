import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import Scrolltop from "../components/ScrollTop";
import Imagem1 from "../assets/Nova pasta/iStock-1212669780.jpg"
import Imagem2 from "../assets/Nova pasta/QuebraCabeça.jpg"
import Imagem3 from "../assets/Nova pasta/Gari.jpg"

export default function Cooperativismo() {
    return (
        <div className="font-nunitoSans">
            <Scrolltop />
            <div className="sm:px-20 lg:px-40 2xl:px-80">
                <Header />
                <Info Title={"Cooperativismo, Cooperativa e Cooperado"} />
            </div>

            <section className="flex  justify-center items-center gap-4 flex-col p-4 md:px-20 lg:px-40 2xl:px-80 bg-zinc-100 md:py-20 lg:pb-20">
                <div className="relative flex flex-col lg:flex-row items-center justify-center  bg-white p-4 rounded-2xl pl-20 lg:p-10 lg:pl-20 lg:pr-32">
                    <img src={Imagem3} alt="" className="rounded-2xl lg:w-60 lg:h-60  mr-4 object-cover w-full mb-5 lg:mr-10"/>
                    <div className="absolute w-5 top-0 left-0 rounded-l-3xl bg-orange-500 h-full lg:w-10"></div>
                    <div className="text-zinc-700">
                        <h1 className="font-bold text-3xl p-2 pb-4 text-orange-500 ">Cooperativismo</h1>
                        <p>É um movimento social/econômico baseado na cooperação entre pessoas que atuam em diversas atividades do mercado para propor aos envolvidos: melhoria da qualidade de vida; esforço individual por benefícios para o grupo; gestão coletiva e participativa. “Mais que um modelo de negócios, o cooperativismo é uma filosofia de vida que busca transformar o mundo em um lugar mais justo, feliz, equilibrado e com melhores oportunidades para todos”. <span className="text-zinc-500">(fonte: Sistema OCB).</span></p>
                    </div>
                </div>
                <div className="relative flex flex-col lg:flex-row items-center justify-center bg-white p-4 rounded-2xl pl-20 lg:p-10 lg:pl-20 lg:pr-32">
                    <img src={Imagem2} alt="" className="rounded-2xl lg:w-60 lg:h-60  mr-4 object-cover w-full mb-5 lg:mr-10"/>
                    <div className="absolute w-5 top-0 left-0 rounded-l-3xl bg-green-800 h-full lg:w-10"></div>
                    <div className="text-zinc-700">
                        <h1 className="font-bold text-3xl p-2 pb-4 text-green-800 ">Cooperativa</h1>
                        <p>Cooperativa é uma associação de pessoas com interesses comuns, economicamente organizada de forma democrática,
                            que objetiva desempenhar a prestação de serviços através dos seus cooperados, sem fins lucrativos.
                            <br />
                            <br />
                            A Cooperativa protege os mais diversos interesses econômicos e sociais dos trabalhadores. Diferente de empresas capitalistas, constituídas para gerar lucro e concentrar capital, uma cooperativa não tem fins lucrativos. Assim, o que
                            visam é a satisfação das atividades econômicas e qualidade dos serviços prestados.
                        </p>
                    </div>
                </div>
                <div className="relative flex  flex-col lg:flex-row items-start justify-center bg-white p-4 rounded-2xl pl-20 lg:p-10 lg:pl-20 lg:pr-32">
                    <img src={Imagem1} alt="" className="rounded-2xl lg:w-60 lg:h-52  mr-4 object-cover w-full mb-5 lg:mr-10"/>
                    <div className="absolute w-5 top-0 left-0 rounded-l-3xl bg-zinc-400 h-full lg:w-10 "></div>
                    <div className="text-zinc-700">
                        <h1 className="font-bold text-3xl p-2 pb-4 text-zinc-400 ">Cooperado</h1>
                        <p>O sócio cooperado é aquele que colabora para o crescimento coletivo da cooperativa, acreditando em sua condição autônoma, a fim de trabalhar por resultados e pela excelência do serviço prestado, participando ativamente de todas as decisões da cooperativa em cumprimento aos seus deveres e fiscalização dos seus direitos.</p>
                        <br />
                        <ul className="flex flex-col gap-4 list-disc mt-2">
                            <li>O Cooperado é sócio proprietário e possui participação ativa nas decisões da Instituição. Na cooperativa ele recebe por PRODUÇÃO, sendo autônomo, sem vínculo empregatício.  </li>
                            <li>O Cooperado deve integralizar uma quantidade mínima de quota-parte para
                                assumir sua posição de associado. Dessa forma, o capital social da Cooperativa é
                                completamente formado de quotas-partes dos Cooperados.
                            </li>
                            <li>O cooperado contribui para o INSS, a fim de garantir seus direitos previdenciários, tais
                                como a Licença Maternidade, Auxílio doença, Aposentadoria, dentre outros
                            </li>
                            <li>
                                O cooperado é dono e proprietário da Cooperativa. Por essa razão, tem direitos e deveres
                                a cumprir no intuito de colaborar para o bom desempenho dos serviços prestados.
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
            <Footer />
        </div>
    )
}