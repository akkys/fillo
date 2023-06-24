import React from "react";
import "./Main.css";
import { Container } from "reactstrap";
import SubMain from "./SubMain";
import Search from "./Search";
import TableContainer from "./TableContainer";

const Main = () => {
  return (
    <Container fluid className="main_container">
      <h4>Accouting</h4>
      <>
        <SubMain />
        <Search />
        <TableContainer />
      </>
    </Container>
  );
};

export default Main;
