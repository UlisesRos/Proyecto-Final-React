import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Link } from '@chakra-ui/layout';
//import style
import 'swiper/css';
import '../../css/Home.css';

//images
import img1 from '../../img/imgHome/1.png'
import img2 from '../../img/imgHome/2.png'
import img3 from '../../img/imgHome/3.png'
import img4 from '../../img/imgHome/4.png'
import BotonOfertas from './BotonOfertas';
import BotonPediLaTuya from './BotonPediLaTuya';
import BotonPromoTv from './BotonPromoTv';



const HomeSlider = () => {
    return (
    <>
        <div className='home' style={{ width: '100%', heigth: '100vh', overflow: 'hidden',backgroundColor: 'var(--backg-second-color)',}}>
            <Swiper
            style={{
                "--swiper-navigation-color": "black",
                "--swiper-navigation-size": "1.3rem",
            }}
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide style={{height:'75vh'}}>
                    <img src={img1} style={{width: '100%', background: 'cover',}} alt="" />
                    <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'center',
                        alignItems: "center",
                        padding: '5%',
                        background: 'linear-gradient(-45deg, #504375 0, #504375 50%, #331d4a 0, #331d4a 50%)',
                    }}>
                <p style={{
                    color: 'var(--third-color)',
                    fontFamily: 'var(--first-font)',
                    fontSize: '2rem',
                    borderRadius: '10px',
                    width: '70%',
                    heigth: '2rem',
                    textAlign: 'center',
                }}><b>Tu futuro a sólo un click</b></p>
                </div>
                </SwiperSlide>
                <SwiperSlide style={{height:'75vh'}}>
                <img src={img2} style={{width: '100%', background: 'cover'}} alt="" />
                <div className="divsMobile" style={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'center',
                        alignItems:"center",
                        padding: '5%',
                        background: 'linear-gradient(-45deg, #504375 0, #504375 50%, #331d4a 0, #331d4a 50%)',
                    }}>
                <Link href="#SeccionDestacados" className="links"> <BotonOfertas/> </Link>
                </div>
                </SwiperSlide>
                <SwiperSlide style={{height:'75vh'}}>
                <img src={img3} style={{width: '100%',}} alt="" />
                <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'center',
                        alignItems:"center",
                        padding: '5%',
                        background: 'linear-gradient(-45deg, #504375 0, #504375 50%, #331d4a 0, #331d4a 50%)',
                    }}>
                <BotonPediLaTuya/>
                </div>
                </SwiperSlide>
                <SwiperSlide style={{height:'75vh'}}>
                <img src={img4} style={{width: '100%',}} alt="" />
                <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'center',
                        alignItems:"center",
                        padding: '5%',
                        background: 'linear-gradient(-45deg, #504375 0, #504375 50%, #331d4a 0, #331d4a 50%)',
                    }}>
                <Link href="#SeccionTvs" className="links"> <BotonPromoTv/> </Link>
                </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}

export default HomeSlider