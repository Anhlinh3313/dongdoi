import axios from "axios";
import { listFootball, listDataOther } from "../app/@function/constant";
import { API_URL, BUNNY_URL } from "../app/@function/wsCode";

export const getListFootball = async (pageSize = 6, pageIndex = 1) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/post/getByMenuSlug/bong-da?pageSize=${pageSize}&pageIndex=${pageIndex}`
    );
    const listFootball = response.data.data?.map((item, index) => {
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
    return listFootball;
  } catch (error) {
    return false;
  }
};

export const getListWatchMore = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/api/post/getPostsByViews?limit=${5}`
    );
    const mostWatchPosts =
      response.data &&
      response.data.map((item, index) => {
        return {
          image: `${BUNNY_URL}/${item.thumb}`,
          title: item.title,
          timer: item.createdTime,
          slug: item.slug,
          content: item.content,
        };
      });
    return data;
  } catch (error) {}
};
export const getNumberOfReader = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/post/getNumberOfReader`);

    const listFootballOrder = response.data?.map((item, index) => {
      return {
        image: `${BUNNY_URL}/${item.thumb}`,
        title: item.title,
        id: item._id,
        createdTime: item.createdTime,
        description: item.description,
        slug: item.slug,
        content: item.content,
      };
    });
    return listFootballOrder;
  } catch (error) {}
};

export const getListFootballByTagSlug = async (slug) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/post/getByTagSlug/${slug}`
    );
    const dataRes = response.data?.map((item, index) => {
      return {
        image: `${BUNNY_URL}/${item.thumb}`,
        title: item.title,
        id: item._id,
        createdTime: item.createdTime,
        description: item.description,
        slug: item.slug,
        content: item.content,
      };
    });

    return dataRes;
  } catch (error) {}
};

export const getAllMenuByParent = async (slug) => {
  try {
    const responseMenu = await axios.get(
      `${API_URL}/api/menu/getMenuChildrenBySlug/${slug}`
    );

    const dataRes = responseMenu.data?.map((item, index) => {
      return {
        title: item.menuName,
        pram: item.menuSlug,
      };
    });
    return dataRes;
  } catch (error) {}
};

export const getAllMenuByParentId = async (slug) => {
  try {
    const responseMenu = await axios.get(
      `${API_URL}/api/menu/getMenuChildrenBySlug/${slug}`
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

export const getAllMenuChildrenPageFootball = async (slug) => {
  try {
    const responseMenu = await axios.get(
      `${API_URL}/api/menu/getMenuChildrenBySlug/${slug}`
    );
    const dataRes = responseMenu.data?.map((item, index) => {
      return {
        title: item.menuName,
        path: item.menuSlug,
      };
    });

    return dataRes;
  } catch (error) {}
};

export const getAllMenuByChildren = async (slug) => {
  try {
    const responseMenu = await axios.get(
      `${API_URL}/api/menu/getMenuChildrenBySlug/${slug}`
    );
    const dataRes = responseMenu.data?.map((item, index) => {
      return {
        title: item.menuName,
        path: item.menuSlug,
      };
    });

    return dataRes;
  } catch (error) {}
};

export const getAllMenuFootballByParentPath = async () => {
  try {
    const responseMenu = await axios.get(
      `${API_URL}/api/menu/getMenuChildrenBySlug/bong-da`
    );
    const dataRes = responseMenu.data?.map((item, index) => {
      return {
        params: {
          pram: [item.menuSlug],
        },
      };
    });

    return dataRes;
  } catch (error) {}
};

export const getListFootballByParentSlug = async (
  slug,
  pageIndex,
  pageSize
) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/post/getByMenuSlug/${slug}?pageSize=${pageSize}&pageIndex=${pageIndex}`
    );

    const listFootball = response.data?.data.map((item, index) => {
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
    return listFootball;
  } catch (error) {}
};

export const getAllMenuChildrenBySlug = async () => {
  try {
    const responseMenu = await axios.get(
      `${API_URL}/api/menu/getAllMenuChildrenBySlug/bong-da`
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

export const getPostMostView = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/api/post/getPostsByViews?limit=${5}`
    );
    const mostWatchPosts =
      response.data &&
      response.data.map((item, index) => {
        return {
          image: `${BUNNY_URL}/${item.thumb}`,
          title: item.title,
          timer: item.createdTime,
          slug: item.slug,
          // content: item.content,
        };
      });

    return mostWatchPosts;
  } catch (error) {
    return [];
  }
};
