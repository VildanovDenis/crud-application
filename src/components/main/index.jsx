import React from "react";

import TableHead from "./table-head/index";
import TableRow from "./table-row/index";
import "./index.css";
import Popup from "./popup";
import GameInfo from "./game-info";

class GamesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupShown: false,
      isGameInfoShown: false,
      activeGame: [],
      games: []
    };

    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.onCloseModalClick = this.onCloseModalClick.bind(this);
    this.onEditButtonClick = this.onEditButtonClick.bind(this);
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onGameNameClick = this.onGameNameClick.bind(this);
    this.onBackArrowClick = this.onBackArrowClick.bind(this);
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
      this.fetchGamesData(`${pageURL}?_page=1&_limit=5`);
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
      this.fetchGamesData(`${pageURL}?_page=1&_limit=5`);
    });
  }

  componentDidMount() {
    const URL = "http://localhost:3000/gamesList";
    this.fetchGamesData(`${URL}?_page=1&_limit=5`);
  }

  fetchGamesData(URL) {
    fetch(URL)
      .then(res => res.json())
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
