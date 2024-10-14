import { useState } from 'react'
import './font.css'
import Header from './components/Header'
import Explain from './components/Explain'
import ImageExplain1 from "./assets/Nova pasta/AmigosDePapel.jpg"
import ImageExplain2 from "./assets/Nova pasta/cabeçasLaranjas.jpg"
import ImageExplain3 from "./assets/Nova pasta/Unidos.jpg"
import Advantagens from './components/Advantages'
import LastNews from './components/LastNews'
import Footer from './components/Footer'
import Award from './assets/award.svg'
import TaskSquare from './assets/task-square.svg'
import Wallet from './assets/wallet-add.svg'
import Teacher from './assets/teacher.svg'
import Banner from "./assets/Banners/Headline.svg"
import Banner2 from "./assets/Banners/Headline2.svg"
import Banner3 from "./assets/Banners/Headline.png"
import Brif from "./assets/brifecase-tick.svg"
import Security from "./assets/security-user.svg"
import InstagramQrCode from "./assets/Banners/InstagramQrcode.svg"
import InstagramScreenShot from "./assets/Banners/Captura de tela 2024-10-05 181728 1.svg"
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
      <div className='md:px-20 lg:px-40 2xl:px-80 font-nunitoSans '>
        <Scrolltop />
        <Header />
        <div className='mt-2'>
        <Swiper className='mt-2 '
          spaceBetween={50}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          Navigation={true}
          pagination={true}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide className='px-2 md:px-0 py-2 '>
            <img src={Banner3} alt="" className='w-full' />
          </SwiperSlide>
          <SwiperSlide className='px-2 md:px-0 py-2'>
            <img src={Banner} alt="" className='w-full' />
          </SwiperSlide>
          <SwiperSlide className='px-2 md:px-0 py-2'>
            <img src={Banner2} alt="" className='w-full' />
          </SwiperSlide>
        </Swiper>
        </div>

        <div className='lg:pt-10 p-4 lg:p-0'>
          <a href='https://www.instagram.com/cooperativadinamica/'>
            <div className='p-4 mt-5 lg:pt-5 lg:mt-0 flex rounded-3xl  items-center  justify-around flex-col xl:flex-row  bg-laranja lg:rounded-custom'>
              <h1 className='font-sans text-white text-xl font-semibold sm:text-2xl md:text-3xl    text-center w-auto text-wrap'>
                Acesse nosso Instagram
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-auto gap-4 p-2 bg-red-500">
                <img src={InstagramScreenShot} alt="" className='w-full md:w-auto md:h-36' />
                <img src={InstagramQrCode} alt="" className='w-full md:w-auto md:h-36 ' />
              </div>
            </div>
          </a>
        </div>
        
        <div className='flex flex-col px-4 md:px-0 gap-10 lg:gap-16  pb-10 pt-10'>
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
        <div className='flex justify-center items-center  my-10'>
          <div className='grid grid-cols-2 gap-6 xl:gap-8 lg:grid-cols-3 '>
            <Advantagens number={1} text={"Ser Sócio-cotista"} img={Award} />
            <Advantagens number={2} text={"Opinar e votar nas decisões"} img={TaskSquare} />
            <Advantagens number={3} text={"Oportunidade  de trabalho"} img={Wallet} />
            <Advantagens number={4} text={"Qualificação profissional"} img={Teacher} />
            <Advantagens number={5} text={"Direitos previdenciários"} img={Brif} />
            <Advantagens number={6} text={"Jalecos e calçados profissionais"} img={Security} />
          </div>
        </div>
      </div >
      <LastNews />
      <Footer />
    </>
  )
}

export default App
