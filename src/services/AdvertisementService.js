import Axios from "../helpers/setupAxios";

export async function createAdvService(formData) {
    try {
      return await (
        await Axios.post(`/api/Advertisement/create`, formData , {
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