import axios from "axios";
import { listNewsNew, listDataOther } from "../app/@function/constant";
import { API_URL, BUNNY_URL } from "../app/@function/wsCode";
import { ConvertPath } from "../helpers/functions";
export const getPostMostView = async () => {
  try {
    const resListWatchMore = await fetch(`${API_URL}/api/post/getPostsByViews`);
    const listWatchMore = await resListWatchMore.json();
    const data = listWatchMore.map((item) => {
      return {
        image: `${BUNNY_URL}/${item.thumb}`,
        title: item.title,
        id: item._id,
        createdTime: item.createdTime,
        description: item.description,
        slug: item.slug,
      };
    });
    return data;
  } catch (error) {}
};
export const getDetailNew = async (title) => {
  try {
    const resDetailNew = await fetch(`${API_URL}/api/post/getBySlug/${title}`);
    const detailNew = await resDetailNew.json();
    return detailNew;
  } catch (error) {
    return error;
  }
};
export const getReletivePosts = async (postId, menuId) => {
  try {
    const resReletivePost = await fetch(
      `${API_URL}/api/post/getReletivePosts/${postId}?menu=${menuId}`
    );
    const reletivePost = await resReletivePost.json();
    if (reletivePost.status === 404) {
      throw "error";
    }
    const data = reletivePost?.map((item) => {
      return {
        image: `${BUNNY_URL}/${item.thumb}`,
        title: item.title,
        id: item._id,
        createdTime: item.createdTime,
        description: item.description,
        slug: item.slug,
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

export const getListNewByTitle = async (list, limit) => {
  try {
    return listDataOther.map((post) => ({
      params: {
        title: post.title,
      },
    }));
  } catch (error) {}
};

export async function getFootballDetail(slug) {
  try {
    const response = await fetch(`${API_URL}/api/post/getBySlug/` + slug);
    const dataRes = await response.json();
    return dataRes;
  } catch (err) {
    return {};
  }
}

export const getPagingV2 = async (pageSize) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/post/getPagingV2?pageSize=${pageSize}`
    );

    const dataRes = response.data?.data?.map((item, index) => {
      return {
        params: {
          title: item.slug,
        },
      };
    });

    return dataRes;
  } catch (error) {}
};

export const getPostDetailNew = async (slug) => {
  try {
    const response = await axios.get(`${API_URL}/api/post/getBySlug/${slug}`);

    if (response && response.data) {
      const dataRes = {
        title: response.data.title,
        createdTime: response.data.createdTime,
        content: response.data.content,
      };
      return dataRes;
    }
  } catch (error) {}
};
