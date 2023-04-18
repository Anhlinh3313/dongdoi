import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css"
import BannerSlider from "./BannerSlide"
import Slide from "./Slide"
function Home() {
    const [selected, setSelected] = useState(1);
    // create list of images
    var imgs = [],
        length = 5,
        start = 1;
    while (length--) imgs[length] = length + start;
    const [deck, setDeck] = useState([imgs.slice(0, 4), imgs.slice(4, 8)]);

    const selectDeck = (sender, props) => {
        if (props.id !== selected) setSelected(props.id);
    };

    const swapCard = (sender, props, index) => {
        const sourceClone = Array.from(props.id === 1 ? deck[0] : deck[1]);
        const destClone = Array.from(props.id === 1 ? deck[1] : deck[0]);
        const [removed] = sourceClone.splice(index, 1);
        const destIndex = Math.floor((destClone.length - 1) / 2) || 0;

        destClone.splice(destIndex, 0, removed);

        setDeck(
            props.id === 1 ? [sourceClone, destClone] : [destClone, sourceClone]
        );
        setSelected(props.id === 1 ? 2 : 1);
    };


    return (
        <>
            <div className="body">
                <div className={styles.banner}>
                    <img src="./banner.png" alt="Banner" />
                </div>
                <div className={styles.banner_sider}>
                    <div className={styles.banner_sider_connent}>
                        <BannerSlider />
                    </div>
                </div>
                <section className={styles.event} id="section-event">
                    <div className={styles.event_text}>
                        <h1>TIN TỨC - SỰ KIỆN</h1>
                        <div>Hãy cập nhật những dự án và chương trình mới nhất của chúng tôi. Và đồng hành lan tỏa những điều thiện!</div>
                        <div className={styles.event_line}></div>
                    </div>

                    <div className={styles.event_slide}>
                        <Slide />
                    </div>

                </section>
            </div>
        </>
    );
}
export default Home;
