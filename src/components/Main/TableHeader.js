import React from "react";

const TableHeader = ({ tableHeader }) => {
  return (
    <thead>
      <tr className="table_header">
        {tableHeader.map((thead) => {
          return <th>{thead}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
