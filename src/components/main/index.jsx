import React from "react";

import TableHead from "./table-head/index";
import TableRow from "./table-row/index";
import "./index.css";
import Popup from "./popup";

class GamesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupShown: false,
      activeGame: [],
      games: []
    };

    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.onCloseModalClick = this.onCloseModalClick.bind(this);
    this.onEditButtonClick = this.onEditButtonClick.bind(this);
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onAddButtonClick() {
    this.setState({ isPopupShown: true });
  }

  onEditButtonClick(game) {
    this.setState({
      isPopupShown: true,
      activeGame: game
    });
    console.log(game);
  }

  onCloseModalClick() {
    this.setState({ isPopupShown: false, activeGame: [] });
  }

  onDeleteButtonClick(id) {
    const games = this.state.games;
    const newGames = games.filter(game => {
      if (game.id != id) return game;
    });
    this.setState({
      games: newGames
    });
  }

  onSaveButtonClick(game) {
    const id = game.id;
    const games = this.state.games;
    const editedGame = games.filter(game => {
      if ((game.id = id)) return game;
    });

    this.setState({
      games: games,
      activeGame: [],
      isPopupShown: false
    });
  }

  componentDidMount() {
    const URL = "http://localhost:3000/gamesList";
    this.fetchGamesData(`${URL}?_page=0&_limit=2`);
  }

  fetchGamesData(URL) {
    fetch(URL)
      .then(games => games.json())
      .then(gamesData => {
        this.setState({
          games: gamesData
        });
      });
  }

  render() {
    const games = this.state.games;
    return (
      <div className="games-table-wrapper">
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
                />
              );
            })}
          </tbody>
        </table>
        {this.state.isPopupShown ? (
          <Popup
            onSaveButtonClick={this.onSaveButtonClick}
            onCloseModalClick={this.onCloseModalClick}
            game={this.state.activeGame}
          />
        ) : null}
      </div>
    );
  }
}
export default GamesList;
