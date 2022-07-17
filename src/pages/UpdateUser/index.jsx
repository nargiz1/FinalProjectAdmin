import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/index";
import { useParams } from "react-router-dom";
import { setUserById } from "../../redux/User/UserSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import {  useNavigate } from "react-router-dom";


const Index = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userById);
  const [updatedUser, setUpdatedUser] = useState({
    userId: "",
    fullName: "",
    birthDate: "",
    status: "",
    country: "",
    education: "",
    occupation: "",
    phoneNumber: "",
    relationshipStatus: "",
    socialMediaLinks: [],
  });

  useEffect(() => {
    if (user) {
      setUpdatedUser({
        userId: user.id,
        fullName: user.fullName ?? "",
        birthDate: user.birthDate ?? "",
        country: user.country ?? "",
        education: user.education ?? "",
        occupation: user.occupation ?? "",
        relationshipStatus: user.relationshipStatus ?? "",
        status: user.status ?? "",
        phoneNumber: user.phoneNumber ?? "",
        socialMediaLinks: user.socialMediaLinks.map((sl) => sl.link) ?? [],
      });
    }
  }, [user]);

  useEffect(() => {
    (async function () {
      const user = await UserService.getUserByIdService(userId);
      dispatch(setUserById(user));
    })();
  }, [userId, dispatch]);

  const handleUserChange = (name, value) => {
    setUpdatedUser({ ...updatedUser, [name]: value
    });
    console.log(updatedUser);
  };
  const handleUserSubmit = async (e) => {
    e.preventDefault();
    const resp = await UserService.UpdateUserService(updatedUser);
    navigate(`/user/${user.id}`);
  };

  return (
    <>
      <Sidebar />
      <div class="home-section overflow-hidden">
        <form onSubmit={handleUserSubmit}>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-10 col-lg-5 mt-5">
              <div className="register-sign-in setting">
                
                <div>
                  <input
                    type="text"
                    placeholder="FullName"
                    name="fullName"
                    onChange={(e) =>
                      handleUserChange(e.target.name, e.target.value)
                    }
                    value={updatedUser?.fullName}
                    className="form-control w-100 shadow-none mb-3"
                  />
                </div>
                
                <div>
                  <input
                    type="datetime-local"
                    placeholder="BirthDate"
                    name="birthDate"
                    onChange={(e) =>
                      handleUserChange(e.target.name, e.target.value)
                    }
                    value={updatedUser?.birthDate}
                    className="form-control w-100 shadow-none mb-3"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Status"
                    name="status"
                    onChange={(e) =>
                      handleUserChange(e.target.name, e.target.value)
                    }
                    value={updatedUser?.status}
                    className="form-control w-100 shadow-none mb-3"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Phone"
                    name="phoneNumber"
                    onChange={(e) =>
                      handleUserChange(e.target.name, e.target.value)
                    }
                    value={updatedUser?.phoneNumber}
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
                    onChange={(e) =>
                      handleUserChange(e.target.name, e.target.value)
                    }
                    value={updatedUser?.country}
                    className="form-control w-100 shadow-none mb-3"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Education"
                    name="education"
                    onChange={(e) =>
                      handleUserChange(e.target.name, e.target.value)
                    }
                    value={updatedUser?.education}
                    className="form-control w-100 shadow-none mb-3"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Occupation"
                    name="occupation"
                    onChange={(e) =>
                      handleUserChange(e.target.name, e.target.value)
                    }
                    value={updatedUser?.occupation}
                    className="form-control w-100 shadow-none mb-3"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Relationship Status"
                    name="relationshipStatus"
                    onChange={(e) =>
                      handleUserChange(e.target.name, e.target.value)
                    }
                    value={updatedUser?.relationshipStatus}
                    className="form-control w-100 shadow-none mb-3"
                  />
                </div>
                {/* {updatedUser?.socialMediaLinks?.map((sl, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      placeholder="Social Media Link"
                      name="socialMediaLinks"
                      onChange={(e) =>
                        handleUserChange(e.target.name, e.target.value)
                      }
                      value={sl.link}
                      className="form-control w-100 shadow-none mb-3"
                    />
                  </div>
                ))} */}
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
