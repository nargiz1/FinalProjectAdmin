import Axios from "../helpers/setupAxios";

export async function LoginService(payload) {
  try {
    return await (
      await Axios.post(`/api/User/login`, payload, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          accept: "application/json",
        },
      })
    ).data;
  } catch (error) {
    console.log("err: ", error);
  }
}
