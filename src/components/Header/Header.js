import React from "react";
import "./Header.css";
import avatar from "../../images/avatar1.jpg";
import { Badge, Nav, NavItem, Navbar, NavbarBrand } from "reactstrap";
import { CiBellOn, CiCircleAlert } from "react-icons/ci";
import { BiChevronDown } from "react-icons/bi";

const Header = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <h1>fillo</h1>
      </NavbarBrand>
      <Nav className="_navbar">
        <NavItem className="notification">
          <CiCircleAlert />
          <span className="badge">-</span>
        </NavItem>
        <NavItem className="notification1">
          <CiBellOn />
          <span className="badge">-</span>
        </NavItem>
        <NavItem>
          <img src={avatar} alt="avatar" /> Washim Chowdhury <BiChevronDown />
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
