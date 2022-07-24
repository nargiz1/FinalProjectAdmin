import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/index";
import * as UserService from "../../services/UserService";
import { setUsers } from "../../redux/User/UserSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";

const Index = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);

  const [pagination, setPagination] = useState({
    start: 0,
    limit: 9,
    pageNumber: 0
  })

  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    (async function () {
      const users = await UserService.getUsersService(pagination);
      dispatch(setUsers(users.users));
      setPageCount(Math.ceil(users.count/pagination.limit))
    })();
  }, [pagination, dispatch]);

  console.log(users);

  return (
    <>
      <Sidebar />
      <div class="home-section">
        <div>
          <div className="container mb-5 pt-3">
            <h5 className="text-center mb-3">Users</h5>
            <table class="table ">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">User Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Is active?</th>
                  <th scope="col">Settings</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td>{user.isActive === true ? "true" : "false"}</td>
                    <td>
                      <Link
                        to={`/user/${user.id}`}
                        key={index}
                        className="text-decoration-none"
                      >
                        <button type="button" class="btn btn-primary">
                          View
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination pageCount={pageCount} pagination={pagination} setPagination={setPagination}/>
      </div>
    </>
  );
};

export default Index;
