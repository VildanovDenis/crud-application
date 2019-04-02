import React from "react";

import "./index.css";

class Popup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="game-modal-wrapper"
        onClick={this.props.onCloseModalClick}
      >
        <div className="game-modal">
          <input
            type="text"
            placeholder="Название игры"
            value={this.props.name}
          />
          <input
            type="text"
            placeholder="Ссылка на игру"
            value={this.props.link}
          />
          <textarea
            placeholder="Описание игры"
            value={this.props.description}
          />
          <input type="file" className="game-modal__files" />
          <button type="button" className="game-modal__save-button">
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
