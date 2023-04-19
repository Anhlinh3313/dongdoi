import { scrollView, SizeOfElement } from "@function";
import Link from "next/link";
import React, {
    Fragment,
    useEffect,
    useState,
} from "react";
import Styles from "./style/MenuMobile.module.css";
import { useRouter } from "next/router";
import IconTop from "./IconMenu/IconTop";
import stylesCss from "../../../styles/MenuCSS/MenuMobile.module.css";
import DrawerMenu from "./Drawer";

const MenuMobile = () => {
    const route = useRouter();
    const [menuScroll, setMenuScroll] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let { elementBottom } = SizeOfElement(document.body);
            if (elementBottom > 110) {
                setMenuScroll(true);
            } else {
                setMenuScroll(false);
            }
        });
    }, [typeof window !== "undefined" && window]);



    return (
        <>
            <div>
                <div className={stylesCss["menu-container"]}>
                    <div className={stylesCss["navMenu-container"]}>
                        <img className={stylesCss.logo} src="./logo.png" alt="logo" />
                        <svg
                            onClick={() => setIsVisible(!isVisible)}
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="30px"
                            width="30px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <desc></desc>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="4" y1="6" x2="20" y2="6"></line>
                            <line x1="4" y1="12" x2="20" y2="12"></line>
                            <line x1="4" y1="18" x2="20" y2="18"></line>
                        </svg>
                    </div>
                </div>
            </div>
            {menuScroll && (
                <div
                    className={Styles.arowTop}
                    onClick={() => {
                        scrollView.top();
                    }}
                >
                    <IconTop />
                </div>
            )}
            {isVisible ? (
                <DrawerMenu
                    styles={Styles}
                    visible={isVisible}
                    onClose={() => setIsVisible(false)}
                />
            ) : (
                ""
            )}
        </>
    );
};

export default MenuMobile;
