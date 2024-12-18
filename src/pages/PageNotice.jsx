import Header from "../components/Header";
import Info from "../components/Info";
import Scrolltop from "../components/ScrollTop";
import secondImage from "../assets/imagens-otimizadas/MATERIA-3_2-BKPExm7o.jpg"
import Footer from "../components/Footer";


export default function PageNoticesA() {
    return (
        <>
            <div className="md:px-20 lg:px-40 2xl:px-80">
                <Scrolltop />
                <Header />
                <Info Title={"COOPERATIVA DINÂMICA REALIZA O DIA C 2024 EM PORTO DE PEDRAS/AL "} />
            </div>
            <main className="md:px-20 lg:px-40 2xl:px-80 font-nunitoSans py-10">
                <div className="">
                    <img src={secondImage} alt="" className="w-full  md:h-1/2 lg:h-720 md:rounded-custom object-cover" />
                </div>
                <div className="text-zinc-800 w-full pt-10 md:px-40 flex xl:items-center xl:justify-center flex-col gap-4">
                    <p className="text-xl mb-10 lg:text-md px-2 lg:px-0">
                        Esse é o lema do Dia C - Dia de Cooperar, celebrado anualmente todo primeiro sábado de
                        julho.
                        <br /><br />
                        Neste ano de 2024, a Dinâmica não ficou de fora, e fez questão de mergulhar de cabeça
                        desempenhando serviços e ações voluntárias em prol da comunidade.
                        O município prestigiado foi Porto de Pedras/AL, onde a Dinâmica presta seus serviços desde
                        2022.
                        <br /><br />
                        O projeto preparado para esse dia lindo contou com diversos voluntários a serviço da
                        comunidade, composto pela equipe Dinâmica, e com profissionais da saúde realizando
                        exames de vista, aferição de pressão arterial e teste rápido de glicemia.
                        <br /><br />
                        Também teve cabeleireiro, manicure, maquiadora, massoterapeuta, consultoria jurídica,
                        apresentação cultural de dança, doação de óculos, cestas básicas e muitos prêmios.
                        O Dia de Cooperar da Dinâmica foi um sucesso!
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}