import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import SidebarData from "./SidebarData";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const Showsidebar = () => setSidebar(!sidebar);

  return (
    <div className="navbar">
      <Link to="#" className="menu-bars">
        <FaBars onClick={Showsidebar} style={{color:'black'}} />
      </Link>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={Showsidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiOutlineClose style={{color:'white'}} />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
