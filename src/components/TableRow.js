import React from "react";

function TableRow(props) {
  return (
    <tr>
      <td>{props.obj.id}</td>
      <td>{props.obj.name}</td>
    </tr>
  );
}
export default TableRow;
