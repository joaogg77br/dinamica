import WhiteHome from "../assets/Frame 55.svg"
import { Link } from "react-router-dom";

export default function DinamicaApp() {
    return (
        <>
            <section className="flex flex-col gap-6 justify-center items-center pt-12 bg-zinc-100 p-4 lg:pb-32 lg:px-40 2xl:px-80">
                <img src={WhiteHome} alt="" />
                <h1 className="text-xl font-medium">Aplicativo<span className="text-orange-500"> Dinânica  </span>Cooperativa</h1>

                <div className="flex flex-col lg:flex-row justify-center w-full gap-4 ">
                    <Link to={"/termos-de-uso"}>
                        <button className="mx-2 text-white h-7 bg-laranja  lg:m-0 rounded-xl p-8 flex justify-center items-center text-nowrap duration-300 border-2 border-laranja hover:text-laranja  hover:bg-white" >Termos de Uso</button>
                    </Link>
                    <Link to={"/conteudos/pdfs/4"}>
                        <Link to={"/conteudos/pdfs/3"}>
                            <button className="mx-2 text-white h-7 bg-laranja  lg:m-0 rounded-xl p-8 flex justify-center items-center text-nowrap duration-300 border-2 border-laranja hover:text-laranja  hover:bg-white" >Políticas de Privacidade</button>
                        </Link>
                    </Link>
                </div>
            </section>
        </>
    )
}