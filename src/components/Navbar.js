import React from "react";
import logo from "../assets/logo2.svg";
import { FiSearch } from "react-icons/fi";
import { RiVideoAddFill, RiAccountCircleFill } from "react-icons/ri";
import {
  MdApps,
  MdNotifications,
  MdKeyboardVoice,
  MdMenu,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { toggleSidenav, setActiveLink } = useGlobalContext();
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <button
            className="sidenav-toggle btn"
            onClick={() => toggleSidenav()}
          >
            <MdMenu />
          </button>
          <Link
            to="/"
            onClick={() =>
              setActiveLink({
                home: true,
                trending: false,
                subscriptions: false,
              })
            }
          >
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-search">
          <form action="#">
            <input type="text" placeholder="Search" />
            <button className="btn search-btn">
              <FiSearch />
            </button>
            <button className="btn voicesearch-btn">
              <MdKeyboardVoice />
            </button>
          </form>
        </div>
        <div className="navbar-right">
          <ul className="navbar-right-icons">
            <li>
              <RiVideoAddFill />
            </li>
            <li>
              <MdApps />
            </li>
            <li>
              <MdNotifications />
            </li>
            <li>
              <RiAccountCircleFill />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
