import React from "react";

class TableRow extends React.Component {
  constructor(props) {
    super(props);

    this.onDeleteGameClick = this.onDeleteGameClick.bind(this);
    this.onEditGameClick = this.onEditGameClick.bind(this);
    this.onGameClick = this.onGameClick.bind(this);
  }

  onGameClick() {
    const { game } = this.props;
    this.props.onGameNameClick(game);
  }

  onDeleteGameClick() {
    const { id } = this.props.game;
    this.props.onDeleteButtonClick(id);
  }

  onEditGameClick() {
    const { game } = this.props;
    this.props.onEditButtonClick(game);
  }

  render() {
    const { title } = this.props.game;

    return (
      <tr>
        <td className="games-table__game-name" onClick={this.onGameClick}>
          <span>{title}</span>
        </td>
        <td className="games-table__table-btns">
          <button
            type="button"
            className="table-btn table-edit-btn"
            onClick={this.onEditGameClick}
          />
        </td>
        <td className="games-table__table-btns">
          <button
            type="button"
            className="table-btn table-delete-btn"
            onClick={this.onDeleteGameClick}
          />
        </td>
      </tr>
    );
  }
}
export default TableRow;
