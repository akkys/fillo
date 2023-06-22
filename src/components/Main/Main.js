import React from "react";
import "./Main.css";
import { Button, Col, Container, Row } from "reactstrap";
import SubMain from "./SubMain";
import Search from "./Search";
import TableContainer from "./TableContainer";

const Main = () => {
  return (
    <Container fluid className="main_container">
      <h4>Accouting</h4>
      <Container>
        <SubMain />
        <Search />
        <TableContainer />
      </Container>
    </Container>
  );
};

export default Main;
