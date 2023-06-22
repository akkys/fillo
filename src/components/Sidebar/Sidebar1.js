import React from "react";
import "./Sidebar.css";
import { Container, List } from "reactstrap";
import Profile from "./Profile";
import {
  CiBoxes,
  CiSettings,
  CiDollar,
  CiCreditCard1,
  CiShop,
  CiChat2,
  CiUser,
  CiBadgeDollar,
  CiCreditCard2,
  CiMedal,
} from "react-icons/ci";
import { sidebarContent } from "../../data";

const Sidebar1 = () => {
  return (
    <Container fluid className="sidebar_container">
      <List type="unstyled">
        <Profile />
        {sidebarContent.map((sidebarData) => {
          return (
            <li>
              <sidebarData.avatar size={20} className="icons" />
              {sidebarData.content}
            </li>
          );
        })}
      </List>
    </Container>
  );
};

export default Sidebar1;
