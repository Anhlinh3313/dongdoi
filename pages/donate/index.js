import { useEffect, useState } from "react";
import styles from "../../styles/Donate.module.css"
import { API_URL } from "../../app/@function/wsCode"
import axios from "axios";
import Item from "antd/lib/list/Item";

function Donate() {
    const listBank = [
        {
            id: 1,
            img: "/BIDV.png",
        },
        {
            id: 2,
            img: "/Vietin.png"
        },
        {
            id: 3,
            img: "/ACB.png"
        },
        {
            id: 4,
            img: "/Vietcom.png"
        },
        {
            id: 5,
            img: "/Techcom.png"
        },
        {
            id: 6,
            img: "/MB.png"
        },
    ]


    return (
        <>
            <div className={styles["banner"]}>
                <img src="./bg-donate.png" alt="bg-donate" />
            </div>

            <div className={styles["grid-container"]}>
                {listBank?.map((item, index) =>
                    <a href={"/donate/" + item.id} className={styles["grid-item"]}>
                        <img src={item.img} alt={item.img} />
                    </a>
                )}

            </div>

            <div className={styles["footer-image"]}>
                <div className={styles["footer-iamge-item"]}>
                    <img src="./footer-image-1.png" />
                    <img src="./footer-image-2.png" />
                </div>
            </div>

        </>
    );
}

export default Donate;