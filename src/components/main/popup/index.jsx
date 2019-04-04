import React from "react";

import "./index.css";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: props.game.title || "",
      gameDescription: props.game.description || "",
      gameLink: props.game.link || "",
      gameImg: props.game.img || ""
    };

    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onDescriptionInputChange = this.onDescriptionInputChange.bind(this);
    this.onLinkInputChange = this.onLinkInputChange.bind(this);
    this.onSaveGameClick = this.onSaveGameClick.bind(this);
    this.onFileInputChange = this.onFileInputChange.bind(this);
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

  onFileInputChange(event) {
    this.setState({
      gameImg: event.target.value
    });
  }

  onSaveGameClick() {
    const game = {
      id: this.props.game.id,
      title: this.state.gameName,
      description: this.state.gameDescription,
      link: this.state.gameLink,
      img: this.state.gameImg
    };

    this.props.onSaveButtonClick(game);
  }

  render() {
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
            value={this.state.gameName}
            onChange={this.onNameInputChange}
          />
          <input
            type="text"
            placeholder="Ссылка на игру"
            value={this.state.gameLink}
            onChange={this.onLinkInputChange}
          />
          <textarea
            placeholder="Описание игры"
            value={this.state.gameDescription}
            onChange={this.onDescriptionInputChange}
          />
          <label class="game-modal__file-label">
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              className="game-modal__file"
              onChange={this.onFileInputChange}
            />
          </label>
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
