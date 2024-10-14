import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info"
import Teacher from "../assets/Banners/teacher.svg"
import Lifebouy from "../assets/lifebuoy.svg"
import Receipt from "../assets/receipt-discount.svg"
import security from "../assets/security.svg"
import People from "../assets/people.svg"
import PersonalCard from "../assets/personalcard.svg"
import BagTick from "../assets/bag-tick.svg"
import SecuritUser from "../assets/Banners/security-user.svg"
import HeartTick from "../assets/heart-tick.svg"
import Hospital from "../assets/hospital.svg"
import Calls from "../assets/call-calling.svg"
import Book from "../assets/book.svg"
import CourtHouse from "../assets/courthouse.svg"
import Scrolltop from "../components/ScrollTop";

export default function Beneficios() {
    return (
        <div className="font-nunitoSans">
            <Scrolltop/>
            <div className="sm:px-10 lg:px-40 2xl:px-80">
                <Header />
                <Info Title={"Benéficios exclusivos da Dinâmica"} />
            </div>
            <section className="flex flex-col gap-8 py-10 bg-zinc-100 md:px-20 lg:px-40 2xl:px-80">
                <div className="flex flex-row gap-4 border-b-2 border-opacity-25 border-zinc-400  w-full py-6 font-medium">
                    <img src={Teacher} alt="" />
                    <p>Cursos de capacitação e profissionalizantes</p>
                </div>
                <div className="flex flex-row gap-4 border-b-2 border-opacity-25 border-zinc-400  w-full py-6 font-medium">
                    <img src={Lifebouy} alt="" />
                    <p>Assistência ao cooperado desalocado </p>
                </div>
                <div className="flex flex-row gap-4 border-b-2 border-opacity-25 border-zinc-400  w-full py-6 font-medium">
                    <img src={Receipt} alt="" />
                    <p>Parcerias com estabelecimentos locais</p>
                </div>
                <div className="flex flex-row gap-4 border-b-2 border-opacity-25 border-zinc-400  w-full py-6 font-medium">
                    <img src={security} alt="" />
                    <p>Execução dos Programas de Gerenciamento de Riscos com profissionais especializados</p>
                </div>
                <div className="flex flex-row gap-4 border-b-2 border-opacity-25 border-zinc-400  w-full py-6 font-medium">
                    <img src={People} alt="" />
                    <p>Ações Cooperativas</p>
                </div>
                <div className="flex flex-row gap-4 border-b-2 border-opacity-25 border-zinc-400  w-full py-6 font-medium">
                    <img src={BagTick} alt="" />
                    <p>Sorteio de cestas Básicas</p>
                </div>
                <div className="flex flex-row gap-4 border-b-2 border-opacity-25 border-zinc-400  w-full py-6 font-medium">
                    <img src={SecuritUser} alt="" />
                    <p>Crachás de Identificação Individual </p>
                </div>
                <div className="flex flex-row gap-4 border-b-2 border-opacity-25 border-zinc-400  w-full py-6 font-medium">
                    <img src={HeartTick} alt="" />
                    <p>Seguro de vida</p>
                </div>
                <div className="flex flex-row gap-4 border-b-2 border-opacity-25 border-zinc-400  w-full py-6 font-medium">
                    <img src={Hospital} alt="" />
                    <p>Assistência Médica, Hospitalar e Odontológica </p>
                </div>
                <div className="flex flex-row gap-4 border-b-2 border-opacity-25 border-zinc-400  w-full py-6 font-medium">
                    <img src={Calls} alt="" />
                    <p>Atendimento médico por Telemedicina</p>
                </div>
                <div className="flex flex-row gap-4 border-b-2 border-opacity-25 border-zinc-400  w-full py-6 font-medium">
                    <img src={Book} alt="" />
                    <p>Informativos Semestrais – Dinâmica News</p>
                </div>
                <div className="flex flex-row gap-4 border-opacity-25 w-full py-6 font-medium">
                    <img src={CourtHouse} alt="" />
                    <p>Assessoria Jurídica Gratuita</p>
                </div>
            </section>
            <Footer />
        </div>
    )
}