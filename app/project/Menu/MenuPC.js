import { scrollView, SizeOfElement } from "@function";
import Link from "next/link";
import React, {
  Fragment,
  useEffect,
  useState,
} from "react";
import Styles from "./style/Menupc.module.css";
import { useRouter } from "next/router";
import IconTop from "./IconMenu/IconTop";
import stylesCss from "../../../styles/MenuCSS/Menu.module.css";
import { API_URL } from "@function/wsCode";

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

  useEffect(() => {
    fetch(`${API_URL}/api/menu/getAll`)
    .then((res) => res.json())
    .then((data) => {
      const menuList = data?.map((item, i) => {
        return {
          element: (
            <Link href={"#active-type"}>
              <a>
                <div className={stylesCss["menu_bottom_item"]}>{item.menuName}</div>
              </a>
            </Link>
          ),
          event: () => { },
          status: true,
          path: `${item.menuSlug}`,
        }
      });
      setMenuBottom(menuList);
    });
  }, []);
  // const menuList = [
  //   {
  //     element: (
  //       <Link href={"#section-event"}>
  //         <a>
  //           <div className={stylesCss["menu_bottom_item"]}>TIN TỨC - SỰ KIỆN</div>
  //         </a>
  //       </Link>
  //     ),
  //     event: () => { },
  //     status: true,
  //     path: "tin-tuc",
  //   },
  //   {
  //     element: (
  //       <Link href={"#about-us"}>
  //         <a>
  //           <div className={stylesCss["menu_bottom_item"]}>VỀ CHÚNG TÔI</div>
  //         </a>
  //       </Link>
  //     ),
  //     event: () => { },
  //     status: true,
  //     path: "ve-chung-toi",
  //   },
  //   {
  //     element: (
  //       <Link href={"#active-type"}>
  //         <a>
  //           <div className={stylesCss["menu_bottom_item"]}>CÁC LĨNH VỰC HOẠT ĐỘNG</div>
  //         </a>
  //       </Link>
  //     ),
  //     event: () => { },
  //     status: true,
  //     path: "linh-vuc",
  //   },
  //   {
  //     element: (
  //       <Link href={"#contact"}>
  //         <a>
  //           <div className={stylesCss["menu_bottom_item"]}>LIÊN HỆ</div>
  //         </a>
  //       </Link>
  //     ),
  //     event: () => { },
  //     status: true,
  //     path: "lien-he",
  //   },
  // ]

  return (
    <>
      <div className={stylesCss["menu-container"]}>
        <div className={stylesCss["navMenu-container"]}>
          <img className={stylesCss.logo} src="./logo.png" alt="logo" />
          <div className={stylesCss["menu-warpper"]}>
            {menuBottom?.map((val, key) => {
              return  <Fragment key={key}>{val.element}</Fragment>;
            })}
          </div>
        </div>
      </div>
      {menuScroll && (
        <div
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
