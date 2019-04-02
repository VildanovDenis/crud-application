import React from "react";

class TableRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td />
      </tr>
    );
  }
}
export default TableRow;
