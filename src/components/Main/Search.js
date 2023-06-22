import React from "react";
import { Col, Row } from "reactstrap";
import { CiCalendar, CiCalendarDate, CiDollar, CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <Row className="mt-3 search">
      <Col md={4} className="mt-2 search_field">
        <CiSearch className="icons" />
        <input placeholder="Search & Filter" className="text_field" />
      </Col>
      <Col md={4} className="mt-2 search_field">
        <CiCalendarDate className="icons" />
        <input placeholder="Jun 06,2023 - Jun 30,2023" className="text_field" />
      </Col>
      <Col className="mt-2 icons_main">
        <div className="icon_div">
          <span className="icons_tag">
            <CiDollar size={17} />
          </span>
          <span className="icons_tag">
            <CiCalendar size={17} />
          </span>
        </div>
        <div>
          <span>Sync (10)</span>
        </div>
      </Col>
    </Row>
  );
};

export default Search;
