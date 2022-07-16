import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as userServices from "../src/services/UserService";
import { setCurrentUser } from "./redux/User/UserSlice";
import "../src/App.css";

const DashboardPage = React.lazy(() => import("./pages/Dashboard/index"));
const AdvPage = React.lazy(() => import("./pages/Advertisement/index"));
const UsersPage = React.lazy(() => import("./pages/Users/index"));
const UserPage = React.lazy(() => import("./pages/User/index"));
const UpdateUserPage = React.lazy(() => import("./pages/UpdateUser/index"));
const PostsPage = React.lazy(() => import("./pages/Posts/index"));
const AccountPage = React.lazy(() => import("./pages/Account/index"));
const SettingsPage = React.lazy(() => import("./pages/Settings/index"));
const LoginPage = React.lazy(() => import("./pages/Login/index"));

function App() {
  const dispatch = useDispatch();
  useSelector((state) => state.auth.token);
  const token = sessionStorage.getItem("token");

  if(token){
    const arr = token.split(".");
    const userInfo = JSON.parse(atob(arr[1]));
    var role = userInfo.role
  }
  console.log(role)

  useEffect(() => {
    (async function () {
      if (token) {
        const user = await userServices.getUserService();
        dispatch(setCurrentUser(user));
      }
    })();
  }, [dispatch]);
  return (
    <>
      <Routes>
        {token !== null && role === "Admin" ?
          (
              <>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/adv" element={<AdvPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/user/:userId" element={<UserPage />} />
                <Route path="/updateUser/:userId" element={<UpdateUserPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/posts" element={<PostsPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </>
            ):
          
         (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )
}
      </Routes>
    </>
  );
}

export default App;
