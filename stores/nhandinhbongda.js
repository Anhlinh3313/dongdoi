import axios from "axios";
import { API_URL, BUNNY_URL } from "../app/@function/wsCode";
export const getListPredic = async (pageIndex = 1, pageSize = 6) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/post/getByMenuSlug/nhan-dinh-bong-da?pageSize=${pageSize}&pageIndex=${pageIndex}`
    );

    const dataPredic = response.data.data?.map((item, index) => {
      return {
        image: `${BUNNY_URL}/${item.thumb}`,
        title: item.title,
        slug: item.slug,
        description: item.description,
      };
    });

    return dataPredic;
  } catch (error) {}
};

export const getAllMenuPredicByParent = async () => {
  try {
    const responseMenu = await axios.get(
      `${API_URL}/api/menu/getMenuChildrenBySlug/nhan-dinh-bong-da`
    );

    const dataRes = responseMenu.data?.map((item, index) => {
      return {
        title: item.menuName,
        id: item.menuSlug,
      };
    });

    return dataRes;
  } catch (error) {}
};

export const getAllMenuPredicByParentPath = async () => {
  try {
    const responseMenu = await axios.get(
      `${API_URL}/api/menu/getMenuChildrenBySlug/nhan-dinh-bong-da`
    );

    const dataRes = responseMenu.data?.map((item, index) => {
      return {
        params: {
          id: item.menuSlug,
        },
      };
    });

    return dataRes;
  } catch (error) {}
};

export const getListPredicBySlug = async (
  slug,
  pageIndex = 1,
  pageSize = 10
) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/post/getByMenuSlug/${slug}?pageSize=${pageSize}&pageIndex=${pageIndex}`
    );

    const dataPredic = response.data.data?.map((item, index) => {
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

    return dataPredic;
  } catch (error) {}
};
