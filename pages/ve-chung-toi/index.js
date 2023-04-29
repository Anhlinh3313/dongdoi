import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css"
import { API_URL } from "../../app/@function/wsCode"
import axios from "axios";
import SlideBanner from "./SlideBanner"

function Home() {
    return (
        <>
            <div className={styles["banner"]}>
                <img src="./banner.png" alt="Banner" />
            </div>
            <SlideBanner />
        </>
    );
}

export default Home;