import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../../styles/Home.module.css"
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper/core";
import { Keyboard, Scrollbar } from "swiper";
SwiperCore.use([EffectCoverflow, Navigation, Pagination]);


export default function Deck() {

    const listSlide = [
        {
            image: "./slide-5.png"
        },
        {
            image: "./slide-4.png"
        },
        {
            image: "./slide-1.png"
        },
        {
            image: "./slide-3.png"
        },
        {
            image: "./slide-2.png"
        },
    ]

    return (
        <div className="swiper-slide">
            <Swiper
                effect={"coverflow"}
                grabCursor={false}
                centeredSlides={true}
                // autoHeight={true}
                initialSlide={Math.floor((listSlide.length || 0 - 1) / 2) || 0}
                slidesPerView={"auto"}
                slidesPerGroupSkip={1}
                keyboard={{
                    enabled: true,
                }}
                coverflowEffect={{
                    rotate: 5,
                    stretch: 5,
                    depth: 150,
                    modifier: 2,
                    slideShadows: true
                }}
                height={300}
                scrollbar={true}
                navigation={{
                    prevEl: '.swiper-slide .swiper-button-prev',
                    nextEl: '.swiper-slide .swiper-button-next'
                }}
                pagination={{
                    el: '.swiper-pagination-container',
                    clickable: true
                }}
                modules={[Keyboard, Scrollbar]}
                className="mySwiperSlide"
            >
                {listSlide.map((i, index) => (
                    <SwiperSlide
                        key={index}
                        className={
                            styles.swiper_fixed_width_300
                        }
                    >
                        <div>
                            <div className={styles.slide_overlay}>
                                <div className={styles.slidetext}>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={i.image}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination-container"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
}
