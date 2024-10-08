import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import Ativiti from "../components/ativiti";
import Scrolltop from "../components/ScrollTop";
import Imagem1 from "../assets/Atividades actions/Frame 89 (1).svg"
import Imagem2 from "../assets/Atividades actions/Frame 89 (2).svg"
import Imagem3 from "../assets/Atividades actions/Frame 89 (3).svg"
import Imagem4 from "../assets/Atividades actions/Frame 89 (4).svg"
import Imagem5 from "../assets/Atividades actions/Frame 89 (5).svg"
import Imagem6 from "../assets/Atividades actions/Frame 89 (6).svg"
import Imagem7 from "../assets/Atividades actions/Frame 89 (7).svg"
import Imagem8 from "../assets/Atividades actions/Frame 89 (8).svg"
import Imagem9 from "../assets/Atividades actions/Frame 89 (9).svg"
import Imagem10 from "../assets/Atividades actions/Frame 89 (10).svg"
import Imagem11 from "../assets/Atividades actions/Frame 89 (11).svg"
import Imagem12 from "../assets/Atividades actions/Frame 89 (12).svg"
import Imagem13 from "../assets/Atividades actions/Frame 89 (13).svg"
import Imagem14 from "../assets/Atividades actions/Frame 89 (14).svg"


export default function Atividades() {
    return (
        
        <div className="font-nunitoSans">
            <Scrolltop/>
            <div className="sm:px-10 md:px-20 lg:px-40">
                <Header />
                <Info Title={"Atividades desenvolvidas pela Dinâmica"} />
            </div>

            <div className="flex gap-6 py-10 flex-row flex-wrap justify-center items-center bg-zinc-100 w-full p-2 lg:gap-6 lg:p-10 lg:px-38 pb-10 2xl:gap-10 2xl:px-10 ">
                <Ativiti Txt={"Serviço de preparação de terreno, cultivo e colheita"} imagem={Imagem14}/>
                <Ativiti Txt={"Coleta de resíduos não-perigosos"} imagem={Imagem1}/>
                <Ativiti Txt={"Obras de urbanização - ruas, praças e calçadas"} imagem={Imagem2}/>
                <Ativiti Txt={"Obras de terraplenagem"} imagem={Imagem3}/>
                <Ativiti Txt={"Instalação e manutenção elétrica"} imagem={Imagem4}/>
                <Ativiti Txt={"Serviços de pintura de edifícios em geral"} imagem={Imagem5}/>
                <Ativiti Txt={"Outras obras de acabamento da construção"} imagem={Imagem6}/>
                <Ativiti Txt={"Obras de alvenaria"} imagem={Imagem7}/>
                <Ativiti Txt={"Cantinas - serviços de alimentação privativos"} imagem={Imagem8}/>
                <Ativiti Txt={"Fornecimento e gestão de recursos humanos para terceiros "} imagem={Imagem9}/>
                <Ativiti Txt={"Serviços combinados para apoio a edifícios, exceto condomínios prediais"} imagem={Imagem10}/>
                <Ativiti Txt={"Atividades de limpeza não especificadas anteriormente "} imagem={Imagem11}/>
                <Ativiti Txt={"Atividade paisagísticas"} imagem={Imagem12}/>
                <Ativiti Txt={"Serviços combinados de escritório e apoio administrativo"} imagem={Imagem13} />
            </div>
            <Footer />
        </div>
    )
}