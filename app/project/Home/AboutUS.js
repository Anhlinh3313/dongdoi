import styles from "../../../styles/HomeCSS/AboutUS.module.css";

function AboutUS({ }) {
    return (
        <>
            <div className={styles["aboutUS"]} id="about-us">
                <div className={styles["aboutUS-page"]}>
                    <div className={styles["aboutUS-title"]}>
                        <h2>VỀ CHÚNG TÔI</h2>
                    </div>
                    <div className={styles["aboutUS-line"]}>
                        <div className={styles["line"]}></div>
                    </div>
                    <div className={styles["aboutUS-container"]}>
                        <div className={styles["aboutUS-container-detail"]}>
                            <div className={styles["aboutUS-container-item"]}>
                                <div className={styles["aboutUS-container-item-img"]}>
                                    <img className={styles["aboutUS-item-img"]} src="/img_container1.png"/>
                                </div>
                                <div>
                                    <p className={styles["aboutUS-container-item-text"]}>
                                        Quỹ Thiện Tâm thành lập ngày 03/10/2006 (trên cơ sở chuyển đổi từ Quỹ Thiện Tâm thuộc Công ty Cổ phần Vincom) theo Quyết định số 755 / QĐ-BNV ngày 22/8/2012 của Bộ Nội Vụ.
                                    </p>
                                </div>
                            </div>
                            <div className={styles["aboutUS-container-item"]}>
                                <div className={styles["aboutUS-container-item-img"]}>
                                    <img className={styles["aboutUS-item-img"]} src="/img_container2.png"/>
                                </div>
                                <div>
                                    <p className={styles["aboutUS-container-item-text"]}>
                                        Quỹ Thiện Tâm thành lập ngày 03/10/2006 (trên cơ sở chuyển đổi từ Quỹ Thiện Tâm thuộc Công ty Cổ phần Vincom) theo Quyết định số 755 / QĐ-BNV ngày 22/8/2012 của Bộ Nội Vụ.
                                    </p>
                                </div>
                            </div>
                            <div className={styles["aboutUS-container-item"]}>
                                <div className={styles["aboutUS-container-item-img"]}>
                                    <img className={styles["aboutUS-item-img"]} src="/img_container3.png"/>
                                </div>
                                <div>
                                    <p className={styles["aboutUS-container-item-text"]}>
                                        Quỹ Thiện Tâm thành lập ngày 03/10/2006 (trên cơ sở chuyển đổi từ Quỹ Thiện Tâm thuộc Công ty Cổ phần Vincom) theo Quyết định số 755 / QĐ-BNV ngày 22/8/2012 của Bộ Nội Vụ.
                                    </p>
                                </div>
                            </div>
                            <div className={styles["aboutUS-container-item"]}>
                                <div className={styles["aboutUS-container-item-img"]}>
                                    <img className={styles["aboutUS-item-img"]} src="/img_container4.png"/>
                                </div>
                                <div>
                                    <p className={styles["aboutUS-container-item-text"]}>
                                        Quỹ Thiện Tâm thành lập ngày 03/10/2006 (trên cơ sở chuyển đổi từ Quỹ Thiện Tâm thuộc Công ty Cổ phần Vincom) theo Quyết định số 755 / QĐ-BNV ngày 22/8/2012 của Bộ Nội Vụ.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AboutUS;
