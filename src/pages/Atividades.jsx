import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import Ativiti from "../components/ativiti";

export default function Atividades() {
    return (
        <>
                <Header />
            <div className="sm:px-10 md:px-40">
                <Info Title={"Atividades desenvolvidas pela Dinâmica"} />
            </div>
            <div className="flex gap-2  flex-row flex-wrap justify-center items-center bg-zinc-100 w-full p-2 lg:gap-8 lg:p-10 lg:px-20 pb-10">
                <Ativiti Txt={"Serviço de preparação de terreno, cultivo e colheita"}/>
                <Ativiti Txt={"Coleta de resíduos não-perigosos"}/>
                <Ativiti Txt={"Obras de urbanização - ruas, praças e calçadas"}/>
                <Ativiti Txt={"Obras de terraplenagem"}/>
                <Ativiti Txt={"Instalação e manutenção elétrica"}/>
                <Ativiti Txt={"Serviços de pintura de edifícios em geral"}/>
                <Ativiti Txt={"Outras obras de acabamento da construção"}/>
                <Ativiti Txt={"Instalação e manutenção elétrica"}/>
                <Ativiti Txt={"Serviços de pintura de edifícios em geral"}/>
                <Ativiti Txt={"Outras obras de acabamento da construção"}/>
                <Ativiti Txt={"Obras de alvenaria"}/>
                <Ativiti Txt={"Cantinas - serviços de alimentação privativos"}/>
                <Ativiti Txt={"Fornecimento e gestão de recursos humanos para terceiros"}/>
                <Ativiti Txt={"Serviços combinados para apoio a edifícios, exceto condomínios prediais"}/>
                <Ativiti Txt={"Atividades de limpeza não especificadas anteriormente"}/>
                <Ativiti Txt={"Atividades paisagísticas"}/>
                <Ativiti Txt={"Serviços combinados de escritório e apoio administrativo"}/>
            </div>
            <Footer />
        </>
    )
}