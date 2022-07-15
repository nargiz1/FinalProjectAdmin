import Axios from "../helpers/setupAxios";

export async function getUserService() {
  try {
    return await (
      await Axios.get(`/api/User/user`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
    ).data;
  } catch (error) {
    console.log("err: ", error);
  }
}