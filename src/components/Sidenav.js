import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHome, IoMdCompass } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { useGlobalContext } from "../context";

const Sidenav = () => {
  const { isSidenavOpen, activeLink, setActiveLink } = useGlobalContext();
  // console.log(isSidenavOpen);

  return (
    <aside
      className={`${isSidenavOpen ? "sidenav sidenav-closed" : "sidenav"}`}
    >
      <ul className="sidenav-items sidenav-items-1">
        <li>
          <Link
            className={`${activeLink.home && "active"}`}
            to="/"
            onClick={() =>
              setActiveLink({
                home: true,
                trending: false,
                subscriptions: false,
              })
            }
          >
            <IoMdHome />
            <span className="list-name">Home</span>
          </Link>
        </li>
        <li>
          <Link
            id="trending"
            className={`${activeLink.trending && "active"}`}
            onClick={() =>
              setActiveLink({
                home: false,
                trending: true,
                subscriptions: false,
              })
            }
            to="/trending"
          >
            <IoMdCompass />
            <span className="list-name">Explore</span>
          </Link>
        </li>
        <li>
          <Link
            id="subscriptions"
            className={`${activeLink.subscriptions && "active"}`}
            onClick={() =>
              setActiveLink({
                home: false,
                trending: false,
                subscriptions: true,
              })
            }
            to="/subscriptions"
          >
            <MdSubscriptions />
            <span className="list-name">Subscriptions</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidenav;
