import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Explain from './components/Explain'
import ImageExplain1 from "./assets/explain1.png"
import ImageExplain2 from "./assets/explain2.png"
import ImageExplain3 from "./assets/explain3.png"
import Advantagens from './components/Advantages'
import LastNews from './components/LastNews'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Header />
      <Banner />
      <div className='p-4 sm:p-8'>
        <div className='flex items-center flex-col p-4 bg-orange-500 rounded-3xl sm:flex-row sm:justify-around '>
          <h1 className='text-white text-xl font-semibold m-4 sm:text-3xl'>Dinâmica em números</h1>
          <div className='flex w-full justify-between bg-white mt-4 gap-4 rounded-2xl p-2 sm:w-4/6 sm:p-10 sm:justify-around sm:flex-wrap'>
            <div className='flex flex-col items-center'>
              <p className='font-bold text-2xl text-orange-500 sm:text-4xl '> +13</p>
              <p className='font-semibold  sm:text-2xl'>Cidades</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-bold text-2xl text-orange-500 sm:text-4xl '> +1700</p>
              <p className='font-semibold sm:text-2xl'>Cooperados</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-bold text-2xl text-orange-500 sm:text-4xl '>+300</p>
              <p className='font-semibold sm:text-2xl'>Parceiros</p>
            </div>
          </div>
        </div>
      </div>

      <Explain
        title={"Cooperativismo: juntos construímos uma sociedade mais próspera"}
        text={"Você sabe o que é cooperativismo? A estrutura é baseada na colaboração e na parceria para promover o auxílio mútuo. Hoje, faz parte do cotidiano de milhares de pessoas."}
        img={ImageExplain1}
      />
      <Explain
        title={"O que é cooperativismo?"}
        text={'O cooperativismo a é a união de pessoas com interesses em comum que colaboram entre si, nela, os cooperados são considerados "donos do negócio", dessa forma, as decisões são tomadas em assembleias.'}
        img={ImageExplain2}
      />
      <Explain
        title={"Qual é o objetivo do cooperativismo?"}
        text={'O modelo busca maior integração com a sociedade, por isso, o objetivo é representar uma união de justiça com economia e sustentabilidade. A ideia é equilibrar os princípios respeitando a coletividade.'}
        img={ImageExplain3}
      />

      <div className='p-4 sm:p-8'>
        <div className='text-white p-4 mt-4 rounded-2xl bg-green-900'>
          <h1 className='text-2xl'>Quais são as áreas de atuação do <span className='text-orange-500'>cooperativismo?</span></h1>
          <p className='pt-4'>Após um processo democrático, reduziu-se para sete ramos do cooperativismo. Essa modificação veio para garantir que ficassem
            mais alinhados com a realidade das organizações, sendo classificados em:</p>

          <ul className='grid p-4 list-disc gap-4 '>
            <li>Agropecuário: composto por trabalhadores rurais, alunos de escolas técnicas e demais pessoas da produção agrícola;</li>
            <li>Consumo: tanto de turismo e lazer quanto educacional (formado por pais e alunos);</li>
            <li>Crédito: cartão de crédito, financiamento, consórcio, previdência privada e mais;</li>
            <li>Infraestrutura: todos os tipos de infraestrutura, como habitacional e comercial;</li>
            <li>Trabalho produção de bens e serviços: trabalho, produção, mineração, turismo e lazer, educação e mais;</li>
            <li>Saúde: todas as áreas relacionadas à saúde, como medicina, odontologia, fisioterapia e mais;</li>
            <li>Transporte: formado por cooperativas que atuam na prestação de serviços de transporte de cargas, passageiros e mais.</li>
          </ul>
        </div>
      </div>

      <div className='flex gap-2 items-center justify-center font-semibold sm:text-xl'>
        <p className='text-orange-500'>6 vantagens</p>
        <p> de  ser um cooperado</p>
      </div>
      <div className='flex justify-center items-center mt-10'>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
          <Advantagens number={1} />
          <Advantagens />
          <Advantagens />
          <Advantagens />
          <Advantagens />
          <Advantagens />
        </div>
      </div>
      <LastNews />
      <Footer />
    </>
  )
}

export default App
