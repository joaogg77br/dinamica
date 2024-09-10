import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";


export default function Atividades() {
    return (
        <>
            <div className="sm:px-10 md:px-20">
                <Header />
                <Info Title={"Atividades desenvolvidas pela Dinâmica"} />
            </div>
            <div className="flex gap-8 flex-row flex-wrap justify-center items-center bg-zinc-100 w-full p-10">
                <div className="w-60 flex flex-col gap-4 justify-center items-center bg-white text-center p-8 rounded-2xl">
                    <img src="" alt="" className="p-4 rounded-2xl bg-orange-400 bg-opacity-50"/>
                    <p>Serviço de preparação de terreno, cultivo e colheita</p>
                </div>
                <div className="w-60 flex flex-col gap-4 justify-center items-center bg-white text-center p-8 rounded-2xl">
                    <img src="" alt="" className="p-4 rounded-2xl bg-orange-400 bg-opacity-50"/>
                    <p>Serviço de preparação de terreno, cultivo e colheita</p>
                </div>
                <div className="w-60 flex flex-col gap-4 justify-center items-center bg-white text-center p-8 rounded-2xl">
                    <img src="" alt="" className="p-4 rounded-2xl bg-orange-400 bg-opacity-50"/>
                    <p>Serviço de preparação de terreno, cultivo e colheita</p>
                </div>
                <div className="w-60 flex flex-col gap-4 justify-center items-center bg-white text-center p-8 rounded-2xl">
                    <img src="" alt="" className="p-4 rounded-2xl bg-orange-400 bg-opacity-50"/>
                    <p>Serviço de preparação de terreno, cultivo e colheita</p>
                </div>
                <div className="w-60 flex flex-col gap-4 justify-center items-center bg-white text-center p-8 rounded-2xl">
                    <img src="" alt="" className="p-4 rounded-2xl bg-orange-400 bg-opacity-50"/>
                    <p>Serviço de preparação de terreno, cultivo e colheita</p>
                </div>
            </div>
            <Footer />
        </>
    )
}