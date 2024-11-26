import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import Scrolltop from "../components/ScrollTop";
import Barbeiro from "../assets/imagens-otimizadas/BarbeiroCurse-D73WvwFe.png"
import Aula from "../assets/imagens-otimizadas/IMG_1703-CCoouuzU.png"
import CourseCongratilation from "../assets/imagens-otimizadas/CourseCongratulation-DgT4Pg7e.png"

export default function Educacao() {
    return (
        <>
            <div className="md:px-20 lg:px-40 2xl:px-80">
                <Scrolltop />
                <Header />
                <Info Title={"Educação Continuada"} />
            </div>
            <div className="flex flex-col items-center w-full md:gap-10 lg:flex-row md:px-20 lg:px-40 2xl:px-80 py-10  bg-zinc-100">
                <div className="w-full  flex flex-col items-center p-2 gap-2  lg:hidden">
                    <div className="gap-2 flex flex-col">
                        <div className="flex gap-2  w-80">
                            <img src={Aula} alt="dkajsdj" className="w-1/2 h-40  bg-cinza rounded-lg"/>
                            <img src={Barbeiro} alt="dklasj" className="w-full h-40 bg-cinza rounded-lg" />
                        </div>
                        <img src={CourseCongratilation} alt="heheh" className="w-full h-80 max-w-96  rounded-lg lg:object-cover" />
                    </div>
                </div>
                <div className=" flex items-center justify-center px-4 sm:px-0 flex-col xl:h-80 lg:py-10 sm:w-1/2  text-sm">
                    <p>A Educação Continuada é uma prática
                        na qual o desenvolvimento pessoal e profissional dos trabalhadores é fundamental para o aperfeiçoamento
                        das habilidades, bem como, maior
                        noção da realidade em que estão inseridos, visando uma construção
                        de conhecimentos.
                    </p>
                    <br />
                    <p> Os programas de Educação Continuada das Cooperativas oportunizam possibilidades de crescimento e desenvolvimento de suas equipes, contribuindo assim para as competências e qualificações destas Instituições. </p>
                    <br />
                    <p>
                        A melhoria das condições de trabalho,
                        a interação da equipe com a Instituição,
                        a habilidade das técnicas, o aperfeiçoamento, atualização e aprimoramento, refletem diretamente
                        no bom desempenho dos associados.
                        Isso propicia condições de apoio, agilizando o atendimento, ampliando a produtividade e qualificando a assistência prestada pelos serviços ofertados, desenvolvendo ainda mais, a confiança
                        da equipe de trabalho e trazendo melhores resultados para os
                        Tomadores de Serviços.</p>
                </div>
                <div className="hidden w-1/2 h-80 lg:flex items-center justify-center gap-2">
                    <div className="flex gap-2 flex-col h-full">
                        <img src={Aula} alt="dkajsdj" className="w-40 h-1/2 max-w-80  bg-cinza rounded-lg  object-cover" />
                        <img src={Barbeiro} alt="dklasj" className="h-1/2 bg-cinza rounded-lg" />
                    </div>
                    <img src={CourseCongratilation} alt="heheh" className="h-full row-span-2 col-span-2 object-cover rounded-lg bg-blue-500" />
                </div>
            </div>
            <Footer />
        </>
    )
}
