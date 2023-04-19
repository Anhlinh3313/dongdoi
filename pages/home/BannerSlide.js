import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

function SwiperComponent() {
    const listSlide = [
        {
            image: "./banner-slide-1.png"
        },
        {
            image: "./banner-slide-2.png"
        },
        {
            image: "./banner-slide-1.png"
        },
        {
            image: "./banner-slide-2.png"
        },
        {
            image: "./banner-slide-1.png"
        },
        {
            image: "./banner-slide-2.png"
        },
        {
            image: "./banner-slide-1.png"
        },
        {
            image: "./banner-slide-2.png"
        },
    ]

    return (
        <div className="swiper-banner">
            <Swiper
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                spaceBetween={30}
                grabCursor={true}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    }

                }}
                navigation={{ nextEl: '.swiper-banner .swiper-button-next', prevEl: '.swiper-banner .swiper-button-prev' }}
                className="mySwiper"

            >
                {listSlide?.map((value, index) => (
                    <SwiperSlide key={index}><img src={value.image} /></SwiperSlide>
                ))}

            </Swiper>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
}

export default SwiperComponent;
