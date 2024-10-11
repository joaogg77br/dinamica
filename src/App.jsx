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
      <div className='md:px-20 lg:px-52 2xl:px-80 font-nunitoSans '>
        <Scrolltop />
        <Header />
        <Swiper className='mt-10  mr-10 pb-10 '
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
          <SwiperSlide className='lg:pr-8 pl-2   lg:pt-5'>
            <img src={Banner3} alt="" className='w-full' />
          </SwiperSlide>
          <SwiperSlide className='lg:pr-8 pl-2   lg:pt-5'>
            <img src={Banner} alt="" className='w-full' />
          </SwiperSlide>
          <SwiperSlide className='lg:pr-8 pl-2   lg:pt-5'>
            <img src={Banner2} alt="" className='w-full' />
          </SwiperSlide>
        </Swiper>

        <div className='px-2 lg:pt-10'>
          <a href='https://www.instagram.com/cooperativadinamica/'>
            <div className='px-5 pb-10 mt-5 lg:pt-10 pl-20 lg:mt-0 flex  items-center  flex-col  bg-laranja rounded-custom lg:flex-row sm:justify-center lg:px-14 lg:mr-5'>
              <h1 className='font-sans text-white text-xl m-4 font-semibold md:text-2xl w-auto lg:w-2/5 text-wrap 2xl:text-3xl'>
                Acesse nossas
                <br className='hidden md:block' /> Redes Sociais
              </h1>
              <div className="flex flex-col lg:flex-row flex-wrap xl:flex-nowrap justify-center gap-4 w-auto">
                <img src={InstagramScreenShot} alt="" className='w-full sm:h-40 2xl:h-48 object-cover' />
                <img src={InstagramQrCode} alt="" className='w-full sm:h-40 2xl:h-48 object-cover lg:mr-10' />
              </div>
            </div>
          </a>
        </div>
        
        <div className='flex px-4 flex-col gap-10 lg:gap-16 pl-3 pb-10 lg:pr-6 pt-10'>
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
          <div className='grid grid-cols-2 gap-6 xl:gap-8 sm:grid-cols-3 '>
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
