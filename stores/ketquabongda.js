import axios from "axios";
import moment from "moment";
import { BUNNY_URL, API_SPORT } from "../app/@function/wsCode";

export const getResultToday = async (date = "2023-02-21") => {
  try {
    let date = new Date();
    let formattedDate = date.toISOString().slice(0, 10);
    const today = new Date();
    let yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    let b = yesterday.toISOString().slice(0, 10);
    const response = await axios.get(
      `${API_SPORT}/api/getScheduleAndResultByDate?date=${formattedDate}`
    );
    const responseExtra = await axios.get(
      `${API_SPORT}/api/getScheduleAndResultByDate?date=${b}`
    );
    let data = response?.data;
    if (responseExtra?.data?.length > 0) {
      data = [...response?.data, ...responseExtra?.data];
    }
    let dataSort = data?.sort((x, y) => x.matchTime > y.matchTime);
    return dataSort;
  } catch (error) {}
};
