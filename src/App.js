import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as userServices from "../src/services/UserService";
import { setCurrentUser } from "./redux/User/UserSlice";
import "../src/App.css";

const DashboardPage = React.lazy(() => import("./pages/Dashboard/index"));
const AdvsPage = React.lazy(() => import("./pages/Advertisements/index"));
const AdvPage = React.lazy(() => import("./pages/Advertisement/index"));
const UsersPage = React.lazy(() => import("./pages/Users/index"));
const UserPage = React.lazy(() => import("./pages/User/index"));
const UpdateUserPage = React.lazy(() => import("./pages/UpdateUser/index"));
const PostPage = React.lazy(() => import("./pages/Post/index"));
const PostsPage = React.lazy(() => import("./pages/Posts/index"));
const AccountPage = React.lazy(() => import("./pages/Account/index"));
const ProfilePage = React.lazy(() => import("./pages/Settings/Profile"));
const PrivacyPage = React.lazy(() => import("./pages/Settings/Privacy"));
const LoginPage = React.lazy(() => import("./pages/Login/index"));
const CommentsPage = React.lazy(() => import("./pages/Comments/index"));
const CommentPage = React.lazy(() => import("./pages/Comment/index"));

function App() {
  const dispatch = useDispatch();
  useSelector((state) => state.auth.token);
  const token = sessionStorage.getItem("token");

  if (token) {
    const arr = token.split(".");
    const userInfo = JSON.parse(atob(arr[1]));
    var role = userInfo.role;
  }
  console.log(role);

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
        {token !== null && role === "Admin" ? (
          <>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/adv" element={<AdvsPage />} />
            <Route path="/ad/:adId" element={<AdvPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/user/:userId" element={<UserPage />} />
            <Route path="/updateUser/:userId" element={<UpdateUserPage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/post/:postId" element={<PostPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/comments/:postId" element={<CommentsPage />} />
            <Route path="/comment/:commentId" element={<CommentPage />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
