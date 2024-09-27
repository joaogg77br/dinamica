import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info"
import Scrolltop from "../components/ScrollTop";
import Call from "../assets/call-calling.svg"

export default function FaleConosco() {
    return (
        <>
            <div className="md:px-20 lg:px-40">
                <Scrolltop/>
                <Header />
                <Info Title={"Fale Conosco"} />
            </div>
            <main className="flex flex-col w-full  sm:px-20 lg:px-40 gap-10 bg-cinza text-zinc-800">
                <form action="" className="flex flex-col gap-5 items-start p-4">
                <h1 className="text-2xl font-bold py-5">Formulário de consulta Geral</h1>
                    <input type="text" placeholder="Primeiro nome" className="w-full p-3 rounded-xl" />
                    <input type="text" placeholder="Segundo nome" className="w-full p-3 rounded-xl" />
                    <input type="email" placeholder="E-mail" className="w-full p-3 rounded-xl" />
                    <textarea name="" id="" placeholder="Mensagem" className="w-full p-3 rounded-xl"></textarea>
                    <button className="p-2 w-32 border-2 border-laranja duration-300 bg-laranja text-white rounded-xl">Enviar</button>
                </form>
                <hr className="bg-zinc-800 my-5"/>
                <div className="flex flex-col text-zinc-800 bg-cinza gap-10">
                    <section className="bg-white px-4 py-10 rounded-2xl ">
                        <div className="flex gap-4">
                            <img src={Call} alt="" />
                            <h1 className="font-bold text-2xl">Contatos da Sede</h1>
                        </div>
                        <section className="grid mt-10 lg:grid-cols-2">
                            <article className="grid gap-10 pb-10  px-4 border-l-2 border-laranja ">
                                <div>
                                    <h1 className="text-2xl font-bold"> Setor Financeiro</h1>
                                    <br />
                                    <p>(82) 99330-8989 </p>                        
                                    <p>financeiro@dinamicacooperativa.com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold"> Setor Financeiro</h1>
                                    <br />
                                    <p>(82) 99330-8989 </p>                        
                                    <p>financeiro@dinamicacooperativa.com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold"> Setor Financeiro</h1>
                                    <br />
                                    <p>(82) 99330-8989 </p>                        
                                    <p>financeiro@dinamicacooperativa.com.br </p>
                                </div>

                            </article>
                            <article className="grid gap-10 pb-10  px-4 border-l-2 border-laranja ">
                                <div>
                                    <h1 className="text-2xl font-bold"> Setor Financeiro</h1>
                                    <br />
                                    <p>(82) 99330-8989 </p>                        
                                    <p>financeiro@dinamicacooperativa.com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold"> Setor Financeiro</h1>
                                    <br />
                                    <p>(82) 99330-8989 </p>                        
                                    <p>financeiro@dinamicacooperativa.com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold"> Setor Financeiro</h1>
                                    <br />
                                    <p>(82) 99330-8989 </p>                        
                                    <p>financeiro@dinamicacooperativa.com.br </p>
                                </div>
                            </article>
                        </section>
                    </section>
                    <section className="bg-white px-4 py-10 rounded-xl mb-10">
                        <div className="flex gap-4 pb-8 p-2">
                            <img src={Call} alt="" />
                            <h1 className="font-bold text-2xl ">Escritórios Administrativos Locais</h1>
                        </div>
                        <section className="grid border-l-2  lg:grid-cols-2">
                            <article className="grid gap-10  px-4 border-l-2 border-laranja ">
                                <div>
                                    <h1 className="text-2xl font-bold"> Setor Financeiro</h1>
                                    <br />
                                    <p>(82) 99330-8989 </p>                        
                                    <p>financeiro@dinamicacooperativa.com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold"> Setor Financeiro</h1>
                                    <br />
                                    <p>(82) 99330-8989 </p>                        
                                    <p>financeiro@dinamicacooperativa.com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold"> Setor Financeiro</h1>
                                    <br />
                                    <p>(82) 99330-8989 </p>                        
                                    <p>financeiro@dinamicacooperativa.com.br </p>
                                </div>

                            </article>
                            <article className="grid gap-10 pb-10  px-4 border-l-2 border-laranja ">
                                <div>
                                    <h1 className="text-2xl font-bold"> Setor Financeiro</h1>
                                    <br />
                                    <p>(82) 99330-8989 </p>                        
                                    <p>financeiro@dinamicacooperativa.com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold"> Setor Financeiro</h1>
                                    <br />
                                    <p>(82) 99330-8989 </p>                        
                                    <p>financeiro@dinamicacooperativa.com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold"> Setor Financeiro</h1>
                                    <br />
                                    <p>(82) 99330-8989 </p>                        
                                    <p>financeiro@dinamicacooperativa.com.br </p>
                                </div>
                            </article>
                        </section>
                    </section>
                </div>
            </main>
            <Footer/>
        </>
    )
}