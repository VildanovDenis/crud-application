import React from "react";

class TableHead extends React.Component {
  render() {
    return (
      <tr className="table-head">
        <th className="games-table__game-name">Название</th>
        <th className="games-table__table-btns" />
        <th className="games-table__table-btns">
          <button
            type="button"
            className="table-btn table-add-btn"
            onClick={this.props.onAddButtonClick}
          />
        </th>
      </tr>
    );
  }
}
export default TableHead;
