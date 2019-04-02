import React from "react";

class TableHead extends React.Component {
  render() {
    return (
      <tr className="table-head">
        <th>№</th>
        <th>Название</th>
        <th />
        <th>
          <button type="button" className="table-btn table-add-btn" />
        </th>
      </tr>
    );
  }
}
export default TableHead;
