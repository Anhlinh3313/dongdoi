import { ImgIconVietNam, ImgLogo } from "@image";
import { Drawer, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DrawerMenu = ({ onClose, visible, styles }) => {
  return (
    <Drawer
      title={
        <div className={styles["menu-mobile-Drawer"]}>
          <Image src={ImgIconVietNam} />
          <Image className={styles.img_da} src={ImgLogo} />
        </div>
      }
      placement={"right"}
      width={"100%"}
      height={"100%"}
      onClose={onClose}
      visible={visible}
    >
      <Menu>
        <Menu.Item onClick={onClose}><Link href={"/lich-thi-dau"}><a>Lịch thi đấu</a></Link></Menu.Item>
        <Menu.Item onClick={onClose}><Link href={"/bong-da"}><a>Bóng đá</a></Link></Menu.Item>
        <Menu.Item onClick={onClose}> <Link href={"/nhan-dinh-bong-da"}><a>Nhận định bóng đá</a></Link></Menu.Item>
        <Menu.Item onClick={onClose}><Link href={"/hau-truong"}><a>Hậu trường</a></Link></Menu.Item>
        <Menu.Item onClick={onClose}><Link href={"/chuyen-nhuong"}><a>Chuyển nhượng</a></Link></Menu.Item>
        <Menu.Item onClick={onClose}><Link href={"/video"}><a>Video</a></Link></Menu.Item>
      </Menu>
    </Drawer>
  );
};

export default DrawerMenu;
