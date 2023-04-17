import axios from "axios";
import { listDataOther, listNewsNew } from "../app/@function/constant";
import { API_URL, BUNNY_URL } from "../app/@function/wsCode";

export const getPostsByTitle = async (q, pageIndex = 1, pageSize = 10) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/post/searchPostsByTitle?q=${q}&pageSize=${pageSize}&pageIndex=${pageIndex}`
    );
    const data =
      response.data &&
      response.data.map((item, index) => {
        return {
          image: `${BUNNY_URL}/${item.thumb}`,
          title: item.title,
          id: item._id,
          createdTime: item.createdTime,
          description: item.description,
          slug: item.slug,
          // content: item.content,
        };
      });
    return data;
  } catch (error) {
    return [];
  }
};

export const getListWatchMore = async () => {
  try {
    return listDataOther;
  } catch (error) {}
};
