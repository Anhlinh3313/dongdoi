import axios from "axios";
import { listDataOther } from "../app/@function/constant";
import { API_URL, BUNNY_URL } from "../app/@function/wsCode";

export const getListTransfer = async (pageIndex = 1, pageSize = 6) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/post/getByMenuSlug/chuyen-nhuong?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );
    const dataVideo = response.data.data?.map((item, id) => {
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

    return dataVideo;
  } catch (error) {
    return false;
  }
};

export const getListWatchMore = async () => {
  try {
    return listDataOther;
  } catch (error) { }
};