import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import Scrolltop from "../components/ScrollTop";
import Barbeiro from "../assets/BarbeiroCurse.png"
import Aula from "../assets/IMG_1703.png"
import CourseCongratilation from "../assets/CourseCongratulation.png"

export default function Educacao() {
    return (
        <>
            <div className="md:px-20 lg:px-60 2xl:px-80">
                <Scrolltop />
                <Header />
                <Info Title={"Educação Continuada"} />
            </div>
            <div className="flex flex-col items-center w-full bg-cinza gap-10 sm:flex-row md:px-20 lg:px-60 2xl:px-80 py-10">
                <div className="w-full  flex flex-col p-2 px-4 gap-2  sm:hidden ">
                    <div className="flex gap-2 ">
                        <img src={Aula} alt="dkajsdj" className="w-1/2 max-w-80  bg-cinza rounded-lg " />
                        <img src={Barbeiro} alt="dklasj" className="w-1/2 h-40 bg-cinza rounded-lg" />
                    </div>
                    <img src={CourseCongratilation} alt="heheh" className="w-full h-80 max-w-96  rounded-lg lg:object-cover" />
                </div>
                <div className=" flex items-center justify-center flex-col px-4 lg:py-5 sm:w-1/2  text-sm">
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
                <div className="hidden w-1/2 h-40 lg:flex items-center justify-center sm:flex gap-2">
                    <div className="flex gap-2 flex-col ">
                        <img src={Aula} alt="dkajsdj" className="w-40 max-w-80  bg-cinza rounded-lg  object-cover" />
                        <img src={Barbeiro} alt="dklasj" className="h-40 bg-cinza rounded-lg" />
                    </div>
                    <img src={CourseCongratilation} alt="heheh" className="h-72 row-span-2 col-span-2 object-cover rounded-lg bg-blue-500" />
                </div>
            </div>
            <Footer />
        </>
    )
}
