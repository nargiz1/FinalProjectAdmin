import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineViewGrid } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiAdvertisementFill,RiLogoutBoxRLine } from "react-icons/ri";
import { BsFilePost } from "react-icons/bs";
import Logo from "../../helpers/images/logo.png";


const Index = () => {
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
          <Link to={"/account"}>
          <i class="bx bx-grid-alt">
              <MdOutlineAccountCircle />
            </i>
            <span className="links_name">Account</span>
          </Link>
        </li>
        <li>
          <Link to={"/settings"}>
            <i class="bx bx-grid-alt">
              <FiSettings />
            </i>
            <span className="links_name">Settings</span>
          </Link>
        </li>
        <li>
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
