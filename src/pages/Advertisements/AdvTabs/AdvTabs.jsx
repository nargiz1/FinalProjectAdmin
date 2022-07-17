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
import moment from "moment";
import * as AdvService from "../../../services/AdvertisementService";
import { useDispatch } from "react-redux";
import { setAds } from "../../../redux/Advertisement/AdvertisementSlice";
import { Link } from "react-router-dom";


const AdvTabs = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [createAd, setCreateAd] = useState({
    Text: "",
    ImageFile: [],
    VideoFile: [],
    Deadline: "",
  });
  const dispatch = useDispatch();

  const ads = useSelector((state) => state.ad.ads);
  console.log(ads)

  useEffect(() => {
    (async function () {
      const ads = await AdvService.getAdsService();
      dispatch(setAds(ads.ads));
    })();
  }, [dispatch]);

  const handleChangeAd = (name, value) => {
    setCreateAd({ ...createAd, [name]: value });
    console.log(createAd);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const date = new Date();
    if (createAd.Deadline == "") {
      createAd.Deadline = moment(date).format();
    }
    formData.append("Text", createAd.Text);
    formData.append("Deadline", createAd.Deadline);
    formData.append("ImageFile", createAd.ImageFile[0]);
    formData.append("VideoFile", createAd.VideoFile[0]);
    const resp = await AdvService.createAdvService(formData);
    await AdvService.expireAdService(resp.id);
    console.log("ura");
  };

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
            <table class="table ">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Adv Id</th>
                  <th scope="col">Created</th>
                  <th scope="col">Is Expired?</th>
                  <th scope="col">Settings</th>
                </tr>
              </thead>
              <tbody>
                {ads?.map((ad, index) => (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{ad.id}</td>
                    <td>{ad.created}</td>
                    <td>{ad.isExpired === true ? "true" : "false"}</td>
                    <td>
                      <Link
                        to={`/ad/${ad.id}`}
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
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="container mb-5 mt-3">
            <h5 className="text-center mb-3">Create Advertisement</h5>
            <form onSubmit={handleSubmit}>
              <div className="row justify-content-center align-items-center">
                <div className="col-md-10 col-lg-6">
                  <div className="register-sign-in setting">
                    <div>
                      <input
                        type="text"
                        placeholder="Text..."
                        name="Text"
                        required
                        onChange={(e) =>
                          handleChangeAd(e.target.name, e.target.value)
                        }
                        className="form-control w-100 shadow-none mb-3"
                      />
                    </div>
                    <div>
                      <input
                        type="file"
                        placeholder="Image..."
                        accept="images/*"
                        name="ImageFile"
                        onChange={(e) =>
                          handleChangeAd(e.target.name, e.target.files)
                        }
                        className="form-control w-100 shadow-none mb-3"
                      />
                    </div>
                    <div>
                      <input
                        type="file"
                        placeholder="Video..."
                        accept="videos/*"
                        name="VideoFile"
                        onChange={(e) =>
                          handleChangeAd(e.target.name, e.target.files)
                        }
                        className="form-control w-100 shadow-none mb-3"
                      />
                    </div>
                    <div>
                      <input
                        type="datetime-local"
                        placeholder="Deadline..."
                        name="Deadline"
                        required
                        onChange={(e) =>
                          handleChangeAd(e.target.name, e.target.value)
                        }
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
