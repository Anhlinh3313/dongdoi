import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllGroup } from "stores/group";
import { setDataApp } from "redux/AppReducer";

const HomeSchema = (props) => {

  const [schema, setSchema] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/schema/getByPage/home`)
      .then((data) => {
        setSchema(data.data);
      });
  }, []);

  useEffect(() => {
    getAllGroup().then((res) => {
      if((res.status === "success")){
        dispatch(setDataApp({ groups: res.data}))
      }
    })
  },[dispatch]);
  
  return (
    <>
      <div>
        <Head>
          <title>
            dong doi{" "}
          </title>
          <meta
            name="description"
            content="Web tin tức bóng đá, cập nhật liên tục 24h, nhanh nhất Việt nam"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="canonical"
            href={`${process.env.NEXT_PUBLIC_SCHEMA_URL}`}
          />
          <meta
            name="keywords"
            content="bong da,bongda,tiso,nhan dinh bong da,lich thi dau, bóng đá, tỉ số"
          />
          <meta
            name="description"
            content="Bóng đá: cập nhật tin tức bóng đá, nhận định bóng đá, lịch thi đấu"
          ></meta>
          <meta
            name="COPYRIGHT"
            content="Copyright (C) 2007 thethao789.com"
          ></meta>
          <meta name="RATING" content="GENERAL"></meta>
          <meta name="geo.placename" content="ho chi minh"></meta>
          <meta name="robots" content="index,follow,noydir,noodp"></meta>
          <meta
            property="og:description"
            content="Bóng đá: cập nhật tin tức bóng đá, nhận định bóng đá, lịch thi đấu"
          ></meta>
          <meta
            property="og:site_name"
            content={`${process.env.NEXT_PUBLIC_SCHEMA_NAME}`}
          ></meta>
          <meta
            property="og:url"
            content={`${process.env.NEXT_PUBLIC_SCHEMA_URL}`}
          ></meta>
          <meta
            property="og:title"
            content="Thể thao 789 - Tin bóng đá, nhận định thể thao mới nhất"
          ></meta>
          <meta
            name="robots"
            content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
          ></meta>
          {schema
            ? schema.map((item, index) => {
                return (
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: item.script,
                    }}
                    key={index}
                  ></script>
                );
              })
            : null}
        </Head>
      </div>
    </>
  );
};

export default HomeSchema;
