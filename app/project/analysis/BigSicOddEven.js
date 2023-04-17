import React, { useEffect, useState } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import { ip } from "../../data/ip";
import axios from "axios";

export const BigSicOddEven = ({ matchAnalysis, matche }) => {
  const router = useRouter();
  const [homeOdd, setHomeOdd] = useState([]);
  const [awayOdd, setAwayOdd] = useState([]);

  const columns = [
    {
      render: (value) => <div style={{ color: "black" }}>{value?.name}</div>,
    },
    {
      title: "Tài",
      render: (value) => (
        <div style={{ color: "black" }}>
          {value?.oddsOver} ({value?.oddsOverRate})
        </div>
      ),
    },
    {
      title: "Xỉu",
      render: (value) => (
        <div style={{ color: "black" }}>
          {value?.oddsUnder} ({value?.oddsUnderRate})
        </div>
      ),
    },
    {
      title: "Hòa",
      render: (value) => (
        <div style={{ color: "black" }}>{value?.oddsVoid} (0.0%)</div>
      ),
    },
    {
      title: "Lẻ",
      render: (value) => (
        <div style={{ color: "black" }}>
          {value?.oddsOver} ({value?.oddsOverRate})
        </div>
      ),
    },
    {
      title: "Chẵn",
      render: (value) => (
        <div style={{ color: "black" }}>
          {value?.oddsUnder} ({value?.oddsUnderRate})
        </div>
      ),
    },
  ];

  const getMatcheOdd = async () => {
    // const response = await axios.get(
    //   `${ip}/website/matches/teamData/${router.query?.pid}`
    // );

    let dataHomeOddTotal = matchAnalysis?.homeOdds?.total;
    if (dataHomeOddTotal) {
      dataHomeOddTotal.name = "Tổng";
    }

    let dataHomeOddHome = matchAnalysis?.homeOdds?.home;
    if (dataHomeOddHome) {
      dataHomeOddHome.name = "Nhà";
    }

    let dataHomeOddAway = matchAnalysis?.homeOdds?.away;
    if (dataHomeOddAway) {
      dataHomeOddAway.name = "Khách";
    }

    let dataHome = [dataHomeOddTotal, dataHomeOddHome, dataHomeOddAway];
    setHomeOdd(dataHome);

    let dataAwayOddTotal = matchAnalysis?.awayOdds?.total;
    if (dataAwayOddTotal) {
      dataAwayOddTotal.name = "Tổng";
    }

    let dataAwayOddHome = matchAnalysis?.awayOdds?.home;
    if (dataAwayOddHome) {
      dataAwayOddHome.name = "Nhà";
    }

    let dataAwayOddAway = matchAnalysis?.awayOdds?.away;
    if (dataAwayOddAway) {
      dataAwayOddAway.name = "Khách";
    }

    let dataAway = [dataAwayOddTotal, dataAwayOddHome, dataAwayOddAway];
    setAwayOdd(dataAway);
  };

  useEffect(() => {
    if (router.query?.pid) getMatcheOdd();
  }, [router.asPath]);

  return (
    <div className="compare-odds container">
      <h2 className="team-table-title">Tài Xỉu/Lẻ Chẵn</h2>
      <div className="team-div">
        <div className="home-div">
          <div className="team-table-home">
            <a className="vv">{matche?.team_home_name}</a>
            <Table
              columns={columns}
              rowClassName={(record, index) =>
                index % 2 === 0 ? "table-row-light" : "table-row-dark"
              }
              dataSource={homeOdd}
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
              dataSource={awayOdd}
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
