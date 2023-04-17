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
        const menu = data?.map((item, i) => {
          return {
            element: (route) => {
              return (
                <li className={stylesCss["navbar-item"]}>
                  <Link href={`/${item.menuSlug}`} key={item._id}>
                    <a className={stylesCss["headerLink"]}>
                      <div className={stylesCss["menu-item-title"]}>
                        <p className={stylesCss["m-0"]}>{item.menuName}</p>
                        {/*{item.children.length > 0 && (
                          <div className={Styles.menu_sub}>
                            {item.children.length > 0 &&
                              item.children.map((children1) => {
                                return (
                                  <Link
                                    href={`/${item.menuSlug}/${children1.menuSlug}`}
                                    key={children1._id}
                                  >
                                    <div
                                      style={{
                                        padding: "0px 0px",
                                        width: "100%",
                                      }}
                                      className={Styles.menu_sub_item}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          height: "100%",
                                          width: "100%",
                                          justifyContent: "space-between",
                                          padding: "0px 15px",
                                        }}
                                        className={Styles.menu_sub_item_menu}
                                      >
                                        {children1.menuName}
                                        <IconArrow />
                                        {children1.children.length > 0 && (
                                          <div
                                            className={
                                              Styles.menu_sub_item_menu2_sub
                                            }
                                          >
                                            {children1.children.length > 0 &&
                                              children1.children.map(
                                                (children2) => {
                                                  return (
                                                    <Link
                                                      href={`/${item.menuSlug}/${children1.menuSlug}/${children2.menuSlug}`}
                                                      key={children2._id}
                                                    >
                                                      <div
                                                        className={
                                                          Styles.menu_sub_item_menu2_sub_item
                                                        }
                                                      >
                                                        {children2.menuName}
                                                      </div>
                                                    </Link>
                                                  );
                                                }
                                              )}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                          </div>
                        )} */}
                      </div>
                    </a>
                  </Link>
                </li>
              );
            },
            event: () => {},
            status: true,
            path: `/${item.menuSlug}`,
          };
        }); 
        setMenuBottom(menu);
      });
  }, []);

  return (
    <>
     <div>
        <div className={stylesCss["menu-container"]}>
          <div className={stylesCss["navMenu-container"]}>
            <ul className={stylesCss["menu-warpper"]}>
              {menuBottom?.map((val, key) => {
                return (
                  <Fragment key={key}>
                    {val.element(route.asPath === val.path ? true : false)}
                  </Fragment>
                );
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
