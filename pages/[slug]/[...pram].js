import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import VirtualList from "rc-virtual-list";
import styles from "../../styles/tin-the-thao.module.css";
import { Row, Col, List } from "antd";
// import WatchMoreInfo from "../../app/project/WatchMoreInfo";
import { ConvertPath } from "../../helpers/functions";
import Head from "next/head";
import { menuTabFotball } from "../../app/@function/constant";
import PageSchema from "../../app/project/PageSchema";
import {
  getAllMenuByParent,
  getAllMenuByParentId,
  getListFootball,
  getListFootballByParentSlug,
  getNumberOfReader,
  getPostMostView,
} from "../../stores/bongda";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spin } from "antd";
import { getMenuBySlug } from "../../stores/post";
import clsx from "clsx";

const SportFootballInfo = ({
  firstItem,
  listFootball,
  listFootballOrder,
  listMenuParent,
  listMenuChildren,
  keyword,
  description,
  slugChildren,
  slug,
  menu,
}) => {
  const route = useRouter();
  const [data, setData] = useState(listFootball ?? []);
  const [listDataMenu, setListDataMenu] = useState(listMenuParent ?? []);
  const [listDataMenuChildren, setListDataMenuChildren] = useState(
    listMenuChildren ?? []
  );
  const [infinity, setInfinity] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [thisSlug, setSlug] = useState("");
  const [hasMore, setHasMore] = useState(
    listFootball.length < pageSize - 1 ? false : true
  );

  useEffect(() => {
    const appendData = () => {
      setData(listFootball);
      setListDataMenu(listMenuParent);
      setListDataMenuChildren(listMenuChildren);
      setSlug(slug);
    };
    return appendData();
  }, [data, listMenuParent]);

  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === 400) {
      setData(data);
    }
  };

  const getMorePost = async () => {
    try {
      setPageIndex(pageIndex + 1);
      const dataVideo = await getListFootball(pageSize, pageIndex + 1);
      dataVideo.map((item, i) => {
        infinity.push(item);
      });
      if (dataVideo.length == 0 || dataVideo === false) {
        setHasMore(false);
      }
      setData([...data, ...dataVideo]);
    } catch (error) {
      setHasMore(false);
    }
  };

  return (
    <>
      <PageSchema keyword={keyword} description={description} slug={slug} />
      <div className="body">
        <h1 className="title-heading">{menu.menuName}</h1>

        <div className={styles.menutab}>
          {listDataMenu.map((val, idx) => {
            return (
              <Link key={idx} href={`/${slug}/${val.pram}`}>
                <a>
                  <div
                    className={
                      styles.menutabitem +
                      " " +
                      (route.query.pram[0] === val.pram
                        ? styles.menutabitemchecked
                        : "")
                    }
                    key={idx}
                  >
                    <div className={styles.menutabitemtitle}>{val.title}</div>
                    <div
                      className={
                        styles.menutabitem +
                        " " +
                        (route.query.pram[0] === val.pram
                          ? styles.menutabitemhoverchecked
                          : "")
                      }
                    ></div>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>

        <div className={styles.menutabBatter}>
          {listDataMenuChildren.map((val, idx) => {
            return (
              <Link key={idx} href={`/${slug}/${slugChildren}/${val.id}`}>
                <a style={{ color: "black" }}>
                  <div>{val.title}</div>
                </a>
              </Link>
            );
          })}
        </div>
        <Row gutter={20}>
          <Col md={16}>
            {firstItem.title ? (
              <Row style={{ background: "#e8eaef" }} gutter={10}>
                <Col md={16}>
                  <Link href={`/${firstItem?.slug}`}>
                    <img alt={firstItem?.title} src={firstItem?.image} />
                  </Link>
                </Col>
                <Col md={8}>
                  <Link href={`/${firstItem.slug}`}>
                    <p className={styles["title"]}>{firstItem?.title}</p>
                  </Link>
                  <div
                    style={{ color: "#4f4f4f" }}
                    dangerouslySetInnerHTML={{ __html: firstItem?.description }}
                    className={styles["description"]}
                  ></div>
                </Col>
              </Row>
            ) : null}
            <Row style={{ marginTop: 30 }}>
              <List>
                <InfiniteScroll
                  dataLength={data.length}
                  next={getMorePost}
                  hasMore={hasMore}
                  loader={
                    <div style={{ textAlign: "center" }}>
                      <Spin />
                    </div>
                  }
                  endMessage={
                    <h4 style={{ textAlign: "center" }}>
                      Không còn tin tức để hiển thị.
                    </h4>
                  }
                  key={0}
                >
                  {data.map((item) => (
                    <List.Item key={item.title} className={styles["new-item"]}>
                      <Row>
                        <Col md={8}>
                          <List.Item.Meta
                            avatar={
                              <Link href={`/${item.slug}`}>
                                <img alt={item.title} src={item.image} />
                              </Link>
                            }
                          />
                        </Col>
                        <Col md={16}>
                          <Link href={`/${item.slug}`}>
                            <p
                              className={clsx(
                                styles["title"],
                                styles["titleMargin"]
                              )}
                            >
                              {item.title}
                            </p>
                          </Link>
                          <div
                            className={styles["description"]}
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></div>
                          <p className={styles["text-timer"]}>{item.timer}</p>
                        </Col>
                      </Row>
                    </List.Item>
                  ))}
                </InfiniteScroll>
              </List>
            </Row>
          </Col>
          {/* <WatchMoreInfo listWatchMore={listFootballOrder ?? []} /> */}
        </Row>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const [
    listFootball,
    listFootballOrder,
    listMenuParent,
    menu,
    listMenuChildren,
  ] = await Promise.all([
    getListFootballByParentSlug(params.pram[params.pram.length - 1], 1, 6),
    getPostMostView(),
    getAllMenuByParent(params.slug),
    getMenuBySlug(params.slug),
    getAllMenuByParentId(params.pram[0]),
  ]);
  const firstItem = listFootball ? listFootball.shift() : {};
  const keyword = ["bongda", "bóng đá", "banh"];
  const description = "Xem tin tức bóng đá";
  const slug = menu?.menuSlug;
  const slugChildren = params.pram[0] ? params.pram[0] : "";
  return {
    props: {
      menu: menu || {},
      firstItem: firstItem || {},
      listFootball: listFootball || [],
      listFootballOrder: listFootballOrder || [],
      listMenuParent: listMenuParent || [],
      listMenuChildren: listMenuChildren || [],
      slugChildren: slugChildren || [],
      keyword,
      description,
      slug: slug || "",
    },
  };
};

export default SportFootballInfo;
