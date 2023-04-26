import { useEffect, useState } from "react";
import styles from "../../styles/Donate.module.css"
import { API_URL } from "../../app/@function/wsCode"
import axios from "axios";

function Donate() {
    const [listBank, setListBank] = useState([]);

    useEffect(() => {
        const getBankDetails = async () => {
            const dataBank = await axios.get(`${API_URL}/api/bank/getAll`);
            setListBank(dataBank?.data)
        }
        getBankDetails();
    }, []);


    return (
        <>
            <div className={styles["banner"]}>
                <img src="./bg-donate.png" alt="bg-donate" />
            </div>

            <div className={styles["grid-container"]}>
                {listBank?.map((item, index) =>
                    <a href={"/donate/" + item._id} className={styles["grid-item"]}>
                        <img src={item.logo} alt={item.logo} />
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