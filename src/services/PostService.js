import Axios from "../helpers/setupAxios";
import { useSelector } from "react-redux";

export async function getAllPostsService(pagination) {
  try {
    return await (
      await Axios.get(`/api/Post/allPostsForAdmin`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        params: {            
            "Skip": pagination.start,
            "Take": pagination.limit,
        }
      })
      ).data;
  } catch (error) {
    console.log("err: ", error);
  }
};

export async function getPostService(postId) {
  try {
    return await (
      await Axios.get(`/api/Post/getPost`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        params:{
          "postId":postId,
        }
       
      })
      ).data;
   
  } catch (error) {
    console.log("err: ", error);
  }
};

export async function createPostService(formData) {
  try {
    return await (
      await Axios.post(`/api/Post/create`, formData , {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Accept": "application/json",
        },   
      })
      ).data;
  } catch (error) {
    console.log("err: ", error);
  }
};
export async function deletePostService(payload) {
  try {
    return await (
      await Axios.post(`/api/Post/delete`,  payload , {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      })
      ).data;
  } catch (error) {
    console.log("err: ", error);
  }
};



