import axios from "axios";
import moment from "moment";
import { BUNNY_URL, API_SPORT } from "../app/@function/wsCode";

export const getLiveScoreToday = async () => {
  try {
    const response = await axios.get(`${API_SPORT}/api/liveScoreTodays`);
    return response.data;
  } catch (error) {}
};
