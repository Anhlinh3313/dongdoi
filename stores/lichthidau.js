import axios from "axios";
import moment from "moment";
import { API_SABA, API_SPORT } from "../app/@function/wsCode";
//data Schedule Right
export const getListLeague = async () => {
  try {
    const response = await axios.get(`${API_SPORT}/api/leaguesCupProfile`);
    const resLeague =
      response &&
      response.data.map((item, index) => {
        return {
          _id: item._id,
          leagueId: item.leagueId,
          logo: item.logo,
          name: item.name,
          shortName: item.shortName,
        };
      });

    return resLeague;
  } catch (error) {}
};

//data Schedule Left
//date= "yyyy/mm/dd"
export const getScheduleAndResultByDate = async (date) => {
  try {
    const response = await axios.get(
      `${API_SPORT}/api/getScheduleAndResultByDate?date=${date}`
    );
    return response.data;
  } catch (error) {}
};

//data Left Detail
export const getScheduleAndResultByMatchId = async (matchId) => {
  try {
    const response = await axios.get(
      `${API_SPORT}/api/getScheduleAndResultByMatchId?matchId=${matchId}`
    );
    return response.data[0];
  } catch (error) {
    console.log(error);
  }
};

export const getLiveDataEvents = async (date) => {
  try {
    const response = await axios.get(
      `${API_SPORT}/api/getLiveDataEvents?date=${date}`
    );

    return response.data[0];
  } catch (error) {}
};

export const getLiveDataStats = async (date) => {
  try {
    const response = await axios.get(
      `${API_SPORT}/api/getLiveDataStats?date=${date}`
    );

    return response.data[0];
  } catch (error) {}
};

export const getLiveDataEventByMatchId = async (matchId) => {
  try {
    const response = await axios.get(
      `${API_SPORT}/api/getLiveDataEventByMatchId?matchId=${matchId}`
    );

    return response.data[0];
  } catch (error) {}
};

export const getLiveDataStatByMatchId = async (matchId) => {
  try {
    const response = await axios.get(
      `${API_SPORT}/api/getLiveDataStatByMatchId?matchId=${matchId}`
    );

    return response.data[0];
  } catch (error) {}
};

export const getLineUpByMatchId = async (matchId) => {
  try {
    const response = await axios.get(
      `${API_SPORT}/api/getLineUp?matchId=${matchId}`
    );

    return response.data[0];
  } catch (error) {}
};

export const getmatchAnalysis = async (matchId) => {
  try {
    const response = await axios.get(
      `${API_SPORT}/api/matchAnalysis?matchId=${matchId}`
    );
    return response.data[0];
  } catch (error) {}
};

//get data Interested
export const getFavLeagues = async () => {
  try {
    const body = "[14638,11997,11999,12001,12000,12002,11998,12036,12165]";

    const response = await axios({
      method: "post",
      url: `${API_SABA}/soccer/GetFavLeagues`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        leagueIds: body,
      },
    });

    return response.data;
  } catch (error) {}
};

export const getEventByMatchId = async (matchId, date) => {
  try {
    const result = await axios.get(
      `${API_SPORT}/api/getEventsByMatchId?matchId=${matchId}&date=${date}`
    );

    return result.data?.[0] || {};
  } catch (error) {}
};

export const getComparison1X2 = async (matchId) => {
  try {
    const result = await axios.get(
      `${API_SPORT}/api/getEuropeanOdds?matchId=${matchId}`
    );

    return result.data?.[0] || {};
  } catch (error) {
    throw error;
  }
};

export const getMatchesBySeason = async (leagueId, seasonId) => {
  try {
    const dateTime = moment(new Date()).format("yyyy-MM-DD");

    const response = await axios({
      method: "post",
      url: `${API_SABA}/soccer/getMatchesBySeason`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        date: dateTime,
        leagueId: leagueId, //leagueId
        seasonId: seasonId, //seasonId
      },
    });

    return response.data;
  } catch (error) {}
};

export const getSeasonStandings = async (leagueId, seasonId) => {
  try {
    const response = await axios({
      method: "post",
      url: `${API_SABA}/soccer/getSeasonStandings`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        leagueId: leagueId, //leagueId
        seasonId: seasonId, //seasonId
      },
    });

    return response.data;
  } catch (error) {}
};

export const getScheduleAndResultByLeagueId = async (leagueId) => {
  try {
    const response = await axios.get(
      `${API_SPORT}/api/getScheduleAndResultByLeagueId?leagueId=${leagueId}&status=-1`
    );

    return response.data;
  } catch (error) {}
};

export const getStatsByMatchId = async (matchId) => {
  try {
    const response = await axios.get(
      `${API_SPORT}/api/getLiveDataStatByMatchId?matchId=${matchId}`
    );

    return response.data?.[0] || {};
  } catch (error) {
    throw error;
  }
};

export const getLeagueStanding = async (leagueId, subLeagueId) => {
  try {
    const response = await axios.get(
      `${API_SPORT}/api/leagueStandings?leagueId=${leagueId}&subLeagueId=${subLeagueId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
