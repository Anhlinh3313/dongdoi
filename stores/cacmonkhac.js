import axios from "axios";
import { API_URL, listNewsNew, listDataOther } from "../app/@function/constant";

export const getListOtherSports = async (pageSize = 6, pageIndex = 1) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/post/getByMenuSlug/cac-mon-khac?pageSize=${pageSize}&pageIndex=${pageIndex}`
    );
    const listBackstage = response.data.data?.map((item, index) => {
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
    return listBackstage;
  } catch (error) {}
};

export const getListWatchMore = async () => {
  try {
    return listDataOther;
  } catch (error) {}
};
