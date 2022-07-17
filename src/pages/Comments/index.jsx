import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/index";
import * as commentServices from "../../services/CommentService";
import { setComments } from "../../redux/Comment/CommentSlice";

import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Index = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector((state) => state?.comment?.comments);
  console.log("comments red",comments);

  useEffect(() => {
    (async function () {
      const comments = await commentServices.getPostCommentsService(postId);
    
       dispatch(setComments(comments));
    })();
  }, [postId, dispatch]);

  const deleteComment = async (id) => {
    await commentServices.deleteCommentService(id);
    const comments = await commentServices.getPostCommentsService(postId);
    dispatch(setComments(comments));
  };
  return (
    <>
    <Sidebar />
    <div className="home-section">
     <div className="home-section-inner">
     <table className="table ">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">ID</th>
              <th scope="col">Settings</th>
            </tr>
          </thead>
          <tbody>
            {comments&&comments.length>0?(
              comments.map((comment, index) => (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{comment.id}</td>
                  <td>
                    <Link
                      to={`/comment/${comment.id}`}
                      key={index}
                      className="text-decoration-none"
                    ><button type="button" className="btn btn-primary me-2">View</button></Link>
                       <button
                    type="button"
                    className="btn btn-danger me-2"
                    onClick={() => {
                      deleteComment(comment.id);
                    }}
                  >
                    Delete
                  </button>
                  </td>
                </tr>
              ))
            ):"Postun commenti yoxdur"
            }
          </tbody>
        </table>
        <Link to={`/posts`} className="text-decoration-none fs-2 me-5">
                <BsArrowLeft />
              </Link>
     </div>
      </div>
  </>
  )
}

export default Index
