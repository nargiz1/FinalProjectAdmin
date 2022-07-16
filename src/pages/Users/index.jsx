import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/index";
import * as UserService from "../../services/UserService";
import { setUsers } from "../../redux/User/UserSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Index = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    (async function () {
      const users = await UserService.getUsersService();
      dispatch(setUsers(users.users));
    })();
  }, [dispatch]);

  console.log(users);

  return (
    <>
      <Sidebar />
      <div class="home-section">
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
                <th scope="row">{index}</th>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.isActive === true ? "true" : "false"}</td>
                <td>
                  <Link
                    to={`/user/${user.id}`}
                    key={index}
                    className="text-decoration-none"
                  ><button type="button" class="btn btn-primary">View</button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Index;
