import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/index";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as AdvService from "../../services/AdvertisementService";
import { setAd } from "../../redux/Advertisement/AdvertisementSlice";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";


const Index = () => {
  const { adId } = useParams();
  const dispatch = useDispatch();

  const ad = useSelector((state) => state.ad.ad);

  useEffect(() => {
    (async function () {
      const ad = await AdvService.getUAdByIdService(adId);
      dispatch(setAd(ad));
    })();
  }, [adId, dispatch]);

  console.log(ad);

  return (
    <>
      <Sidebar />
      <div class="home-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-3">
              {ad.imageUrl && (
                <img
                  className="mb-5 w-100"
                  src={"http://localhost:39524/" + ad.imageUrl}
                />
              )}
              {ad.videoUrl && (
                <video
                    controls
                  className="w-100"
                  src={"http://localhost:39524/" + ad.videoUrl}
                />
              )}
            </div>
            <div className="col-lg-4  mt-5 ms-5">
              <div>
                <h5>Advertisement Id:</h5>
                <p>{ad.id}</p>
              </div>
              <div>
                <h5>Created:</h5>
                <p>{ad.created}</p>
              </div>
              <div>
                <h5>Expiration Date:</h5>
                <p>{ad.deadline}</p>
              </div>
              <div>
                <h5>Advertisement Expired:</h5>
                <p>{ad.isExpired === true ? "true" : "false"}</p>
              </div>
            </div>
            <div className="col-lg-3 mt-5">
              <div>
                <h5>Text:</h5>
                <p>{ad.text}</p>
              </div>
            </div>
            <div className="mt-4 d-flex align-items-center">
              <Link to={`/adv`} className="text-decoration-none fs-2 me-5">
                <BsArrowLeft />
              </Link>
              {/* <Link
                to={`/updateUser/${user.id}`}
                className="text-decoration-none fs-2 me-2"
              >
                <button type="button" class="btn btn-secondary me-4">
                  Edit
                </button>
              </Link> */}
              {/* {user.isActive === true ? (
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
              )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
