import axios from "axios";
import { API_SPORT } from "../app/@function/wsCode";
import getOddsData from "../helpers/OddsHelpers";
export const getOddsPreMatchAndInplay = async (matchId) => {
  try {
    const response = await axios.get(
      `${API_SPORT}/api/getPrematchAndInPlayOdd?matchId=${matchId}`
    );
    let dataCompare = await getOddsData(response?.data);
    dataCompare = dataCompare.filter((item) => {
      if (
        item?.handicap.length > 0 ||
        item?.europeOdds.length > 0 ||
        item?.overUnder.length > 0
      ) {
        return item;
      }
    });
    return dataCompare;
  } catch (error) {
    return false;
  }
};
