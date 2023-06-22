import React from "react";
import { Table } from "reactstrap";
import { tableHeader, tableData } from "../../data";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const TableContainer = () => {
  return (
    <Table bordered responsive className="mt-3" id="table_container">
      <TableHeader tableHeader={tableHeader} />
      <TableBody tableData={tableData} />
    </Table>
  );
};

export default TableContainer;
