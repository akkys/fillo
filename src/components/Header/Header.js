import React, { useState } from "react";
import "./Header.css";
import avatar from "../../images/avatar1.jpg";
import { Nav, NavItem, Navbar, NavbarBrand } from "reactstrap";
import { Offcanvas } from "react-bootstrap";
import { CiBellOn, CiCircleAlert } from "react-icons/ci";
import { BiChevronDown } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import Sidebar1 from "../Sidebar/Sidebar1";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar fixed="top" color="light">
        <NavbarBrand>
          <h1>
            <FaBars onClick={handleShow} />
            fillo
          </h1>
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
            <img src={avatar} alt="avatar" /> <span>Washim Chowdhury</span>
            <BiChevronDown />
          </NavItem>
        </Nav>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose}>
        <Sidebar />
      </Offcanvas>
    </>
  );
};

export default Header;
