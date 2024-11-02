import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info"
import Scrolltop from "../components/ScrollTop";
import InputMask from "react-input-mask"
import Call from "../assets/call-calling.svg"
import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function FaleConosco() {
    const [firtName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [numberPhone,setNumberPhone] = useState('')
    const [message, setMessage] = useState('')
    const [camps,setCamps] = useState(true)
    const params = {
        name: firtName + "" + lastName,
        message: message,
        email: email
    }
    async function sendMessage(e) {
        e.preventDefault()
        if (firtName && lastName && email && message && numberPhone) {
            setCamps(true)
            await emailjs.send("service_top3q42", "template_dbfowlw", params, "3LzW-01toXIL65Ohj")
                .then(() => {
                    console.log("Mensagem enviada com sucesso!")
                    setfirstName('')
                    setLastName('')
                    setEmail('')
                    setMessage('')
                    setNumberPhone('')
                    alert("Mensagem enviada com sucesso!")
                }
                )
                .catch(()=> console.error("Erro ao enviar mensagem!"))
        } else {
            setCamps(false)
            alert("Preencha todos os campos!")
        }
    }
    return (
        <>
            <div className="md:px-20 lg:px-40 2xl:px-80">
                <Scrolltop />
                <Header />
                <Info Title={"Fale Conosco"} />
            </div>
            <div className="md:px-20 lg:px-40 2xl:px-80 font-nunitoSans py-10 bg-cinza">
                <div action="" className="flex flex-col px-2 gap-3 items-start pt-4 ">
                    <input value={firtName} onChange={(e) => { setfirstName(e.target.value) }} type="text" placeholder="Primeiro nome" className="w-full p-3 rounded-xl" />
                    <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }} placeholder="Segundo nome" className="w-full p-3 rounded-xl" /> 
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="E-mail" className="w-full p-3 rounded-xl" /> <InputMask mask="(99) 99999-9999" value={numberPhone} onChange={(e)=>{setNumberPhone(e.target.value)}} placeholder="(00) 00000-0000" className="rounded-xl border p-3 w-full" />
                    <textarea name="" id="" placeholder="Mensagem" value={message} onChange={(e) => { setMessage(e.target.value) }} className="w-full p-3 rounded-xl"></textarea>
                    {
                        !camps ?
                            <div className="text-red-600 font-bold">PREENCHA TODOS OS CAMPOS ANTES DE ENVIAR O FORMULÁRIO!!</div>
                            :null
                    }
                    <button onClick={sendMessage} className="p-2 w-32 border-2 border-laranja duration-300 bg-laranja text-white rounded-xl">Enviar</button>
                </div>
            </div>
            <main className="flex flex-col w-full  md:px-20 lg:px-40 2xl:px-80 gap-5 bg-zinc-100  text-zinc-800">
                <hr className="bg-zinc-800 " />
                <div className="flex flex-col text-zinc-800  gap-10  ">
                    <section className="bg-white px-4 py-10 rounded-2xl ">
                        <div className="flex gap-4">
                            <img src={Call} alt="" />
                            <h1 className="font-bold text-2xl">Contatos da Sede</h1>
                        </div>
                        <section className="grid mt-10 lg:grid-cols-2">
                            <article className="grid gap-10 pb-10  px-4 border-l-2 border-laranja ">
                                <div>
                                    <h1 className="text-xl font-bold">Setor Financeiro</h1>
                                    <br />
                                    <p>(82) 98806-4993</p>
                                    <p>financeiro@dinamicacooperativa.com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Setor de Contrato e Cooperativismo </h1>
                                    <br />
                                    <p>(82) 98806-5241 </p>
                                    <p>cadastro@dinamicacooperativa.com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Setor Contábil </h1>
                                    <br />
                                    <p>(82) 99600-2599 </p>
                                    <p>contabil@dinamicacooperativa.com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Setor de RH</h1>
                                    <br />
                                    <p>(82) 9938-2734</p>
                                    <p>rh@dinamicacooperativa.com.br </p>
                                </div>

                            </article>
                            <article className="grid gap-10 pb-10  px-4 border-l-2 border-laranja ">
                                <div>
                                    <h1 className="text-xl font-bold">Ascom – Assessoria de Comunicação </h1>
                                    <br />
                                    <p>(82) 98861-6148 </p>
                                    <p>ascom@dinamicacooperativa.com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Setor Administrativo </h1>
                                    <br />
                                    <p>(82) 98806-5159 </p>
                                    <p>gestao@dinamicacooperativa.com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Setor Jurídico </h1>
                                    <br />
                                    <p>(82) 99380-1294</p>
                                    <p>juridico@dinamicacooperativa.com.br</p>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Contabilidade</h1>
                                    <br />
                                    <p>(82) 99380-1837</p>
                                    <p>rh@dinamicacooperativa.com.br </p>
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
                                    <h1 className="text-xl font-bold">Batalha/AL </h1>
                                    <br />
                                    <p>(82) 9960-0723 </p>
                                    <p>batalha@dinamicacooperativa.com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Ouro Branco/AL</h1>
                                    <br />
                                    <p>(82) 98222-4211 </p>
                                    <p>ourobranco@dinamicacooperativa.<br className="sm:hidden" />com.br</p>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Jacaré dos Homens/AL </h1>
                                    <br />
                                    <p>(82) 98731-5346 </p>
                                    <p>jacare@dinamicacooperativa.com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Barra de Santo Antônio/AL </h1>
                                    <br />
                                    <p>(82) 99334-0857 </p>
                                    <p>barra@dinamicacooperativa.com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Porto de Pedras/AL </h1>
                                    <br />
                                    <p>(82) 9414-2916 </p>
                                    <p>portodepedras@dinamicacooperativa<br className="sm:hidden" />.com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">São José da Coroa Grande/PE </h1>
                                    <br />
                                    <p>(81) 98325-0962 </p>
                                    <p>coroagrande@dinamicacooperativa.com.br </p>
                                </div>

                            </article>
                            <article className="grid gap-5 pb-10  px-4 border-l-2 border-laranja ">
                                <div>
                                    <h1 className="text-xl font-bold">São Miguel dos Campos/AL </h1>
                                    <br />
                                    <p>(82) 99313-2073 </p>
                                    <p>saomiguel@dinamicacooperativa.com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Marechal Deodoro/AL </h1>
                                    <br />
                                    <p>(82) 99363-7724 </p>
                                    <p>marechal@dinamicacooperativa.<br className="sm:hidden" />com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Major Izidoro/AL</h1>
                                    <br />
                                    <p>(82) 99604-3795</p>
                                    <p>majorizidoro@dinamicacooperativa.<br className="sm:hidden" />com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Princesa Isabel/PB</h1>
                                    <br />
                                    <p>(83) 99692-3758 </p>
                                    <p>princesaisabe@dinamicacooperativa.<br className="sm:hidden" />com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Santa Luzia do Norte/AL </h1>
                                    <br />
                                    <p>(82) 99625-3761 </p>
                                    <p className="text-wrap">santaluziadonorte@dinamicacooperativa<br className="sm:hidden" />.com.br </p>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Igreja Nova/AL </h1>
                                    <br />
                                    <p>(82) 99603-8425 </p>
                                    <p>igreja@dinamicacooperativa.com.br </p>
                                </div>
                            </article>
                        </section>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}