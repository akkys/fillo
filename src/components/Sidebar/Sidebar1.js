import React from "react";
import "./Sidebar.css";
import { Container, List, Nav, NavItem, NavLink } from "reactstrap";
import Profile from "./Profile";
import { sidebarContent } from "../../data";

const Sidebar1 = () => {
  return (
    <Nav vertical="md" className="sidebar_container">
      <Profile />
      {sidebarContent.map((sidebarData, i) => {
        return (
          <NavItem key={i}>
            <NavLink>
              <sidebarData.avatar className="icons" />
              {sidebarData.content}
            </NavLink>
          </NavItem>
        );
      })}
    </Nav>
  );
};

export default Sidebar1;
