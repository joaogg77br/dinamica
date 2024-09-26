import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import Scrolltop from "../components/ScrollTop";

export default function Educacao() {
    return (
        <>
            <div>
                <Scrolltop />
                <Header />
                <Info Title={"Educação Continuada"} />
            </div>
            <div className="flex flex-col w-full bg-cinza gap-4">
                <div className="grid grid-rows-3 grid-cols-2 gap-2 p-2 h-96">
                    <img src="" alt="dkajsdj" className="bg-cinza rounded-lg" />
                    <img src="" alt="dklasj" className="bg-cinza rounded-lg" />
                    <img src="" alt="heheh" className="row-span-2 col-span-2 rounded-lg bg-blue-500" />
                </div>
                <div className="p-4 py-10">
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
            </div>
            <Footer/>
        </>
    )
}
