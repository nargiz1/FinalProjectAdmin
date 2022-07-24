import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFilePost } from "react-icons/bs";
import { FaComments, FaUsers } from "react-icons/fa";
import Sidebar from "../../components/Sidebar/index";
import * as userServices from "../../services/UserService";
import * as commentServices from "../../services/CommentService";
import * as postServices from "../../services/PostService";
import * as advServices from "../../services/AdvertisementService";
import { setComments } from "../../redux/Comment/CommentSlice";
import { setUsers } from "../../redux/User/UserSlice";
import { setPosts } from "../../redux/Post/PostSlice";
import { setAds } from "../../redux/Advertisement/AdvertisementSlice";
import "./index.css";
import { RiAdvertisementFill } from "react-icons/ri";

const Index = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.user?.users);
  const posts = useSelector((state) => state?.post?.posts);
  const ads = useSelector((state) => state?.ad?.ads);

  const [pagination, setPagination] = useState({
    start: 0,
    limit: 1,
  })

  useEffect(() => {
    (async function () {
      const users = await userServices.getUsersService(pagination);
      const posts = await postServices.getAllPostsService(pagination);
      const ads = await advServices.getAdsService(pagination);
      dispatch(setUsers(users));
      dispatch(setPosts(posts));
      dispatch(setAds(ads));
    })();
  }, [dispatch]);
  return (
    <>
      <Sidebar />
      <div class="home-section">
        <div className="container">
          <div className="row pt-5 pe-5 ps-5">
            <div className="col-4">
              <div className="counter d-flex ">
                <div className="text-primary me-3">
                  <FaUsers />
                </div>
                <div className="counter-inner">
                  <div>Users</div>
                  <div>{users.count}</div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="counter d-flex ">
                <div className="text-danger me-3">
                  <BsFilePost />
                </div>
                <div className="counter-inner">
                  <div>Posts</div>
                  <div>{posts.count}</div>
                </div>
              </div>
            </div>
           
            <div className="col-4">
              <div className="counter d-flex ">
                <div className="text-success me-3">
                  <RiAdvertisementFill />
                </div>
                <div className="counter-inner">
                  <div>Advertisements</div>
                  <div>{ads.count}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
