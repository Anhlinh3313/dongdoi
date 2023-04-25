import { useEffect, useState } from "react";
import styles from "../../../styles/Donate.module.css"

function DonateDetail({ id }) {
    const [bankInfo, setBankInfo] = useState([]);

    const listBank = [
        {
            id: 1,
            name: "BIDV",
            img: "/BIDV.png",
            qrCode: "/BIDV.png",
            accountHolder: "Lê Văn A",
            accountNumber: "123456789"
        },
        {
            id: 2,
            name: "Vietinbank",
            img: "/Vietin.png",
            qrCode: "/BIDV.png",
            accountHolder: "Lê Văn B",
            accountNumber: "123456789"
        },
        {
            id: 3,
            name: "ACB",
            img: "/ACB.png",
            qrCode: "/BIDV.png",
            accountHolder: "Lê Văn C",
            accountNumber: "123456789"
        },
        {
            id: 4,
            name: "Vietcombank",
            img: "/Vietcom.png",
            qrCode: "/BIDV.png",
            accountHolder: "Lê Văn D",
            accountNumber: "123456789"
        },
        {
            id: 5,
            name: "Techcombank",
            img: "/Techcom.png",
            qrCode: "/BIDV.png",
            accountHolder: "Lê Văn E",
            accountNumber: "123456789"
        },
        {
            id: 6,
            name: "MBbank",
            img: "/MB.png",
            qrCode: "/BIDV.png",
            accountHolder: "Lê Văn F",
            accountNumber: "123456789"
        },
    ]

    useEffect(() => {
        listBank.forEach((item, index) => {
            if (item.id === id) {
                setBankInfo(item)
            }
        })
    }, [id]);

    function handleCopyBankNumber() {
        // Lấy nội dung của phần tử có id là "bank-number"
        const copyText = document.querySelector('#bank-number').textContent;

        // Sao chép nội dung vào clipboard
        navigator.clipboard.writeText(copyText)
            .then(() => {
                message.success('Đã sao chép thành công:', copyText);
            })
            .catch((error) => {
                console.error('Lỗi khi sao chép:', error);
            });
    }

    function handleCopyBankName(event) {
        const copyText = document.querySelector('#bank-name').textContent;

        navigator.clipboard.writeText(copyText)
            .then(() => {
                message.success('Đã sao chép thành công:', copyText);
            })
            .catch((error) => {
                console.error('Lỗi khi sao chép:', error);
            });
    }

    function downloadImage(link) {
        const downloadLink = document.createElement("a");
        downloadLink.href = link;
        downloadLink.download = "image.jpg";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }


    return (
        <div className={styles["listbank-details"]}>
            <h1>THÔNG TIN CHUYỂN KHOẢN</h1>
            <div className={styles["listbank-details-content"]}>
                <div className={styles["listbank-content-item"]}>
                    <div className={styles["listbank-item-info"]}>
                        <h5>NGÂN HÀNG CHUYỂN KHOẢN</h5>
                        <h6>{bankInfo?.name}</h6>

                        <h5>SỐ TÀI KHOẢN NGƯỜI NHẬN</h5>
                        <div className={styles["bank-number"]}>
                            <h6 id="bank-number">{bankInfo?.accountNumber}</h6>
                            <img src="/copy-icon.png" onClick={handleCopyBankNumber} alt="copy-icon" />
                        </div>


                        <h5>TÊN NGƯỜI NHẬN</h5>
                        <div className={styles["bank-name"]}>
                            <h6 id="bank-name">{bankInfo?.accountHolder}</h6>
                            <img onClick={handleCopyBankName} src="/copy-icon.png" alt="copy-icon" />
                        </div>
                    </div>
                    <div className={styles["listbank-item-code"]}>
                        <img className={styles["qrCode"]} src="/qrcode.png" alt="qr_code" />
                        <h5>quét mã để lấy thông tin</h5>
                        <button onClick={() => downloadImage(bankInfo?.qrCode)}>Tải xuống</button>
                    </div>
                </div>

                <div className={styles["warnning"]}>
                    <h2>!! CHÚ Ý !!</h2>
                    <h5>Kiểm tra đúng số tài khoản và tên người nhận</h5>
                </div>
            </div>
        </div>
    );
}

export default DonateDetail;
