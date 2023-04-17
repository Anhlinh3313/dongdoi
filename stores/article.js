import axios from "axios";
import { API_URL } from "app/@function/wsCode";
import { getHeaders } from "./authentication"
export const addArticle = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/article/add`, data, getHeaders()
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
export const addTipArticle = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/article/add-tip`, data, getHeaders()
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getAllArticle = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/api/article/get-all`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllArticleByGroup = async (idGroup) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/article/get-all/${idGroup}`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
}
export const getAllArticleByUser = async (idUser) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/article/get-all-by-user/${idUser}`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
}
export const getDetailArticleById = async (slugs) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/article/${slugs}`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
}
export const CommentArticle = async (id, data) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/article/${id}/comment`, data, getHeaders()
    );
    return response.data;
  } catch (error) {
    return error;
  }
}
export const LikeArticle = async (id, data) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/article/${id}/like`, data, getHeaders()
    );
    return response.data;
  } catch (error) {
    return error;
  }
}
export const getArticleByUserFollow = async (id) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/article/get-all-by-user-follow/${id}`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export const getMatchAndArticle = async (id) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/article/get-all-match-article`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
}
export const getUsersFollow = async (id) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/user-client/get-users-follow/${id}`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export const deleteArticle = async (id) => {
  try {
    const response = await axios.delete(
      `${API_URL}/api/article/delete/${id}`, getHeaders()
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export const getTipsWin = async (id) => {
  try {
    console.log(id);
    const response = await axios.get(
      `${API_URL}/api/article/get-tips-win/${id}`
    );
    return response.data;
  } catch (error) {

    return error;
  }
}