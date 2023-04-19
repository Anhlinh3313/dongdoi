import { ImgIconVietNam, ImgLogo } from "@image";
import { Drawer, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, {
  Fragment,
  useEffect,
  useState,
} from "react";

const DrawerMenu = ({ onClose, visible, styles }) => {

  const menuList = [
    {
      element: (
        <Link href={"#section-event"}>
          <a>
            <div className={styles.menu_bottom_item}>TIN TỨC - SỰ KIỆN</div>
          </a>
        </Link>
      ),
      event: () => { },
      status: true,
      path: "tin-tuc",
    },
    {
      element: (
        <Link href={"#about-us"}>
          <a>
            <div className={styles.menu_bottom_item}>VỀ CHÚNG TÔI</div>
          </a>
        </Link>
      ),
      event: () => { },
      status: true,
      path: "ve-chung-toi",
    },
    {
      element: (
        <Link href={"#active-type"}>
          <a>
            <div className={styles.menu_bottom_item}>CÁC LĨNH VỰC HOẠT ĐỘNG</div>
          </a>
        </Link>
      ),
      event: () => { },
      status: true,
      path: "linh-vuc",
    },
    {
      element: (
        <Link href={"#contact"}>
          <a>
            <div className={styles.menu_bottom_item}>LIÊN HỆ</div>
          </a>
        </Link>
      ),
      event: () => { },
      status: true,
      path: "lien-he",
    },
  ]
  return (
    <Drawer
      placement={"right"}
      width={"100%"}
      height={"100%"}
      onClose={onClose}
      visible={visible}
    >
      <Menu>
        {menuList?.map((val, key) => {
          return <Menu.Item onClick={onClose}><Fragment key={key}>{val.element}</Fragment></Menu.Item>;
        })}

        {/* <Menu.Item onClick={onClose}><Link href={"/bong-da"}><a>Bóng đá</a></Link></Menu.Item>
        <Menu.Item onClick={onClose}> <Link href={"/nhan-dinh-bong-da"}><a>Nhận định bóng đá</a></Link></Menu.Item>
        <Menu.Item onClick={onClose}><Link href={"/hau-truong"}><a>Hậu trường</a></Link></Menu.Item>
        <Menu.Item onClick={onClose}><Link href={"/chuyen-nhuong"}><a>Chuyển nhượng</a></Link></Menu.Item>
        <Menu.Item onClick={onClose}><Link href={"/video"}><a>Video</a></Link></Menu.Item> */}
      </Menu>
    </Drawer>
  );
};

export default DrawerMenu;
