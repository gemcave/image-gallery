import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

interface Props {
  title?: string;
}

export const Header = (props: Props) => {
  return (
    <div className="header">
      <Link to="/image-gallery" className="header__logo">
        <div className="header__image">🖼️</div>
        <div className="header__title">{props.title}</div>
      </Link>
    </div>
  );
};
