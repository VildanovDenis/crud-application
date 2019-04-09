import React from "react";

import "./index.css";

/**
 * Пагинация по списку игр
 */
class Paginate extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    const page = event.target.getAttribute("page");
    this.props.onPaginationButtonClick(page);
  }

  render() {
    return this.props.paginate === undefined ? null : this.props.paginate ===
      null ? (
      <span>Страница больше не существует</span>
    ) : (
      <ul className="pagination">
        <li className="pagination__item pagination__item--first">
          <button
            type="button"
            className="pagination__btn"
            onClick={this.onButtonClick}
            disabled={
              this.props.paginate.first._page === this.props.currentPage
                ? true
                : false
            }
            page={this.props.paginate.first._page}
          >
            {this.props.paginate.first._page}
          </button>
        </li>
        <li className="pagination__item">
          <button
            type="button"
            className="pagination__btn"
            title="Предыдущая"
            onClick={this.onButtonClick}
            disabled={this.props.paginate.prev === undefined ? true : false}
            page={
              this.props.paginate.prev === undefined
                ? ""
                : this.props.paginate.prev._page
            }
          >
            &#10229;
          </button>
        </li>
        <li className="pagination__item pagination__item--actual">
          <button type="button" className="pagination__btn" disabled={true}>
            ...
          </button>
        </li>
        <li className="pagination__item">
          <button
            type="button"
            className="pagination__btn"
            title="Следующая"
            onClick={this.onButtonClick}
            disabled={this.props.paginate.next === undefined ? true : false}
            page={
              this.props.paginate.next === undefined
                ? ""
                : this.props.paginate.next._page
            }
          >
            &#10230;
          </button>
        </li>
        <li className="pagination__item pagination__item--last">
          <button
            type="button"
            className="pagination__btn"
            onClick={this.onButtonClick}
            disabled={
              this.props.paginate.last._page === this.props.currentPage
                ? true
                : false
            }
            page={this.props.paginate.last._page}
          >
            {this.props.paginate.last._page}
          </button>
        </li>
      </ul>
    );
  }
}

export default Paginate;
