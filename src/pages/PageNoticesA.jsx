import Header from "../components/Header";
import Info from "../components/Info";
import Scrolltop from "../components/ScrollTop";
import secondImage from "../assets/imagens-otimizadas/MATERIA 1-BqG8et9F.jpg"
import Footer from "../components/Footer";


export default function PageNoticesA() {
    return (
        <>
            <div className="md:px-20 lg:px-40 2xl:px-80">
                <Scrolltop />
                <Header />
                <Info Title={"OUTUBRO ROSA: UM GESTO DE CUIDADO, UMA ATITUDE DE AMOR!"} />
            </div>
            <main className="md:px-20 lg:px-40 2xl:px-80 font-nunitoSans py-10 ">
                <div className="">
                    <img src={secondImage} alt="" className="w-full  md:h-1/2 lg:h-720 md:rounded-custom object-cover" />
                </div>
                <div className="text-zinc-800 w-full  pt-10  md:px-40 flex md:items-center md:justify-center flex-col gap-4">
                    <p className="text-xl mb-10 lg:text-md px-2">O mês de outubro é dedicado à
                        conscientização sobre o câncer de mama,
                        reforçando a importância da prevenção e do
                        diagnóstico precoce.
                        <br/><br/>
                         Juntos, podemos fazer a
                        diferença na vida de muitas mulheres. Mais do
                        que usar o rosa, é fundamental espalhar
                        informação, incentivar o autocuidado e
                        lembrar que cuidar da saúde é um ato de amor
                        próprio.
                        <br/><br/>
                        Vamos todos abraçar essa causa e mostrar
                        que a prevenção salva vidas. </p>
                </div>
            </main>
            <Footer/>
        </>
    )
}