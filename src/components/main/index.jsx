import React from "react";

import TableHead from "./table-head/index";
import TableRow from "./table-row/index";
import Popup from "./popup";
import GameInfo from "./game-info";
import Paginate from "./paginate/index";

import "./index.css";

class GamesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupShown: false,
      isGameInfoShown: false,
      activeGame: [],
      games: [],
      paginate: undefined,
      currentPage: "1"
    };

    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.onCloseModalClick = this.onCloseModalClick.bind(this);
    this.onEditButtonClick = this.onEditButtonClick.bind(this);
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onGameNameClick = this.onGameNameClick.bind(this);
    this.onBackArrowClick = this.onBackArrowClick.bind(this);
    this.onPaginationButtonClick = this.onPaginationButtonClick.bind(this);
  }

  /**
   * Хендлеры для отображения подробностей об игре
   */

  onGameNameClick(game) {
    this.setState({
      isGameInfoShown: true,
      activeGame: game
    });
  }

  onBackArrowClick() {
    this.setState({
      isGameInfoShown: false,
      activeGame: []
    });
  }

  /**
   * Хендлеры для модального окна
   */

  onAddButtonClick() {
    this.setState({ isPopupShown: true });
  }

  onEditButtonClick(game) {
    this.setState({
      isPopupShown: true,
      activeGame: game
    });
  }

  onCloseModalClick() {
    this.setState({ isPopupShown: false, activeGame: [] });
  }

  onSaveButtonClick(game) {
    const { id } = game;
    const fetchMethod = id === undefined ? "POST" : "PUT";
    const URL =
      id === undefined
        ? "http://localhost:3000/gamesList"
        : `http://localhost:3000/gamesList/${id}`;
    const pageURL = "http://localhost:3000/gamesList";

    fetch(URL, {
      method: fetchMethod,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(game)
    }).then(() => {
      this.fetchGamesData(
        `${pageURL}?_page=${this.state.currentPage}&_limit=5`
      );
    });

    this.setState({
      activeGame: [],
      isPopupShown: false
    });
  }

  /**
   * Хендлер для кнопки удаления
   */

  onDeleteButtonClick(id) {
    const URL = `http://localhost:3000/gamesList/${id}`;
    const pageURL = "http://localhost:3000/gamesList";

    fetch(URL, { method: "DELETE" }).then(() => {
      this.fetchGamesData(
        `${pageURL}?_page=${this.state.currentPage}&_limit=5`
      );
    });
  }

  /**
   * Хендлер для пагинации
   */

  onPaginationButtonClick(page) {
    const URL = "http://localhost:3000/gamesList";
    this.setState(
      {
        currentPage: page
      },
      this.fetchGamesData(`${URL}?_page=${page}&_limit=5`)
    );
  }

  /**
   * Жизненный цикл компонента
   */

  componentDidMount() {
    const URL = "http://localhost:3000/gamesList";
    this.fetchGamesData(`${URL}?_page=${this.state.currentPage}&_limit=5`);
  }

  /**
   * Вспомогательные функции
   */

  fetchGamesData(URL) {
    fetch(URL)
      .then(res => {
        var parse = require("parse-link-header");
        var parsedPaginate = parse(res.headers.get("Link"));
        this.setState({
          paginate: parsedPaginate
        });
        return res.json();
      })
      .then(gamesData => {
        this.setState({
          games: gamesData
        });
      });
  }

  render() {
    const { games } = this.state;
    return (
      <div className="games-table-wrapper">
        {!this.state.isGameInfoShown ? (
          <React.Fragment>
            <h2 className="games-table-title">Список популярных игр</h2>
            <table className="games-table">
              <tbody>
                <TableHead onAddButtonClick={this.onAddButtonClick} />
                {games.map(game => {
                  return (
                    <TableRow
                      key={game.id}
                      game={game}
                      onEditButtonClick={this.onEditButtonClick}
                      onDeleteButtonClick={this.onDeleteButtonClick}
                      onGameNameClick={this.onGameNameClick}
                    />
                  );
                })}
              </tbody>
            </table>
            <Paginate
              paginate={this.state.paginate}
              currentPage={this.state.currentPage}
              onPaginationButtonClick={this.onPaginationButtonClick}
            />
          </React.Fragment>
        ) : null}

        {this.state.isPopupShown ? (
          <Popup
            onSaveButtonClick={this.onSaveButtonClick}
            onCloseModalClick={this.onCloseModalClick}
            game={this.state.activeGame}
          />
        ) : null}

        {this.state.isGameInfoShown ? (
          <GameInfo
            game={this.state.activeGame}
            onBackArrowClick={this.onBackArrowClick}
          />
        ) : null}
      </div>
    );
  }
}
export default GamesList;
