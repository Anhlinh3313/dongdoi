import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css"
import BannerSlider from "./BannerSlide"
import Slide from "./Slide"
function Home() {

    return (
        <>
            <div className="body">
                <div className={styles["banner"]}>
                    <img src="./banner.png" alt="Banner" />
                </div>
                <div className={styles["banner_sider"]}>
                    <div className={styles["banner_sider_connent"]}>
                        <BannerSlider />
                    </div>
                </div>
                <section className={styles["event"]} id="section-event">
                    <div className={styles["event_text"]}>
                        <h1>TIN TỨC - SỰ KIỆN</h1>
                        <div>Hãy cập nhật những dự án và chương trình mới nhất của chúng tôi. Và đồng hành lan tỏa những điều thiện!</div>
                        <div className={styles["event_line"]}></div>
                    </div>

                    <div className={styles["event_slide"]}>
                        <Slide />
                    </div>

                </section>
            </div>
        </>
    );
}
export default Home;
