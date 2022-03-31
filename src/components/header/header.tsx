import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setFilter } from "../../store/images/reducer";
import { Filter } from "../filter";
import "./header.scss";

interface Props {
  title?: string;
}

export const Header = (props: Props) => {
  const { filterImages } = useAppSelector((state) => state.images);
  const dispatch = useAppDispatch();

  const handleLike = (liked: boolean) => {
    dispatch(setFilter(liked));
  };

  return (
    <div className="header">
      <Link to="/image-gallery" className="header__logo">
        <div className="header__image">🖼️</div>
        <div className="header__title">{props.title}</div>
      </Link>
      <Filter showLiked={filterImages} onChange={handleLike} />
    </div>
  );
};
