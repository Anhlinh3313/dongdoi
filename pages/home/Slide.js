import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../../styles/Slide.module.css"
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper/core";
import { Keyboard, Scrollbar } from "swiper";
import { BUNNY_URL } from "../../app/@function/wsCode";
SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

const Deck = ({ listSlide }) => {
    return (
        <div className="swiper-slide">
            {listSlide?.length > 0 && (
                <>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={false}
                        centeredSlides={true}
                        initialSlide={Math.floor((listSlide?.length || 0 - 1) / 2) || 0}
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
                        loop={true}
                        loopedSlides={1}
                    >
                        {listSlide?.map((i, index) => (
                            <SwiperSlide
                                key={index}
                                className={
                                    styles["swiper_fixed_width_300"]
                                }
                            >
                                <div>
                                    <div className={styles["slide_overlay"]}>
                                        <div className={styles["slidetext"]}>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={BUNNY_URL + "/" + i?.thumb} alt={i?.thumb} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-pagination-container"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </>
            )}
            <div className="swiper-pagination-container"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
}
export default Deck