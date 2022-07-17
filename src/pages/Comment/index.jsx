import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/index";
import * as commentServices from "../../services/CommentService";
import { setComment } from "../../redux/Comment/CommentSlice";

import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Index = () => {
  const { commentId } = useParams();
  const dispatch = useDispatch();
  const comment = useSelector((state) => state?.comment?.comment);

  useEffect(() => {
    (async function () {
      const comment = await commentServices.getPostCommentService(commentId);
      console.log("comment", comment);
      dispatch(setComment(comment));
    })();
  }, [commentId, dispatch]);
  return (
    <>
      <Sidebar />
      <div className="home-section">
     <div className="home-section-inner">
     <div className="container">
          <div className="row">
            <div className="col-lg-12 mt-3">
            <div>
                <h5>ID:</h5>
                <p>{comment.id}</p>
              </div>
              <div>
                <h5>Created:</h5>
                <p>{comment.created}</p>
              </div>
              <div>
                <h5>Text:</h5>
                <p>{comment.text}</p>
              </div>
            </div>
            <Link to={`/comments/${comment.postId}`} className="text-decoration-none fs-2 me-5">
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
