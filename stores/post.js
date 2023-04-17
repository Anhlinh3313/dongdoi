import axios from "axios";
import { listFootball, listDataOther } from "../app/@function/constant";
import { API_URL, BUNNY_URL } from "../app/@function/wsCode";

export const getPostByMenu = async (menu, pageSize = 6, pageIndex = 1) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/post/getByMenuSlug/${menu}?pageSize=${pageSize}&pageIndex=${pageIndex}`
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

export const getMenuBySlug = async (slug) => {
  try {
    const resDetailNew = await fetch(
      `${API_URL}/api/menu/getMenuBySlug/${slug}`
    );
    const detailNew = await resDetailNew.json();
    return detailNew;
  } catch (error) {}
};

export const getPostByTag = async (slug) => {
  try {
    const resPostByTag = await fetch(
      `${API_URL}/api/post/getByTagSlug/${slug}?pageIndex=1&pageSize=6`
    );
    const detailNew = await resPostByTag.json();
    return detailNew;
  } catch (error) {}
};
export const getTagBySlug = async (slug) => {
  try {
    const resPostByTag = await fetch(`${API_URL}/api/tag/getBySlug/${slug}`);
    const detailNew = await resPostByTag.json();
    return detailNew;
  } catch (error) {}
};
export const checkIsPost = async (slug) => {
  try {
    const resPostByTag = await fetch(`${API_URL}/api/tag/getBySlug/${slug}`);
    const detailNew = await resPostByTag.json();
    return detailNew;
  } catch (error) {}
};
