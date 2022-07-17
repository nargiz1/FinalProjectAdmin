import Axios from "../helpers/setupAxios";

export async function createAdvService(formData) {
  try {
    return await (
      await Axios.post(`/api/Advertisement/create`, formData, {
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
};
export async function expireAdService(advId) {
  try {
    return await (
      await Axios.post(`/api/Advertisement/expire`, advId, {
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
};
export async function getAdsService() {
  try {
    return await (
      await Axios.get(`/api/Advertisement/getAll`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        params: {
          Skip: 0,
          Take: 10,
        },
      })
    ).data;
  } catch (error) {
    console.log("err: ", error);
  }
}
export async function getUAdByIdService(adId) {
  try {
    return await (
      await Axios.get(`/api/Advertisement/getAdv`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        params: {
          advId: adId,
        },
      })
    ).data;
  } catch (error) {
    console.log("err: ", error);
  }
}
