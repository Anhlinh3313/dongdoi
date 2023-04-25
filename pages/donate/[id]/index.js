import React, { useState } from "react";
import { message } from 'antd';
import styles from "../../../styles/Donate.module.css"
import Listbank from "./ListBank"
import { useParams } from 'react-router-dom';


function DonateDetail() {
    const [bankId, setBankId] = useState(1)
    const [activeBank, setActiveBank] = useState(1);

    const listBank = [
        {
            id: 1,
            name: "BIDV",
            img: "/BIDV.png",
        },
        {
            id: 2,
            name: "Vietinbank",
            img: "/Vietin.png",
        },
        {
            id: 3,
            name: "ACB",
            img: "/ACB.png",
        },
        {
            id: 4,
            name: "Vietcombank",
            img: "/Vietcom.png",
        },
        {
            id: 5,
            name: "Techcombank",
            img: "/Techcom.png",
        },
        {
            id: 6,
            name: "MBbank",
            img: "/MB.png",
        },
    ]

    function setBank(id) {
        setBankId(id)
        setActiveBank(id)
    }

    return (
        <div className={styles["donate-detail"]}>
            <div className={styles["donate-detail-content"]}>
                <ul className={styles["donate-detail-listbank"]}>
                    {listBank?.map((item, index) =>
                        <li key={item.id} className={`${styles["donate-detail-listbank-content"]} ${item.id === activeBank ? styles["bank-active"] : ""}`} onClick={() => setBank(item.id)}>
                            <img src={item?.img} alt={item?.img} />
                            {item.id === activeBank
                                ?
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 0C27.1425 0 35 7.8575 35 17.5C35 27.1425 27.1425 35 17.5 35C7.8575 35 0 27.1425 0 17.5C0 7.8575 7.8575 0 17.5 0ZM14.3675 22.75C13.86 23.2575 13.86 24.0975 14.3675 24.605C14.63 24.8675 14.9625 24.99 15.295 24.99C15.6275 24.99 15.96 24.8675 16.2225 24.605L22.4 18.4275C22.9075 17.92 22.9075 17.08 22.4 16.5725L16.2225 10.395C15.715 9.8875 14.875 9.8875 14.3675 10.395C13.86 10.9025 13.86 11.7425 14.3675 12.25L19.6175 17.5L14.3675 22.75Z" fill="#494949" />
                                </svg>
                                : <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 0C27.1425 0 35 7.8575 35 17.5C35 27.1425 27.1425 35 17.5 35C7.8575 35 0 27.1425 0 17.5C0 7.8575 7.8575 0 17.5 0ZM14.3675 22.75C13.86 23.2575 13.86 24.0975 14.3675 24.605C14.63 24.8675 14.9625 24.99 15.295 24.99C15.6275 24.99 15.96 24.8675 16.2225 24.605L22.4 18.4275C22.9075 17.92 22.9075 17.08 22.4 16.5725L16.2225 10.395C15.715 9.8875 14.875 9.8875 14.3675 10.395C13.86 10.9025 13.86 11.7425 14.3675 12.25L19.6175 17.5L14.3675 22.75Z" fill="#FFDB20" />
                                </svg>
                            }
                        </li>
                    )}
                </ul>
                <Listbank id={bankId} />
            </div>
        </div>
    );
}

export default DonateDetail;