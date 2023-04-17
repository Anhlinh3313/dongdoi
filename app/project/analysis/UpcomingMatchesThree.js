import React, { useEffect, useState } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
import { useRouter } from "next/router";
import axios from "axios";
import { ip } from "../../data/ip";

export const UpcomingMatchesThree = ({matchAnalysis, matche }) => {
  const router = useRouter();
  const [listUpcomingMatchesHome, setListUpcomingMatchesHome] = useState([]);
  const [listUpcomingMatchesAway, setListUpcomingMatchesAway] = useState([]);

  const columns = [
    {
      title: "Giải đấu",
      render: (value) => <div style={{ color: "black" }}>{value.league}</div>,
    },
    {
      title: "Ngày",
      render: (value) => (
        <div style={{ color: "black" }}>
          {moment.unix(value?.matchTime).format("DD/MM/YYYY")}
        </div>
      ),
    },
    {
      title: "Kiểu",
      render: (value) => <div style={{ color: "black" }}>{"Nhà"}</div>,
    },
    {
      title: "VS",
      render: (value) => (
        <div style={{ color: "black" }}>{`${value.home} - ${value.away}`}</div>
      ),
    },
    {
      title: "Trận đấu đang",
      render: (value) => (
        <div style={{ color: "black" }}>{`${value.day} Ngày`}</div>
      ),
    },
  ];

  const getMatcheUpcoming = async () => {
    // const response = await axios.get(
    //   `${ip}/website/matches/teamData/${router.query?.pid}`
    // );
    let dataHome = matchAnalysis?.homeSchedule;
    let dataAway = matchAnalysis?.awaySchedule;

    setListUpcomingMatchesHome(dataHome);
    setListUpcomingMatchesAway(dataAway);
  };

  useEffect(() => {
    if (router.query?.pid) getMatcheUpcoming();
  }, [router.asPath]);

  return (
    <div className="compare-odds container">
      <h2 className="team-table-title">Trận đấu sắp tới </h2>
      <div className="team-div">
        <div className="home-div">
          <div className="team-table-home">
            <a className="vv">{matche?.team_home_name}</a>
            <Table
              columns={columns}
              rowClassName={(record, index) =>
                index % 2 === 0 ? "table-row-light" : "table-row-dark"
              }
              dataSource={listUpcomingMatchesHome}
              bordered
              style={{ color: "black" }}
              size="small"
              pagination={false}
            />
          </div>
        </div>
        <div className="guest-div">
          <div className="team-table-guest">
            <a className="vv">{matche?.team_away_name}</a>
            <Table
              columns={columns}
              rowClassName={(record, index) =>
                index % 2 === 0 ? "table-row-light" : "table-row-dark"
              }
              dataSource={listUpcomingMatchesAway}
              bordered
              style={{ color: "black" }}
              size="small"
              pagination={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
