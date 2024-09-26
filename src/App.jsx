import { useState } from 'react'
import './font.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Explain from './components/Explain'
import ImageExplain1 from "./assets/explain1.png"
import ImageExplain2 from "./assets/explain2.png"
import ImageExplain3 from "./assets/explain3.png"
import Advantagens from './components/Advantages'
import LastNews from './components/LastNews'
import Footer from './components/Footer'
import Award from './assets/award.png'
import TaskSquare from './assets/task-square.png'
import Wallet from './assets/wallet-add.png'
import Teacher from './assets/teacher.png'
import Brif from "./assets/brifecase-tick.png"
import Security from "./assets/security-user.png"
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Scrolltop from './components/ScrollTop'


function App() {
  return (
    <>
      <div className='sm:px-10 lg:px-40 font-nunitoSans'>
        <Scrolltop/>
        <Header />
        <Swiper className='mt-10 p-5'
          effect={'coverflow'}
          spaceBetween={50}
          autoplay={{
            delay:4000,
            disableOnInteraction:false,
          }}
          grabCursor={true}
          Navigation={true}
          pagination={true}
          modules={[ Pagination,Autoplay]}
        >
          <SwiperSlide>
            <Banner/>
          </SwiperSlide>
          <SwiperSlide>
            <Banner />
          </SwiperSlide>
          <SwiperSlide>
            <Banner />
          </SwiperSlide>
          <SwiperSlide>
            <Banner />
          </SwiperSlide>
        </Swiper>

        <div className='p-4 lg:mb-10'>
          <div className='px-5 p-4 flex justify-end items-center flex-col  bg-laranja rounded-3xl sm:flex-row sm:justify-around lg:px-10'>
          <h1 className='text-white text-3xl font-semibold m-4 sm:text-3xl lg:pl-10'>Dinâmica em números</h1>
            <div className='flex w-full justify-between bg-white  rounded-3xl md:gap-10 m-4 sm:w-4/6 sm:p-5 sm:justify-around flex-wrap '>
              <div className='flex flex-col items-center p-4 sm:p-0'>
                <p className='font-bold text-2xl text-laranja sm:text-5xl '> +13</p>
                <p className='font-semibold text-sm sm:text-2xl'>Cidades</p>
              </div>
              <div className='flex flex-col items-center p-4 sm:p-0'>
                <p className='font-bold text-2xl text-laranja sm:text-5xl'> +6000</p>
                <p className='font-semibold text-sm sm:text-2xl'>Cooperados</p>
              </div>
              <div className='flex flex-col items-center p-4 sm:p-0 overflow-hidden'>
                <p className='font-bold text-2xl text-laranja sm:text-5xl '>+300</p>
                <p className='font-semibold text-sm sm:text-2xl'>Parceiros</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-10 lg:gap-32 px-10 pb-10 lg:px-5 pt-10'>
          <Explain
            title={"Cooperativismo: juntos construímos uma sociedade mais próspera"}
            text={"Você sabe o que é cooperativismo? A estrutura é baseada na colaboração e na parceria para promover o auxílio mútuo. Hoje, faz parte do cotidiano de milhares de pessoas."}
            img={ImageExplain1}
            side={true}
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
            side={true}
          />
        </div>


        <div className='flex gap-2 text-center items-center justify-center font-semibold text-xl sm:text-2xl lg:my-20'>
          <p className='text-orange-500 '>6 vantagens</p>
          <p> de  ser um cooperado</p>
        </div>
        <div className='flex justify-center items-center m-5 my-10'>
          <div className='grid grid-cols-2 gap-6 xl:gap-10 sm:grid-cols-3'>
            <Advantagens number={1} text={"Ser Sócio-cotista"} img={Award} />
            <Advantagens number={2} text={"Opinar e votar nas decisões"} img={TaskSquare} />
            <Advantagens number={3} text={"Oportunidade  de trabalho"} img={Wallet} />
            <Advantagens number={4} text={"Qualificação profissional"} img={Teacher} />
            <Advantagens number={5} text={"Direitos previdenciários"} img={Brif} />
            <Advantagens number={6} text={"Jalecos e calçados profissionais"} img={Security} />
          </div>
        </div>
      </div>
      <LastNews />
      <Footer />
    </>
  )
}

export default App
