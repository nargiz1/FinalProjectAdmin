import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/index";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import * as postServices from "../../services/PostService";
import { setPost } from "../../redux/Post/PostSlice";
import { BsArrowLeft } from "react-icons/bs";
// import { setPost } from "../../redux/Post/PostSlice";

const Index = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state?.post?.post);

  useEffect(() => {
    (async function () {
      const post = await postServices.getPostService(postId);
      console.log("post", post);
      dispatch(setPost(post));
    })();
  }, [postId, dispatch]);

  return (
    <>
      <Sidebar />
      <div className="home-section">
       <div className="home-section-inner">
       <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-3">
              <img
                className="rounded-circle img-thumbnail w-100"
                src={"http://localhost:39524/" + post.imageUrl}
                alt="post"
              />
            </div>
            <div className="col-lg-4  mt-5 ms-5">
              <div>
                <h5>ID:</h5>
                <p>{post.id}</p>
              </div>
              <div>
                <h5>User ID:</h5>
                <p>{post.userId}</p>
              </div>
              <div>
                <h5>Created:</h5>
                <p>{post.created}</p>
              </div>
            </div>
            <div className="col-lg-3 mt-5">
              <div>
                <h5>Location:</h5>
                <p>{post.location}</p>
              </div>
              <div>
                <h5>Is Private:</h5>
                <p>{post.isPrivate}</p>
              </div>
              <div>
                <h5>Username:</h5>
                <p>{post.user?.userName}</p>
              </div>
            
            </div>
            <Link to={`/posts`} className="text-decoration-none fs-2 me-5">
                <BsArrowLeft />
              </Link>
          </div>
        </div>
       </div>
      </div>
    </>
  );
};

export default Index;
