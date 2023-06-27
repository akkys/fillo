import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Sidebar2 = () => {
  return (
    <Nav vertical="sm">
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
    </Nav>
  );
};

export default Sidebar2;
