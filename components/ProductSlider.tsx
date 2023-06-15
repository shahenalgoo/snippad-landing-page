import React, { FC, useRef, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

interface ProductSliderProps {

}

const ProductSlider: FC<ProductSliderProps> = () => {
    return (
        <>
            <Swiper
                navigation={true}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 1000,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Navigation]}
            >
                <SwiperSlide className="p-20">
                    <Image src="/snippad1.jpg" width={1152} height={710} quality={100} alt="Snippad" className="rounded-xl" />
                </SwiperSlide>
                <SwiperSlide className="p-20">
                    <Image src="/snippad2.jpg" width={1152} height={710} alt="Snippad" className="rounded-xl" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default ProductSlider;