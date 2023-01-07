import { Swiper, SwiperSlide } from "swiper/react";
import { Flex } from "@chakra-ui/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TarjetaMobile from "./TarjetaMobile";



const SwiperTvs = ({producto}) => {
    return (
        <Swiper
            effect={"coverflow"}
            navigation={true}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
            >
                {producto.map((prod) => {
                    return <SwiperSlide key={prod.id}>
                                <Flex 
                                    justify="center" 
                                    align="center"
                                    >
                                    <TarjetaMobile key={ prod.id } prod={ prod }/>;
                                </Flex>
                            </SwiperSlide>
                })}
                        
        </Swiper>
    )
}

export default SwiperTvs

