import React from "react";
import "./Header.css";
import avatar from "../../images/avatar1.jpg";
import { Nav, NavItem, Navbar, NavbarBrand } from "reactstrap";
import { CiBellOn, CiCircleAlert } from "react-icons/ci";
import { BiChevronDown } from "react-icons/bi";

const Header = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <h1>fillo</h1>
      </NavbarBrand>
      <Nav className="_navbar">
        <NavItem>
          <CiCircleAlert size={17} />
        </NavItem>
        <NavItem>
          <CiBellOn size={17} />
        </NavItem>
        <NavItem>
          <img src={avatar} alt="avatar" /> Washim Chowdhury <BiChevronDown />
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
