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
      games: [
        {
          id: 1,
          title: "Fortnite",
          description:
            "Симулятор выживания от Epic Games с момента выхода в кратчайшие сроки сумел завоевать сердца миллионов геймеров. Причиной тому стал успешный запуск бесплатного режима «Королевская битва», куда ринулись те, кому жалко денег на PUBG. Впрочем, основной режим Fortnite – тот, где нужно строить укрепления и отбиваться от зомби – тоже пользуется успехом, так что игра останется популярной даже после того, как пройдет мода на «Королевскую битву».",
          link: "epicgames.com/fortnite/ru/buy-now/battle-royale"
        },
        {
          id: 2,
          title: "PLAYERUNKNOWN`S BATTLEGROUNDS",
          description:
            "PUBG стал одной из самых популярных онлайн игр в мире: более 20 млн проданных копий в Раннем доступе, запуск на Xbox One и PS4, онлайн, который превышает количество одновременных пользователей во всех остальных вместе взятых играх Steam. Чрезвычайно удачную концепцию Battle Royale не омрачают даже технические проблемы игры и обилие читеров. Неизвестно, как долго будет длиться триумф Playerunknown`s Battlegrounds, но именно сейчас этот проект заслуженно находится на вершине топа самых обсуждаемых, играемых и, соответственно, самых популярных игр.",
          link: "pubg.com/ru/"
        },
        {
          id: 3,
          title: "LEAGUE OF LEGENDS",
          description:
            "Детище Riot Games менее популярно у нас, чем DotA 2, но за рубежом ситуация обратная – там LoL завоевала огромную аудиторию. Множество персонажей, увлекательный геймплей, регулярные обновления, масштабные киберспортивные чемпионаты – вот составляющие успеха игры.",
          link: "play.ru.leagueoflegends.com/ru_RU"
        },
        {
          id: 4,
          title: "DOTA 2",
          description:
            "MOBA, которая является единственной игрой в библиотеке у многих пользователей Steam – зачем устанавливать что-то еще, если в DotA 2 можно провести десятки тысяч часов? Эту игру часто ругают за токсичное комьюнити, особенно в ру-сегменте, но не все так печально – найти адекватных игроков здесь проще простого.",
          link: "ru.dota2.com/"
        },
        {
          id: 5,
          title: "WORLD OF WARCRAFT",
          description:
            "Разбудите посреди ночи любого поклонника онлайн игр и попросите его назвать самую популярную ММОРПГ – он без раздумий назовет вам World of Warcraft. Эта MMORPG, несмотря на довольно внушительный возраст (многие, очень многие онлайн проекты о такой продолжительности жизни даже не мечтают), все еще находится в списке самых популярных игр и вряд ли в обозримом будущем покинет его – на подходе новое крупное дополнение и запуск «классических» серверов, так что приток аудитории WoW обеспечен.",
          link: "worldofwarcraft.com/ru-ru/"
        }
      ]
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
