import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/index";
import { useParams } from "react-router-dom";
import { setUserById } from "../../redux/User/UserSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Index = () => {
  const { userId } = useParams();
  const [updatedUser, setUpdatedUser] = useState({
    userName: "",
    fullName: "",
    email: "",
    birthDate: "",
    status: "",
    country: "",
    education: "",
    occupation: "",
    relationshipStatus: "",
    socialMediaLinks: [],
  });

  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      const user = await UserService.getUserByIdService(userId);
      dispatch(setUserById(user));
    })();
  }, [userId, dispatch]);

  const user = useSelector((state) => state.user.userById);

  console.log(user.socialMediaLinks);

  return (
    <>
      <Sidebar />
      <div class="home-section overflow-hidden">
        <form>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-10 col-lg-5 mt-5">
              <div className="register-sign-in setting">
                <div>
                  <input
                    type="text"
                    placeholder="UserName"
                    name="userName"
                    required
                    value={user.userName}
                    className="form-control w-100 shadow-none mb-3"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="FullName"
                    name="fullName"
                    value={user.fullName}
                    className="form-control w-100 shadow-none mb-3"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    value={user.email}
                    className="form-control w-100 shadow-none mb-3"
                  />
                </div>
                <div>
                  <input
                    type="date"
                    placeholder="BirthDate"
                    name="birthDate"
                    value={user.birthDate?.split("T")[0]}
                    className="form-control w-100 shadow-none mb-3"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Status"
                    name="status"
                    value={user.status}
                    className="form-control w-100 shadow-none mb-3"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-10 col-lg-5 mt-5">
              <div className="register-sign-in setting">
                <div>
                  <input
                    type="text"
                    placeholder="Country"
                    name="country"
                    value={user.country}
                    className="form-control w-100 shadow-none mb-3"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Education"
                    name="education"
                    value={user.education}
                    className="form-control w-100 shadow-none mb-3"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Occupation"
                    name="occupation"
                    value={user.occupation}
                    className="form-control w-100 shadow-none mb-3"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Relationship Status"
                    name="relationshipStatus"
                    value={user.relationshipStatus}
                    className="form-control w-100 shadow-none mb-3"
                  />
                </div>
                {
                  user.socialMediaLinks?.map((sl, index) => {
                    <div key={index}>here
                      {/* <input
                        type="text"
                        placeholder="Social Media Link"
                        name="socialMediaLinks"
                        value={sl.link}
                        className="form-control w-100 shadow-none mb-3"
                      /> */}
                    </div>;
                  })}

                <div>
                  <button className="w-100 fw-bold mt-3">Change</button>
                </div>
              </div>
            </div>
            <div className="mt-4 d-flex align-items-center ms-3">
              <Link
                to={`/user/${user.id}`}
                className="text-decoration-none fs-2 me-5"
              >
                <BsArrowLeft />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Index;
