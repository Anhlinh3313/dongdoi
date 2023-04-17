import { useEffect, useState } from "react";
import banner from "../../public/banner.png";
import styles from "../../styles/Home.module.css"
import Slides from "./Slides"

function Home({ }) {
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }

    return (
        <>
            <div className="body">
                <div className={styles.banner}>
                    <img src={banner.src} alt="Banner" />
                    <div className={styles.banner_text}>
                        <h1>Chia sẻ từ tâm</h1>
                        <h1>Lan tỏa điều tốt đẹp</h1>
                    </div>
                </div>
                <div className={styles.event}>
                    <Slides />
                </div>

            </div>
        </>
    );
}
export default Home;
