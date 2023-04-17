import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Row, Col, Divider } from "antd";
import styles from "../../../styles/Home.module.css";
import { ConvertPath } from "../../../helpers/functions";
import { BUNNY_URL } from "@function/wsCode";

const TransferInfo = ({ listTransfer }) => {
  return (
    <>
      <h2 className="title-heading">
        <Link href={"/esport"}>ESport</Link>
      </h2>
      {listTransfer.slice(0, 5).map((item, index) => (
        <div key={index} className={styles["new-news"]}>
          <Row className={styles["news-content"]} gutter={10}>
            <Col md={8} xs={24}>
              <Link href={`/${item.slug}`}>
                <div className="new-card-item-hidden1 card-item-transfer">
                  <img
                    alt={item.title}
                    src={item.image}
                    width="140px"
                    height="80px"
                  />
                </div>
              </Link>
            </Col>
            <Col md={16}>
              <Link href={`/${item.slug}`}>
                <p className={styles["title"]} style={{ marginLeft: 0 }}>
                  {item.title}
                </p>
              </Link>
            </Col>
          </Row>
          <Divider />
        </div>
      ))}
    </>
  );
};

export default TransferInfo;
