import { useEffect, useState } from "react";
import styles from "../../styles/Post.module.css"
import { API_URL } from "../../app/@function/wsCode"
import axios from "axios";

function Home() {

    return (
        <>
            <div className={styles["banner"]}>
                <img src="./banner-post.png" alt="Banner" />
            </div>
        </>
    );
}

export default Home;