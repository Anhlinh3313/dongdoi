import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { RankTable } from "./RankTable";
import { HeadToHead } from "./HeadToHead";
import { CompareOddsOnline } from "./CompareOddsOnline";
import { RecentAchievements } from "./RecentAchievements";
import CompareData from "./CompareData";
import AsianOddsStatistics from "./AsianOddsStatistics";
import AsianOddsStatisticsHistory from "./AsianOddsStatisticsHistory";
import { GoalTotal } from "./GoalTotal";
import { HTFTDetail } from "./HTFTDetail";
import { BigSicOddEven } from "./BigSicOddEven";
import { UpcomingMatchesThree } from "./UpcomingMatchesThree";
import RecentLineups from "./RecentLineups";
import DataHistory from "./DataHistory";
import InjuriesAndSuspensions from "./InjuriesAndSuspensions";
import { TimeToScoreGoals } from "./TimeToScoreGoals";
import { ip } from "../../data/ip";
import { useRouter } from "next/router";
import axios from "axios";

const AnalysisPage = ({ match, matchAnalysis }) => {
  // const router = useRouter();
  // const [teamData, setTeamData] = useState([])

  // const getTeamData = async () => {
  //   const response = await axios.get(
  //     `${ip}/website/matches/teamData/${router.query?.pid}`
  //   );
  //   let data = response && response.data.awayLastMatches
  //   setTeamData(data)
  // };

  // useEffect(() => {
  //   if (router.query?.pid) getTeamData();
  // }, [router.asPath]);

  return (
    <>
      <div>
        <div>
          <div id="compareOddsOnline">
            <CompareOddsOnline />
          </div>
          <div id="rankTable">
            <RankTable match={match} />
          </div>
          <div id="headToHead">
            <HeadToHead matchAnalysis={matchAnalysis} />
          </div>
          <div id="recentAchievements">
            <RecentAchievements matchAnalysis={matchAnalysis} />
          </div>
          <div id="CompareData">
            <CompareData matchAnalysis={matchAnalysis} />
          </div>
          <div id="asianOddsStatistics">
            <AsianOddsStatistics matchAnalysis={matchAnalysis} />
          </div>
          <div id="asianOddsStatisticsHistory">
            <AsianOddsStatisticsHistory
              matchAnalysis={matchAnalysis}
              match={match}
            />
          </div>
          <div id="goalTotal">
            <GoalTotal matchAnalysis={matchAnalysis} />
          </div>
          <div id="hTFTDetail">
            <HTFTDetail matchAnalysis={matchAnalysis} />
          </div>
          <div id="bigSicOddEven">
            <BigSicOddEven matchAnalysis={matchAnalysis} />
          </div>
          <div id="timeToScoreGoals">
            <TimeToScoreGoals matchAnalysis={matchAnalysis} />
          </div>
          <div id="upcomingMatchesThree">
            <UpcomingMatchesThree matchAnalysis={matchAnalysis} />
          </div>
          <div id="injuriesAndSuspensions">
            <InjuriesAndSuspensions />
          </div>
          <div id="recentLineups">
            <RecentLineups />
          </div>
          <div id="dataHistory">
            <DataHistory matchAnalysis={matchAnalysis} />
          </div>
        </div>
        {/* <div id="analyMap">
          <a>Cài đặt</a>
          <a href="#compareOddsOnline" title="So sánh kèo trực tuyến">
            Live kèo
          </a>
          <a href="#rankTable" title="Dự đoán trận đấu">
            {" "}
            BXH
          </a>
          <a href="#headToHead" title="Bảng xếp hạng">
            {" "}
            VS
          </a>

          <a href="#CompareData" title="Tỷ số quá khứ">
            {" "}
            Tỷ số
          </a>
          <a href="#asianOddsStatistics" title="So sánh số liệu ">
            {" "}
            So sánh
          </a>
          <a href="#asianOddsStatisticsHistory" title="Thống kê kèo châu Á">
            {" "}
            HDP
          </a>
          <a href="#goalTotal" title="Lịch sử kèo châu Á tương đồng">
            {" "}
            SHHO
          </a>
          <a
            href="#hTFTDetail"
            title="Tổng số ghi bàn thắng/Số bàn thắng trong H1&amp;H2"
          >
            {" "}
            Bàn
          </a>
          <a href="#bigSicOddEven" title="Chi tiết về HT/FT">
            {" "}
            HT/FT
          </a>
          <a href="#timeToScoreGoals" title="Tài Xỉu/Lẻ Chẵn">
            {" "}
            TX/LC
          </a>
          <a href="#upcomingMatchesThree" title="Thời gian ghi bàn thắng">
            {" "}
            Giờ
          </a>
          <a href="#recentLineups" title="Lịch thi đấu">
            {" "}
            LTĐ
          </a>
          <a href="#injuriesAndSuspensions" title="Chấn thương và dừng chiến">
            {" "}
            Chấn thương
          </a>
          <a href="#dataHistory" title="Đội hình gần đây">
            Đội hình
          </a>
          <a href="#dataHistory" title="Dữ liệu thống kê mùa giải này">
            {" "}
            Mùa giải
          </a>
        </div> */}
      </div>
    </>
  );
};

export default AnalysisPage;
