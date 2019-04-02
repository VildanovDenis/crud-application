import React from "react";

import "./index.css";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: "",
      gameDescription: props.game.description || "",
      gameLink: ""
    };

    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onDescriptionInputChange = this.onDescriptionInputChange.bind(this);
    this.onLinkInputChange = this.onLinkInputChange.bind(this);
    this.onSaveGameClick = this.onSaveGameClick.bind(this);
  }

  onNameInputChange(event) {
    this.setState({
      gameName: event.target.value
    });
  }

  onDescriptionInputChange(event) {
    this.setState({
      gameDescription: event.target.value
    });
  }

  onLinkInputChange(event) {
    this.setState({
      gameLink: event.target.value
    });
  }

  onSaveGameClick() {
    const game = {
      id: this.props.game.id,
      title: this.state.gameName,
      description: this.state.description,
      link: this.state.link
    };

    this.props.onSaveButtonClick(game);
  }

  render() {
    const { title, link, description } = this.props.game;
    return (
      <div
        className="game-modal-wrapper"
        onClick={this.props.onCloseModalClick}
      >
        <div
          className="game-modal"
          onClick={event => {
            event.stopPropagation();
          }}
        >
          <input
            type="text"
            placeholder="Название игры"
            value={title}
            onChange={this.onNameInputChange}
          />
          <input
            type="text"
            placeholder="Ссылка на игру"
            value={link}
            onChange={this.onLinkInputChange}
          />
          <textarea
            placeholder="Описание игры"
            value={this.state.gameDescription}
            onChange={this.onDescriptionInputChange}
          />
          <button
            type="button"
            className="game-modal__save-button"
            onClick={this.onSaveGameClick}
          >
            Сохранить
          </button>
          <button
            type="button"
            className="game-modal__button"
            onClick={this.props.onCloseModalClick}
          />
        </div>
      </div>
    );
  }
}
export default Popup;

{
  /* <
          <img
            src={this.props.img}
            alt={this.props.title}
            className="game-modal__image"
          />
          <div className="game-modal__info">
            <h2 className="game-modal__title">{this.props.title}</h2>
            <p className="game-modal__description">{this.props.description}</p>
            <a href={this.props.link} target="_blank">
              Узнать больше
            </a>
          </div>
          
        */
}
