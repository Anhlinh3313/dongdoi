import axios from "axios";
import { API_SPORT, API_URL } from "../app/@function/wsCode";
import getResultsEveryMinute from "../helpers/getResultsEveryMinute";
export const getLiveRecord = async (matchId, companyId = 8) => {
  try {
    const response = await axios.get(
      `${API_SPORT}/api/getOddModifyByMatchId?matchId=${matchId}&companyId=${companyId}`
    );

    return response?.data;
  } catch (error) {
    return false;
  }
};
