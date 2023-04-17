import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import VirtualList from "rc-virtual-list";
import styles from "../../styles/tin-the-thao.module.css";
import WatchMoreInfo from "../../app/project/WatchMoreInfo";
import { ConvertPath } from "../../helpers/functions";
import Head from "next/head";
import { menuTabFotball } from "../../app/@function/constant";
import PageSchema from "../../app/project/PageSchema";
import {
  getAllMenuByParent,
  getListFootball,
  getNumberOfReader,
  getPostMostView,
} from "../../stores/bongda";
import InfiniteScroll from "react-infinite-scroll-component";
import { getMenuBySlug, getPostByMenu } from "../../stores/post";
import clsx from "clsx";

import { Row, Col, message, List, Divider, Icon } from "antd";
import stylesChiTiet from "../../styles/chi-tiet-trang.module.css";
import AddComment from "../../app/project/CommentList";
import { listDataOther } from "../../app/@function/constant";
import "moment/locale/vi";
import { Spin, Result, Button } from "antd";
import { ImgFb } from "../../app/@image/index";
import {
  Facebook,
  Link2,
  Bookmark,
  MessageSquare,
  ArrowLeftCircle,
  Minus,
} from "react-feather";
import {
  getDetailNew,
  getListWatchMore,
  getListNewByTitle,
  getReletivePosts,
} from "../../stores/tinchitiet";
import StickyBox from "react-sticky-box";
import { Chip, Stack } from "@mui/material";
import { Typography, Image } from "antd";
import { API_URL, BUNNY_URL } from "../../app/@function/wsCode";
import moment from "moment";
import { getListTransfer } from "../../stores/chuyennhuong";
import { getListNewsNew } from "../../stores/tinmoinhat";
import { getSchemaByPostId } from "../../stores/schema";
import PostSchema from "../../app/project/PostSchema";
import { icons } from "antd/lib/image/PreviewGroup";
import { CopyToClipboard } from "react-copy-to-clipboard";
const { Title, Text } = Typography;
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const SportFootballInfo = ({
  firstItem,
  listFootball,
  listFootballOrder,
  listMenuParent,
  keyword,
  description,
  slug,
  menu,
  isPost,
  detailNew,
  listWatchMore,
  reletivePost,
  postNew,
  schemaData,
  schema,
}) => {
  let i = 1;
  const checkTime = (startTime) => {
    let time = moment.duration(moment(new Date()).diff(startTime));
    if (time.asHours() >= 24) {
      return false;
    }
    return true;
  };
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);
  const [listDataMenu, setListDataMenu] = useState(listMenuParent ?? []);
  const [infinity, setInfinity] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [copy, setCopy] = useState(false);
  const [hasMore, setHasMore] = useState(
    listFootball?.length < pageSize - 1 ? false : true
  );
  const [hasMorePost, setHasMorePost] = useState(
    postNew?.length < pageSize - 1 ? false : true
  );
  const [dataPostNew, setDataPostNew] = useState(postNew || []);
  const [data, setData] = useState(listFootball || []);
  useEffect(() => {
    const appendData = () => {
      setListDataMenu(listMenuParent);
    };
    return appendData();
  }, [listMenuParent]);
  useEffect(() => {
    if (isPost === false) {
      setData(listFootball);
    } else {
      setDataPostNew(postNew);
    }
    setHasMore(listFootball?.length < pageSize ? false : true);
    setHasMorePost(postNew?.length < pageSize ? false : true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);
  useEffect(() => {
    setHydrated(true);
    if (isPost === false) {
      setData(listFootball);
    } else {
      setDataPostNew(postNew);
    }
    setHasMore(listFootball?.length < pageSize ? false : true);
    setHasMorePost(postNew?.length < pageSize ? false : true);
  }, []);

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
  const getMorePostOfPost = async () => {
    try {
      setPageIndex(pageIndex + 1);
      const dataVideo = await getListNewsNew(pageSize, pageIndex + 1);
      dataVideo.map((item, i) => {
        infinity.push(item);
      });
      if (dataVideo.length === 0) {
        setHasMorePost(false);
      }
      setDataPostNew((data) => [...data, ...dataVideo]);
    } catch (error) {
      setHasMorePost(false);
    }
  };
  if (detailNew === 404) {
    return (
      <Result
        style={{ paddingTop: "200px" }}
        status="404"
        title="404"
        subTitle="Rất tiếc, chúng tôi không tìm thấy bài viết nào!"
        extra={
          <Link href={"/"}>
            <Button type="primary">Trở về trang chủ.</Button>
          </Link>
        }
      />
    );
  }
  if (isPost === false) {
    return (
      <>
        <PageSchema keyword={keyword} description={description} slug={slug} />
        <div className="body">
          <h1 className="title-heading">{menu.menuName}</h1>
          <div style={{ marginBottom: "20px" }} className={styles.menutabX}>
            <div className={styles.menutab}>
              {listMenuParent.length !== 0
                ? listDataMenu &&
                  listDataMenu.map((val, idx) => {
                    return (
                      <Link key={idx} href={`/${slug}/${val.pram}`}>
                        <a>
                          <div
                            className={
                              styles.menutabitem +
                              " " +
                              (route.query.pram === val.pram
                                ? styles.menutabitemchecked
                                : "")
                            }
                            key={idx}
                          >
                            <div className={styles.menutabitemtitle}>
                              {val.title}
                            </div>
                            <div
                              className={
                                styles.menutabitem +
                                " " +
                                (route.query.pram === val.pram
                                  ? styles.menutabitemhoverchecked
                                  : "")
                              }
                            ></div>
                          </div>
                        </a>
                      </Link>
                    );
                  })
                : null}
            </div>
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
                      dangerouslySetInnerHTML={{
                        __html: firstItem?.description,
                      }}
                      className={styles["description"]}
                    ></div>
                  </Col>
                </Row>
              ) : null}
              <Row style={{ marginTop: 30 }}>
                <List>
                  <InfiniteScroll
                    dataLength={data?.length}
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
                    {data?.map((item) => (
                      <List.Item
                        key={item.title}
                        className={styles["new-item"]}
                      >
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
            <WatchMoreInfo listWatchMore={listFootballOrder ?? []} />
          </Row>
        </div>
      </>
    );
  } else {
    return (
      <>
        <PostSchema data={schemaData} schema={schema} />
        <div className="body">
          <div>
            <Row gutter={20}>
              <Col md={1}>
                <div className={stylesChiTiet["main-social"]}>
                  <ul className={stylesChiTiet["social"]}>
                    <li className="item-social icon-mobile">
                      <a
                        href={`http://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SCHEMA_URL}/${detailNew?.slug}`}
                        data-count="facebook"
                        rel="nofollow"
                        className="item intent facebook"
                        title="Chia sẻ qua Facebook"
                      >
                        <Facebook />
                      </a>
                    </li>
                    <li className="item-social icon-mobile">
                      <a
                        strokeWidth={2}
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `${process.env.NEXT_PUBLIC_SCHEMA_URL}/${detailNew.slug}`
                          );
                          handleCopyLink();
                        }}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <Link2 />
                      </a>
                      {copy ? (
                        <span className={stylesChiTiet["tip"]}>Copied</span>
                      ) : null}
                    </li>
                    <li className="item-social icon-mobile">
                      <Minus />
                    </li>
                    <li className="item-social icon-mobile">
                      <a>
                        <Bookmark />
                      </a>
                    </li>
                    <li className="item-social icon-mobile">
                      <a>
                        <MessageSquare />
                      </a>
                    </li>
                    <li
                      className="item-social icon-mobile"
                      onClick={() => router.back()}
                    >
                      <a>
                        <ArrowLeftCircle />
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col md={15}>
                <div>
                  <Title level={1}>{detailNew?.title}</Title>
                  <Text type="secondary">
                    {capitalizeFirstLetter(
                      moment(detailNew?.createdTime)
                        .locale("vi")
                        .format("dddd, DD/MM/YYYY, hh:mm")
                    )}
                  </Text>
                  <div
                    style={{ fontSize: "18px", fontWeight: "600" }}
                    dangerouslySetInnerHTML={{ __html: detailNew?.description }}
                  ></div>
                  <div
                    dangerouslySetInnerHTML={{ __html: detailNew?.content }}
                  ></div>
                  <h3 className={stylesChiTiet["title-italics"]}>Xem thêm</h3>
                  <ul>
                    {reletivePost.length !== 0 &&
                      reletivePost?.slice(1, 4).map((item, index) => (
                        <li key={index}>
                          <Link
                            href={`/${item?.slug}`}
                            key={index}
                            style={{ color: "black" }}
                          >
                            {item?.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
                <Stack direction="row" spacing={1} sx={{ margin: "15px 0" }}>
                  {detailNew?.tags?.map((item) => (
                    <Link key={i + 1} href={`/tag/${item.tagSlug}`}>
                      <Chip
                        label={item.tagName}
                        component="a"
                        href={`/tag/${item.tagSlug}`}
                        clickable
                      />
                    </Link>
                  ))}
                </Stack>
                <AddComment />
                <Row style={{ marginTop: 30 }}>
                  <h2 className="title-content">Có thể bạn quan tâm</h2>
                  <List>
                    <InfiniteScroll
                      dataLength={dataPostNew?.length}
                      next={getMorePostOfPost}
                      hasMore={hasMorePost}
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
                    >
                      {dataPostNew?.map((item) => (
                        <List.Item
                          key={item?.title}
                          className={stylesChiTiet["new-item"]}
                        >
                          <Row>
                            <Col md={8}>
                              <List.Item.Meta
                                key={item?.title}
                                avatar={
                                  <Link href={`/${item.slug}`}>
                                    <img alt={item?.title} src={item?.image} />
                                  </Link>
                                }
                              />
                            </Col>
                            <Col md={16}>
                              <Link href={`/${item?.slug}`}>
                                <p
                                  className={clsx(
                                    stylesChiTiet["title"],
                                    stylesChiTiet["titleMargin"]
                                  )}
                                >
                                  {item?.title}
                                </p>
                              </Link>
                              <div
                                className={stylesChiTiet["description"]}
                                dangerouslySetInnerHTML={{
                                  __html: item?.description,
                                }}
                              ></div>
                              <Text>
                                {checkTime(item?.createdTime) === true
                                  ? moment(item?.createdTime).fromNow()
                                  : moment(item?.createdTime)
                                      .locale("vi")
                                      .format(" hh:mm, DD/MM/YYYY")}
                              </Text>
                            </Col>
                          </Row>
                        </List.Item>
                      ))}
                    </InfiniteScroll>
                  </List>
                </Row>
              </Col>
              <WatchMoreInfo listWatchMore={listWatchMore ?? []} />
            </Row>
          </div>
        </div>
      </>
    );
  }
};

export const getServerSideProps = async ({ params }) => {
  const isPost = await getDetailNew(params.slug);
  if (isPost === 404) {
    const [listFootball, listFootballOrder, listMenuParent, menu] =
      await Promise.all([
        getPostByMenu(params.slug, 6, 1),
        getPostMostView(),
        getAllMenuByParent(params.slug),
        getMenuBySlug(params.slug),
      ]);
    const firstItem = listFootball ? listFootball.shift() : {};
    const keyword = ["bongda", "bóng đá", "banh"];
    const description = "Xem tin tức bóng đá";
    const slug = params.slug;
    return {
      props: {
        firstItem: firstItem || {},
        listFootball: listFootball || [],
        listFootballOrder: listFootballOrder || [],
        listMenuParent: listMenuParent || [],
        menu: menu || {},
        keyword,
        description,
        slug,
        isPost: false,
      },
    };
  } else {
    const detailNew = await getDetailNew(params.slug);
    const [listSchemaByPost, reletivePost, postNew, listWatchMore] =
      await Promise.all([
        getSchemaByPostId(detailNew?._id),
        getReletivePosts(detailNew?._id, detailNew?.menu?._id),
        getListNewsNew(6, 1),
        getPostMostView(),
      ]);

    let data = {
      title: detailNew?.title || "",
      slug: detailNew?.slug || "",
      description: detailNew?.description || "",
      image: detailNew?.image || "",
    };

    return {
      props: {
        detailNew: detailNew || [],
        listWatchMore: listWatchMore || [],
        reletivePost: reletivePost || [],
        postNew,
        schemaData: data || {},
        schema: listSchemaByPost || [],
        isPost: true,
        slug: params.slug,
      },
    };
  }
};

export default SportFootballInfo;
