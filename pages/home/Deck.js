import React from "react";
import { Swiper, SwiperSlide, Navigation } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { EffectCoverflow } from "swiper/core";
import styles from "../../styles/Home.module.css"
SwiperCore.use([EffectCoverflow]);

export default function Deck(props) {
    var imgs = props.items || [];

    const swap = (index) => {
        if (props.onCardSwapped) props.onCardSwapped(this, props, index);
    };

    const select = () => {
        if (props.onDeckSelected) props.onDeckSelected(this, props);
    };

    return (
        <div>
            <Swiper
                Navigation={true}
                effect={"coverflow"}
                grabCursor={false}
                centeredSlides={true}
                autoHeight={true}
                freeModeSticky={true}
                initialSlide={Math.floor((imgs.length || 0 - 1) / 2) || 0}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 5,
                    stretch: 5,
                    depth: 150,
                    modifier: 2,
                    slideShadows: true
                }}
                height={props.selected ? "300px" : "100px"}
                className={styles.mySwiper}
                onClick={() => {
                    select();
                }}
                onSliderMove={() => {
                    select();
                }}
            >
                {imgs.map((i, index) => (
                    <SwiperSlide
                        key={index}
                        className={
                            props.selected
                                ? styles.swiper_fixed_width_300
                                : styles.swiper_fixed_width_100
                        }
                    >
                        {({ isActive }) => (
                            <div>
                                <div className={styles.slide_overlay}>
                                    <div className={styles.slide_text}>
                                        {isActive && props.selected ? (
                                            i
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src={`https://swiperjs.com/demos/images/nature-${i}.jpg`}
                                        alt={`test number ${i}`}
                                    />
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
