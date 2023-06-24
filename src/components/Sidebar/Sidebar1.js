import React from "react";
import "./Sidebar.css";
import { Container, List } from "reactstrap";
import Profile from "./Profile";
import { sidebarContent } from "../../data";

const Sidebar1 = () => {
  return (
    <Container fluid className="sidebar_container">
      <List type="unstyled">
        <Profile />
        {sidebarContent.map((sidebarData) => {
          return (
            <li>
              <sidebarData.avatar className="icons" />
              {sidebarData.content}
            </li>
          );
        })}
      </List>
    </Container>
  );
};

export default Sidebar1;
