import axios from "axios";
import moment from "moment";
import { API_SABA, API_SPORT } from "../app/@function/wsCode";
//data Schedule Right
export const InjuriesAndSuspensions = async (id) => {
  try {
    const response = await axios.get(`${API_SPORT}/api/getInjury`);
    const data =
      response &&
      response?.data.filter((item) => {
        return item?.matchId == id;
      });
    return data;
  } catch (error) {}
};
