import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HiOutlineViewGrid } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { FaUsers,FaUserCircle } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiAdvertisementFill,RiLogoutBoxRLine,RiLockPasswordLine } from "react-icons/ri";
import { BsFilePost } from "react-icons/bs";
import * as authServices from "../../services/AuthService";
import { setLogin } from "../../redux/Auth/AuthSlice";
import Logo from "../../helpers/images/logo.png";


const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authServices.LogoutService();
    sessionStorage.removeItem("token");
    dispatch(setLogin(null));
    window.location.reload();
     navigate("/");
    
  };
  return (
    <div className="sidebar">
      <div className="logo-details" style={{backgroundColor:"white",padding:"10px"}}>
      <img src={Logo} alt="Logo"/>
      </div>
      <ul className="nav-links">
        <li>
          <Link to={"/"} className="active">
            <i class="bx bx-grid-alt">
              <HiOutlineViewGrid />
            </i>
            <span className="links_name">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to={"/adv"}>
          <i class="bx bx-grid-alt">
              <RiAdvertisementFill />
            </i>
            <span className="links_name">Advertisement</span>
          </Link>
        </li>
        <li>
          <Link to={"/users"}>
          <i class="bx bx-grid-alt">
              <FaUsers />
            </i>
            <span className="links_name">Users</span>
          </Link>
        </li>
        <li>
          <Link to={"/posts"}>
          <i class="bx bx-grid-alt">
              <BsFilePost />
            </i>
            <span className="links_name">Posts</span>
          </Link>
        </li>
        <li>
          <Link to={"/profile"}>
            <i class="bx bx-grid-alt">
              <FaUserCircle />
            </i>
            <span className="links_name">Profile</span>
       
          </Link>
        </li>
        <li>
          <Link to={"/privacy"}>
            <i class="bx bx-grid-alt">
              <RiLockPasswordLine/>
            </i>
            <span className="links_name">Privacy</span>
       
          </Link>
        </li>
        <li  onClick={(e) => logoutHandler()}>
        <Link to={""}>
        <i class="bx bx-grid-alt">
              <RiLogoutBoxRLine />
            </i>
           <span className="links_name">Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Index;
