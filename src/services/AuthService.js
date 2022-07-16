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
export async function LogoutService() {
  try {
    return await (
      await Axios.post(`/api/User/logout`, {
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
export async function RegisterService(payload) {
  try {
    return await (
      await Axios.post(`/api/User/register`, payload, {
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
export async function ForgotPasswordService(payload) {
  try {
    return await (
      await Axios.post(`/api/User/ForgotPassword`, payload, {
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
export async function ResetPasswordService(payload) {
  try {
    return await (
      await Axios.post(`/api/User/ResetPassword`, payload, {
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
export async function ChangePasswordService(payload) {
  try {
    return await (
      await Axios.post(`/api/User/changePassword`, payload, {
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


