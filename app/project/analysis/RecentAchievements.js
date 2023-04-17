import React from "react";
import "antd/dist/antd.css";
import { HomeLastMatches } from "./lastMatches/HomeLastMatches";
import { AwayLastMatches } from "./lastMatches/AwayLastMatches";

export const RecentAchievements = ({ matchAnalysis, matche }) => {
  return (
    <div className="compare-odds container">
      {matchAnalysis > 0 && (
        <>
          <h2 className="team-table-title">Thành tích gần đây</h2>
          <HomeLastMatches matchAnalysis={matchAnalysis} />
          <AwayLastMatches matchAnalysis={matchAnalysis} />
        </>
      )}
    </div>
  );
};
