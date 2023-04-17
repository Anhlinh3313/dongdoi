import axios from "axios";
import { API_URL, BUNNY_URL } from "../app/@function/wsCode";

export const getListBackstage = async (pageIndex = 1, pageSize = 6) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/post/getByMenuSlug/hau-truong?pageSize=${pageSize}&pageIndex=${pageIndex}`
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
  } catch (error) { }
};
