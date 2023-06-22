import React from "react";
import { mainData } from "../../data";
import { CiMaximize1 } from "react-icons/ci";
import { Col, Row } from "reactstrap";

const SubMain = () => {
  return (
    <Row>
      {mainData.map((data) => {
        return (
          <Col className="mt-2 main_box">
            {data.content}
            <h2>
              {data.count} <CiMaximize1 size={20} />
            </h2>
          </Col>
        );
      })}
    </Row>
  );
};

export default SubMain;
