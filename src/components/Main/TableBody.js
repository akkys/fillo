import React from "react";
import { Button } from "reactstrap";
import { CiFileOn } from "react-icons/ci";
import { BiChevronDown } from "react-icons/bi";

const TableBody = ({ tableData }) => {
  return (
    <tbody>
      {tableData.map((tdata) => {
        console.log(tdata);
        return (
          <>
            <tr>
              <th style={{ display: "flex" }}>
                <span>
                  <img src={tdata.avatar} alt="" />
                </span>
                <span>
                  {tdata.company}
                  <br />
                  <small>{tdata.type}</small>
                </span>
              </th>
              <td>{tdata.amount}</td>
              <td>
                {tdata.cardHolder}
                <br />
                <small>{tdata.occupation}</small>
              </td>
              <td style={{ display: "flex", justifyContent: "space-between" }}>
                {tdata.category}
                <BiChevronDown />
              </td>
              <td>
                {tdata.receipt === true ? (
                  <CiFileOn size={16} className="text-success" />
                ) : (
                  <CiFileOn size={16} className="text-danger" />
                )}
              </td>
              <td>
                {tdata.receipt === false ? (
                  <span className="text-danger">Missing Memo</span>
                ) : tdata.memo === null ? (
                  "-"
                ) : (
                  tdata.memo
                )}
              </td>
              <td>
                <Button outline>Mark Ready</Button>
              </td>
            </tr>
          </>
        );
      })}
    </tbody>
  );
};

export default TableBody;
