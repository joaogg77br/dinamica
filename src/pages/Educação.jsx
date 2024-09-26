import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import Scrolltop from "../components/ScrollTop";
import Barbeiro from "../assets/BarbeiroCurse.jpeg"
import Aula from "../assets/IMG_1703.jpeg"
import CourseCongratilation from "../assets/CourseCongratulation.jpg"

export default function Educacao() {
    return (
        <>
            <div className="md:px-20 lg:px-40">
                <Scrolltop />
                <Header />
                <Info Title={"Educação Continuada"} />
            </div>
            <div className="flex flex-col items-center w-full bg-cinza gap-10 sm:flex-row md:px-20 lg:px-10 py-10">
                <div className="w-full grid grid-rows-3 grid-cols-2 gap-2 p-4 h-Max sm:px-10  sm:hidden ">
                    <img src={Aula} alt="dkajsdj" className="w-full h-full bg-cinza rounded-lg" />
                    <img src={Barbeiro} alt="dklasj" className="w-full h-full bg-cinza rounded-lg" />
                    <img src={CourseCongratilation} alt="heheh" className="w-full h-full row-span-2 col-span-2 rounded-lg bg-blue-500" />
                </div>
                <div className=" flex items-center justify-center flex-col p-4 py-5 sm:w-3/5 lg:px-32  text-sm">
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
                <div className="hidden 2xl:w-2/4 pr-40 h-80 grid-rows-2 grid-cols-3 gap-2 sm:grid">
                    <img src={Aula} alt="dkajsdj" className="w-full max-w-96 h-full bg-cinza rounded-lg" />
                    <img src={CourseCongratilation} alt="heheh" className="w-full h-full row-span-2 col-span-2 rounded-lg bg-blue-500" />
                    <img src={Barbeiro} alt="dklasj" className="w-full h-full bg-cinza rounded-lg" />
                </div>
            </div>
            <Footer/>
        </>
    )
}
