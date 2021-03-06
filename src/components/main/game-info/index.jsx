import React from "react";

import "./index.css";

/**
 * Подробная информация об игре
 */
class GameInfo extends React.Component {
  render() {
    const { img, description, title, link } = this.props.game;
    const imgWrapperStyles =
      img === "" ? { fontSize: "14px", padding: "40px" } : { fontSize: "0px" };

    return (
      <div className="game-info">
        <div className="game-info__image-wrapper" style={imgWrapperStyles}>
          {img === "" ? (
            <span>Изображение данной игры не найдено =(</span>
          ) : (
            <img
              className="game-info__image"
              src={img}
              alt={title}
              title={title}
            />
          )}
        </div>
        <div className="game-info__block">
          <h3 className="game-info__title">{title}</h3>
          <p className="game-info__description">{description}</p>
          <a
            href={link}
            className="game-info__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Подробнее
          </a>
        </div>
        <button
          type="button"
          className="game-info__back-btn"
          title="Назад"
          onClick={this.props.onBackArrowClick}
        />
      </div>
    );
  }
}
export default GameInfo;
