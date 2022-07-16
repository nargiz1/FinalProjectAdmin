import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Tabs from "../../../components/Tabs/Tabs";
import TabPanel from "../../../components/Tabs/TabPanel";
import * as authServices from "../../../services/AuthService";
import * as userServices from "../../../services/UserService";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdVideoCall } from "react-icons/md";
import "./AdvTabs.css";

const AdvTabs = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log("val: ", value);
  return (
    <>
      <Tabs
        activeTab={value}
        handleTabChange={handleChange}
        tabs={["Advertisements", "Create"]}
      >
        <TabPanel value={value} index={0}>
          <div className="container mb-5 mt-3">
            <h5 className="text-center mb-3">Advertisements</h5>
            <form>
              <div className="row justify-content-center align-items-center">
                <div className="col-md-10 col-lg-6">
                  <div className="register-sign-in setting">
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
            <h5 className="text-center mb-3">Create Advertisement</h5>
            <form>
              <div className="row justify-content-center align-items-center">
                <div className="col-md-10 col-lg-6">
                  <div className="register-sign-in setting">
                    <div>
                      <input
                        type="text"
                        placeholder="Text..."
                        name="Text"
                        required
                        className="form-control w-100 shadow-none mb-3"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Country"
                        name="Country"
                        className="form-control w-100 shadow-none mb-3"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Education"
                        name="Education"
                        className="form-control w-100 shadow-none mb-3"
                        
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Occupation"
                        name="Occupation"
                        className="form-control w-100 shadow-none mb-3"
                        
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Relationship status"
                        name="RelationshipStatus"
                        className="form-control w-100 shadow-none mb-3"
                        
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Status"
                        name="Status"
                        className="form-control w-100 shadow-none mb-3"
                        
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Social media links"
                        name="SocialMediaLinks"
                        className="form-control w-100 shadow-none mb-3"
                        
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Phone number"
                        name="PhoneNumber"
                        className="form-control w-100 shadow-none mb-3"
                        
                      />
                    </div>
                    <div>
                      <button className="w-100 fw-bold mt-3">Update</button>
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

export default AdvTabs;