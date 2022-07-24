import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/index";
import * as postServices from "../../services/PostService";
import { setPosts } from "../../redux/Post/PostSlice";
import ReactPaginate from "react-paginate";
import Pagination from "../../components/Pagination/Pagination";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Index = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state?.post?.posts);

  const [pagination, setPagination] = useState({
    start: 0,
    limit: 9,
    pageNumber: 0
  })

  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    (async function () {
      console.log("first", pagination)
      const posts = await postServices.getAllPostsService(pagination);
      dispatch(setPosts(posts));
      setPageCount(Math.ceil(posts.count/pagination.limit))

    })();
  }, [pagination, dispatch]);

  console.log("posts", posts)

  const deletePost = async (id) => {
    await postServices.deletePostService(id);
    const posts = await postServices.getAllPostsService();
    dispatch(setPosts(posts));
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
                <th scope="col">User Name</th>
                <th scope="col">Settings</th>
              </tr>
            </thead>
            <tbody>
              {posts?.allPosts?.map((post, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">{post.id}</th>
                  <td>{post.user?.userName}</td>
                  <td>
                    <Link
                      to={`/post/${post.id}`}
                      className="text-decoration-none me-2"
                    >
                      <button type="button" className="btn btn-primary">
                        View
                      </button>
                    </Link>

                    <button
                      type="button"
                      className="btn btn-danger me-2"
                      onClick={() => {
                        deletePost(post.id);
                      }}
                    >
                      Delete
                    </button>
                    <Link
                      to={`/comments/${post.id}`}
                      className="text-decoration-none"
                    >
                      <button type="button" className="btn btn-success">
                        Comments
                      </button>
                    </Link>
                  </td>
                  {/* <td>
                  <Link
                    to={`/user/`}
                    key={index}
                    className="text-decoration-none"
                  ><button type="button" className="btn btn-primary">Delete</button></Link>
                </td>
                <td>
                  <Link
                    to={`/comments`}
                    key={index}
                    className="text-decoration-none"
                  ><button type="button" className="btn btn-primary">Comments</button></Link>
                </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <Pagination pageCount={pageCount} pagination={pagination} setPagination={setPagination}/>
        </div>
      </div>
    </>
  );
};

export default Index;
