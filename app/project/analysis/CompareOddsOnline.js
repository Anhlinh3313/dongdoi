import React, { useEffect, useState } from "react";
import { Button, Checkbox, Col, Modal, Row, Table, Tooltip } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { useRouter } from "next/router";
import { ip } from "../../data/ip";
import { getOddsPreMatchAndInplay } from "../../../stores/chitiettran";
import Link from "next/link";
export const CompareOddsOnline = () => {
  const router = useRouter();
  const [oddList, setOddList] = useState([]);
  const [open, setOpen] = useState(false);
  const [listCompany, setListCompany] = useState([]);

  const columns = [
    {
      title: "Công ty",
      dataIndex: "company",
      key: "company",
      width: 100,
      fixed: "center",
      render: (value) => <div style={{ color: "black" }}>{value}</div>,
    },
    {
      title: "Tỷ lệ Châu Á",
      children: [
        {
          title: "Chủ",
          width: 150,
          dataIndex: "handicap",
          render: (value) => (
            <div style={{ color: "black" }}>
              <span>{value?.[0]?.initialHome}</span>
              <br />
              <span>
                {compareStringFloatOdds(
                  value?.[0]?.initialHome,
                  value?.[0]?.instantHome
                )}
              </span>
            </div>
          ),
        },
        {
          title: "HDP",
          dataIndex: "handicap",
          key: "HDP",
          width: 150,
          render: (value) => (
            <div style={{ color: "black" }}>
              <span>{value?.[0]?.initialHandicap}</span>
              <br />
              <span>
                {compareStringFloatOdds(
                  value?.[0]?.initialHandicap,
                  value?.[0]?.instantHandicap
                )}
              </span>
            </div>
          ),
        },
        {
          title: "Khách",
          dataIndex: "handicap",
          key: "guest",
          width: 150,
          render: (value) => (
            <div style={{ color: "black" }}>
              <span>{value?.[0]?.initialAway}</span>
              <br />
              <span>
                {compareStringFloatOdds(
                  value?.[0]?.initialAway,
                  value?.[0]?.instantAway
                )}
              </span>
            </div>
          ),
        },
      ],
    },
    {
      title: "Tỷ lệ châu Âu",
      children: [
        {
          title: "Chủ",
          dataIndex: "europeOdds",
          key: "europeOdds",
          width: 150,
          render: (value) => (
            <div style={{ color: "black" }}>
              {value?.[0]?.initialHome}
              <br />
              {compareStringFloatOdds(
                value?.[0]?.initialHome,
                value?.[0]?.instantHome
              )}
            </div>
          ),
        },
        {
          title: "Hòa",
          dataIndex: "europeOdds",
          key: "europeOdds",
          width: 150,
          render: (value) => (
            <div style={{ color: "black" }}>
              {value?.[0]?.initialDraw}
              <br />
              {compareStringFloatOdds(
                value?.[0]?.initialDraw,
                value?.[0]?.instantDraw
              )}
            </div>
          ),
        },
        {
          title: "Khách",
          dataIndex: "europeOdds",
          key: "europeOdds",
          width: 150,
          render: (value) => (
            <div style={{ color: "black" }}>
              {value?.[0]?.initialAway}
              <br />
              {compareStringFloatOdds(
                value?.[0]?.initialAway,
                value?.[0]?.instantAway
              )}
            </div>
          ),
        },
      ],
    },
    {
      title: "Tỉ lệ tài xỉu",
      children: [
        {
          title: "Tài",
          dataIndex: "overUnder",
          key: "overUnder",
          width: 150,
          render: (value) => (
            <div style={{ color: "black" }}>
              {value?.[0]?.initialOver}
              <br />
              {compareStringFloatOdds(
                value?.[0]?.initialOver,
                value?.[0]?.instantOver
              )}
            </div>
          ),
        },
        {
          title: "Kèo đấu",
          dataIndex: "overUnder",
          key: "overUnder",
          width: 150,
          render: (value) => (
            <div style={{ color: "black" }}>
              {value?.[0]?.initialHandicap}
              <br />
              {compareStringFloatOdds(
                value?.[0]?.initialHandicap,
                value?.[0]?.instantHandicap
              )}
            </div>
          ),
        },
        {
          title: "Xỉu",
          dataIndex: "overUnder",
          key: "overUnder",
          width: 150,
          render: (value) => (
            <div style={{ color: "black" }}>
              {value?.[0]?.initialUnder}
              <br />
              {compareStringFloatOdds(
                value?.[0]?.initialUnder,
                value?.[0]?.instantUnder
              )}
            </div>
          ),
        },
      ],
    },
    {
      title: (
        <>
          <span style={{ paddingRight: "12px", color: "#000" }}>
            Thay đổi
            {/* <img onClick={() => showModal()} src="../assets/images/add.png" /> */}
          </span>
        </>
      ),
      dataIndex: "odds1x2",
      key: "host",
      width: 400,
      render: (value) => (
        <div style={{ color: "black" }}>
          <Link href={``}>
            <Tooltip title="So sánh TL">
              <img
                alt=""
                style={{
                  width: "18px",
                  padding: "0 2px",
                }}
                src="/odds.png"
              />
            </Tooltip>
          </Link>
          <Link href={``}>
            <Tooltip title="Chi tiết">
              <img
                alt=""
                style={{
                  width: "18px",
                  padding: "0 2px",
                }}
                src="/t5.png"
              />
            </Tooltip>
          </Link>
        </div>
      ),
    },
  ];

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {};

  const onChangeData = async (e) => {
    //bỏ check
    listCompany.map((item) => {
      if (item.value === e.value) {
        item.isCheck = !item.isCheck;
      }
      return item;
    });
    setListCompany(listCompany);
    //xóa khi không chọn
    let listStorageOdd = storageOdd;
    listCompany.forEach((item) => {
      if (!item.isCheck) {
        listStorageOdd = listStorageOdd.filter((x) => x.company !== item.label);
      }
    });
    setOddList(listStorageOdd);
  };

  const handleCheckOn = async () => {
    // check all
    listCompany.map((item) => {
      item.isCheck = true;
      return item;
    });
    setListCompany(listCompany);

    let listStorageOdd = storageOdd;
    setOddList(listStorageOdd);
  };

  const handleCancelAll = async () => {
    // check all
    listCompany.map((item) => {
      item.isCheck = false;
      return item;
    });
    setOddList([]);
  };

  const getMatcheOdds = async () => {
    // const response = await axios.get(
    //   `${ip}/website/matches/${router.query?.pid}/allOdds`
    // );
    const response = await getOddsPreMatchAndInplay(router.query?.pid);
    let odds = response;

    let listCompany = [];
    odds?.forEach((item) => {
      let itemCompany = {
        value: item.key,
        label: item.company,
        isCheck: true,
      };
      listCompany.push(itemCompany);
    });
    const rs = odds?.filter((item) => {
      if (
        item?.handicap.length > 0 ||
        item?.europeOdds.length > 0 ||
        item?.overUnder.length > 0
      ) {
        return item;
      }
    });
    setListCompany(listCompany);
    // setOddList(rs);
    setOddList(odds);
    // setStorageOdd(odds);
  };

  const compareStringFloatOdds = (initial, instant) => {
    if (initial !== undefined) {
      let a = parseFloat(initial).toFixed(2);
      let b = parseFloat(instant).toFixed(2);
      if (a > b) {
        return (
          <div style={{ color: "red" }} className="">
            {instant}
          </div>
        );
      } else if (a == b) {
        return <>{instant}</>;
      } else {
        return (
          <div className="" style={{ color: "green" }}>
            {instant}
          </div>
        );
      }
    }
  };

  useEffect(() => {
    if (router.query?.pid) getMatcheOdds();
  }, [router.asPath]);

  return (
    <div className="compare-odds container">
      <h2 className="team-table-title">So sánh kèo trực tuyến</h2>
      <Table
        columns={columns}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
        dataSource={oddList}
        bordered
        style={{ color: "black" }}s
        size="small"
        pagination={false}
      />
      <Modal
        open={open}
        title="Chọn công ty"
        style={{ textAlign: "left" }}
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={handleCancel}
        width={700}
        footer={[
          <Button key="back" onClick={handleCheckOn}>
            <span style={{ color: "#000" }}>Tất cả</span>
          </Button>,
          <Button key="submit" onClick={handleCancelAll}>
            <span style={{ color: "#000" }}>Xóa hết</span>
          </Button>,
          <Button key="link" onClick={handleOk}>
            <span style={{ color: "#000" }}>OK</span>
          </Button>,
        ]}
      >
        <Row>
          {listCompany.map((val, index) => (
            <Col key={index} span={4}>
              <Checkbox
                onChange={() => {
                  onChangeData(val);
                }}
                checked={val.isCheck}
              >
                <span style={{ color: "#000" }}>{val.label}</span>
              </Checkbox>
            </Col>
          ))}
        </Row>
      </Modal>
    </div>
  );
};
