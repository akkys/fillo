import React from "react";
import "./Sidebar.css";
import Profile from "./Profile";
import { sidebarContent } from "../../data";
import { Offcanvas } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="sidebar_container1">
      <ul>
        <Profile />
        {sidebarContent.map((sidebarData) => {
          return (
            <li>
              <sidebarData.avatar size={20} className="icons" />
              {sidebarData.content}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
