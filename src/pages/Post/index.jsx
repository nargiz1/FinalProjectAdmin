import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/index";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import * as postServices from "../../services/PostService";
import { setPost } from "../../redux/Post/PostSlice";
import { BsArrowLeft } from "react-icons/bs";
import Moment from "react-moment";
import Carousel from "react-bootstrap/Carousel";
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
              <div class="post-top d-flex align-items-center justify-content-between p-3"></div>
            <div className="post-body">
             
          <Carousel interval={null}>
            {post?.images && post.images?.length > 0
              ? post?.images.map((img, index) => (
                  <Carousel.Item key={index} className="p-0">
                    <img
                      style={{ height: "257px" }}
                      src={"http://localhost:39524/" + img?.imageUrl}
                      alt="post"
                      className="w-100"
                    />
                  </Carousel.Item>
                ))
              : null}
            {post?.videos && post?.videos?.length > 0
              ? post?.videos.map((video, index) => (
                  <Carousel.Item key={index} className="p-0">
                    <video controls key={index} className="w-100">
                      <source
                        style={{ height: "257px" }}
                        src={"http://localhost:39524/" + video.videoUrl}
                        type="video/mp4"
                        alt="video"
                      />
                    </video>
                  </Carousel.Item>
                ))
              : null}
          </Carousel>
        </div>
      
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
                  <p>{post.text}</p>
                </div>
                <div>
                  <h5>Created:</h5>
                  <p> <Moment format="DD/MM/YYYY">{post.created}</Moment></p>
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
