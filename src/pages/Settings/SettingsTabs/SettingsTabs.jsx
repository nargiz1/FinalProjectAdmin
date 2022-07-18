import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../../redux/User/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import Tabs from "../../../components/Tabs/Tabs";
import TabPanel from "../../../components/Tabs/TabPanel";
import * as authServices from "../../../services/AuthService";
import * as userServices from "../../../services/UserService";

const SettingTabs = () => {

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state?.user?.currentUser);
  console.log("Cuser",currentUser);
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [updateUserData, setUpdateUserData] = useState({
    FullName: "",
    RelationshipStatus: "",
    Occupation: "",
    Education: "",
    Status: "",
    Country: "",
    PhoneNumber:"",
    SocialMediaLinks:[]
  });

  const [updatePasswordData, setUpdatePasswordData] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
    passwordConfirm: ""
  });
  
  useEffect(() => {
    (async function () {
      const user = await userServices.getUserService();
      dispatch(setCurrentUser(user));
    })();
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setUpdateUserData({
        FullName: currentUser.fullName,
        Country: currentUser.country ?? "",
        Education: currentUser.education ?? "",
        Occupation: currentUser.occupation ?? "",
        RelationshipStatus: currentUser.relationshipStatus ?? "",
        Status: currentUser.status ?? "",
        PhoneNumber:currentUser.phoneNumber ?? "",
        SocialMediaLinks:currentUser.socialMediaLinks ?? []
      })
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      setUpdatePasswordData({
        email: currentUser.email ?? "",
      })
    }
  }, [currentUser]);

  const handleUserChange = (name, value) => {
    setUpdateUserData({ ...updateUserData, [name]: value });
  };
  const handlePasswordChange = (name, value) => {
    setUpdatePasswordData({ ...updatePasswordData, [name]: value });
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    console.log("updateUserData", updateUserData);
     const resp = await userServices.UpdateUserService(updateUserData);
     navigate("/user");
  };
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    console.log("updatePasswordData", updatePasswordData);
     const resp = await authServices.ChangePasswordService(updatePasswordData);
  };
  return (
    <>
      <Tabs
        activeTab={value}
        handleTabChange={handleChange}
        tabs={["Profile", "Privacy"]}
      >
        <TabPanel value={value} index={0}>
          <div className="container mb-5 mt-3">
            <h5 className="text-center mb-3">Update Profile</h5>
            <form onSubmit={handleUserSubmit}>
              <div className="row justify-content-center align-items-center">
                <div className="col-md-10 col-lg-6">
                  <div className="register-sign-in setting">
                    <div>
                      <input
                        type="text"
                        placeholder="Fullname"
                        name="FullName"
                        required
                        value={updateUserData.FullName}
                        className="form-control w-100 shadow-none mb-3"
                        onChange={(e) =>
                          handleUserChange(e.target.name, e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Country"
                        name="Country"
                        value={updateUserData.Country}
                        className="form-control w-100 shadow-none mb-3"
                        onChange={(e) =>
                          handleUserChange(e.target.name, e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Education"
                        name="Education"
                        value={updateUserData.Education}
                        className="form-control w-100 shadow-none mb-3"
                        onChange={(e) =>
                          handleUserChange(e.target.name, e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Occupation"
                        name="Occupation"
                        value={updateUserData.Occupation}
                        className="form-control w-100 shadow-none mb-3"
                        onChange={(e) =>
                          handleUserChange(e.target.name, e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Relationship status"
                        name="RelationshipStatus"
                        value={updateUserData.RelationshipStatus}
                        className="form-control w-100 shadow-none mb-3"
                        onChange={(e) =>
                          handleUserChange(e.target.name, e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Status"
                        name="Status"
                        value={updateUserData.Status}
                        className="form-control w-100 shadow-none mb-3"
                        onChange={(e) =>
                          handleUserChange(e.target.name, e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Social media links"
                        name="SocialMediaLinks"
                        value={updateUserData.SocialMediaLinks}
                        className="form-control w-100 shadow-none mb-3"
                        onChange={(e) =>
                          handleUserChange(e.target.name, e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Phone number"
                        name="PhoneNumber"
                        value={updateUserData.PhoneNumber}
                        className="form-control w-100 shadow-none mb-3"
                        onChange={(e) =>
                          handleUserChange(e.target.name, e.target.value)
                        }
                      />
                    </div>
                    {/* <div>
                       {updateUserData.SocialMediaLinks.map(link => {
                        return (
                          <input
                            type="text"
                            placeholder="Social media links"
                            name="SocialMediaLinks"
                            value={updateUserData.SocialMediaLinks}
                            className="form-control w-100 shadow-none mb-3"
                            onChange={(e) =>
                              handleUserChange(e.target.name, e.target.value)
                            }
                          />
                        )
                      })} 
                    </div> */}
                    <div>
                      <button className="w-100 fw-bold mt-3">Update</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div className="container mb-5 mt-3">
        <h5 className="text-center mb-3">Change Password</h5>
            <form onSubmit={handlePasswordSubmit}>
              <div className="row justify-content-center align-items-center">
                <div className="col-md-10 col-lg-6">
                  <div className="register-sign-in setting">
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={updatePasswordData.email}
                        required
                        className="form-control w-100 shadow-none mb-3"
                        onChange={(e) =>
                          handlePasswordChange(e.target.name, e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        placeholder="Password"
                        name="currentPassword"
                        className="form-control w-100 shadow-none mb-3"
                        onChange={(e) =>
                          handlePasswordChange(e.target.name, e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        placeholder="New password"
                        name="newPassword"
                        className="form-control w-100 shadow-none mb-3"
                        onChange={(e) =>
                          handlePasswordChange(e.target.name, e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        placeholder="New password again"
                        name="passwordConfirm"
                        className="form-control w-100 shadow-none mb-3"
                        onChange={(e) =>
                          handlePasswordChange(e.target.name, e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <button className="w-100 fw-bold mt-3">Change</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </TabPanel> 
      </Tabs>
    </>
  );
};

export default SettingTabs;
