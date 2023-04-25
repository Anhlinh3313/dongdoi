import { scrollView, SizeOfElement } from "@function";
import Link from "next/link";
import React, {
  Fragment,
  useEffect,
  useState,
} from "react";
import IconTop from "./IconMenu/IconTop";
import stylesCss from "../../../styles/MenuCSS/Menu.module.css";
import { API_URL } from "@function/wsCode";

const MenuPC = () => {
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

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={stylesCss["menu-container"]}>
        <div className={stylesCss["navMenu-container"]}>
          <img className={stylesCss.logo} src="/logo.png" alt="logo" />
          <div className={stylesCss["menu-warpper"]}>
            {menuBottom?.map((val, key) => {
              return <Fragment key={key}>{val.element}</Fragment>;
            })}
          </div>
          <div className={stylesCss["menu-toggle"]}>
            <svg
              onClick={toggleMenu}
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc></desc>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
            <div className={showMenu ? stylesCss["menu-toggle-show"] : stylesCss["menu-toggle-hide"]}>
              <span>
                {menuBottom?.map((val, key) => {
                  return val.element;
                })}
              </span>
            </div>
          </div>
        </div>
      </nav >
      {menuScroll && (
        <div
          onClick={() => {
            scrollView.top();
          }}
        >
          <IconTop />
        </div>
      )
      }
    </>
  );
};

export default MenuPC;
