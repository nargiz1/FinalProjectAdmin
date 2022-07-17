import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/index";
import * as UserService from "../../services/UserService";
import { useParams } from "react-router-dom";
import { setUserById } from "../../redux/User/UserSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import classes from "../../styles/user.module.css";
import { userClasses } from "../../styles/userClasses";

const Index = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.userById);

  useEffect(() => {
    (async function () {
      const user = await UserService.getUserByIdService(userId);
      dispatch(setUserById(user));
    })();
  }, [userId, dispatch]);

  const userActive = async (userId) => {
    await UserService.DisableUnableUser(userId);
    const user = await UserService.getUserByIdService(userId);
    dispatch(setUserById(user));
  };

  return (
    <>
      <Sidebar />
      <div class="home-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-3">
              <img
                className="rounded-circle img-thumbnail w-100"
                src={"http://localhost:39524/" + user.imageUrl}
              />
            </div>
            <div className="col-lg-4  mt-5 ms-5">
              <div>
                <h5>User Name:</h5>
                <p>{user.userName}</p>
              </div>
              <div>
                <h5>Fullname:</h5>
                <p>{user.fullName}</p>
              </div>
              <div>
                <h5>email:</h5>
                <p>{user.email}</p>
              </div>
              <div>
                <h5>Is Active:</h5>
                <p>{user.isActive === true ? "Active" : "Disabled"}</p>
              </div>
              <div>
                <h5>Email Confirmed:</h5>
                <p>{user.emailConfirmed === true ? "true" : "false"}</p>
              </div>
              <div>
                <h5>Birthdate:</h5>
                <p>{user.birthDate}</p>
              </div>
            </div>
            <div className="col-lg-3 mt-5">
              <div>
                <h5>Status:</h5>
                <p>{user.status}</p>
              </div>
              <div>
                <h5>Country:</h5>
                <p>{user.country}</p>
              </div>
              <div>
                <h5>Education:</h5>
                <p>{user.education}</p>
              </div>
              <div>
                <h5>Occupation:</h5>
                <p>{user.occupation}</p>
              </div>
              <div>
                <h5>Relationship Status:</h5>
                <p>{user.relationshipStatus}</p>
              </div>
              {user?.socialMediaLinks?.map((sml, index) => (
                <div key={index}>
                  <h5>Social Media Link:</h5>
                  <p className={classes.user_social_media_link}>{sml.link}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 d-flex align-items-center">
              <Link to={`/users`} className="text-decoration-none fs-2 me-5">
                <BsArrowLeft />
              </Link>
              <Link
                to={`/updateUser/${user.id}`}
                className="text-decoration-none fs-2 me-2"
              >
                <button type="button" class="btn btn-secondary me-4">
                  Edit
                </button>
              </Link>
              {user.isActive === true ? (
                <button
                  type="button"
                  class="btn btn-danger me-4"
                  onClick={(e) => userActive(user.id)}
                >
                  Disable
                </button>
              ) : (
                <button
                  type="button"
                  class="btn btn-success me-4"
                  onClick={(e) => userActive(user.id)}
                >
                  Activate
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
