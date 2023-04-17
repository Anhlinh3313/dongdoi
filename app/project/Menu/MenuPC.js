import { scrollView, SizeOfElement } from "@function";
import Link from "next/link";
import React, {
  Fragment,
  useEffect,
  useState,
} from "react";
import { API_URL } from "@function/wsCode";
import Styles from "./style/Menupc.module.css";
import { useRouter } from "next/router";
import IconTop from "./IconMenu/IconTop";
import stylesCss from "../../../styles/MenuCSS/Menu.module.css";
import logo from "../../../public/logo.png"

const MenuPC = () => {
  const route = useRouter();
  const [menuScroll, setMenuScroll] = useState(false);
  const [menuBottom, setMenuBottom] = useState([]);

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

  const menuList = [
    {
      element: (
        <Link href={"/tin-tuc"}>
          <a>
            <div className={Styles.menu_bottom_item}>TIN TỨC - SỰ KIỆN</div>
          </a>
        </Link>
      ),
      event: () => { },
      status: true,
      path: "tin-tuc",
    },
    {
      element: (
        <Link href={"/ve-chung-toi"}>
          <a>
            <div className={Styles.menu_bottom_item}>VỀ CHÚNG TÔI</div>
          </a>
        </Link>
      ),
      event: () => { },
      status: true,
      path: "ve-chung-toi",
    },
    {
      element: (
        <Link href={"/linh-vuc"}>
          <a>
            <div className={Styles.menu_bottom_item}>CÁC LĨNH VỰC HOẠT ĐỘNG</div>
          </a>
        </Link>
      ),
      event: () => { },
      status: true,
      path: "linh-vuc",
    },
    {
      element: (
        <Link href={"/lien-he"}>
          <a>
            <div className={Styles.menu_bottom_item}>LIÊN HỆ</div>
          </a>
        </Link>
      ),
      event: () => { },
      status: true,
      path: "lien-he",
    },
  ]

  return (
    <>
      <div>
        <div className={stylesCss["menu-container"]}>
          <div className={stylesCss["navMenu-container"]}>
            <img className={stylesCss.logo} src={logo.src} alt="logo" />
            <ul className={stylesCss["menu-warpper"]}>
              {menuList?.map((val, key) => {
                return <Fragment key={key}>{val.element}</Fragment>;
              })}
            </ul>
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
    </>
  );
};

export default MenuPC;
