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
import Banner3 from "./assets/Banners/Headline3.svg"
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
      <div className='sm:px-10 lg:px-40 font-nunitoSans '>
        <Scrolltop />
        <Header />
        <Swiper className='mt-10 p-5 mr-5 pb-10 '
          effect={'coverflow'}
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
          <SwiperSlide>
            <img src={Banner3} alt=""  className='w-full'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Banner} alt="" className='w-full'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Banner2} alt="" className='w-full'/>
          </SwiperSlide>
        </Swiper>

        <div className='p-4 lg:mb-10'>
          <div className='px-5 p-12 flex  items-center  flex-col   bg-laranja rounded-3xl lg:flex-row sm:justify- lg:px-10 mr-4'>
            <h1 className='text-white text-3xl m-4 font-semibold md:text-3xl w-auto lg:w-2/5 text-wrap'><a href='https://www.instagram.com/cooperativadinamica/'>Acesse nossas<br className='hidden md:block'/> Redes Sociais</a></h1>
            <div className="flex flex-col lg:flex-row flex-wrap xl:flex-nowrap justify-center w-auto gap-2 md:w-1/2">
              <img src={InstagramScreenShot} alt=""className='w-full sm:h-40 ' />
              <img src={InstagramQrCode} alt="" className='w-full sm:h-40' />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-10 lg:gap-32 px-2 pb-10 lg:px-7 pt-10'>
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
