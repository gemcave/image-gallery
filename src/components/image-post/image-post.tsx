import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  setCurrentImage,
  setLike,
  setDislike,
} from "../../store/images/reducer";
import { LikeButton } from "../like-button";
import "./image-post.scss";

interface Props {
  image: any;
}

export const ImagePost = ({ image }: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const liked = useAppSelector((state) => state.images.liked);
  const isLiked = liked?.includes(image.id) || false;

  const handleClick = () => {
    dispatch(setCurrentImage(image));
    navigate(`/images/${image.id}`);
  };

  const handleLikeButton = useCallback(() => {
    if (!isLiked) {
      dispatch(setLike(image.id));
    } else {
      dispatch(setDislike(image.id));
    }
  }, [liked]);

  return (
    <div className="image-post" onClick={handleClick}>
      <div className="image-post__image">
        <div className="image-post__image__like-btn">
          <LikeButton onClick={handleLikeButton} liked={isLiked} />
        </div>
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
      <p className="image-post__name">
        {image.user.name}
        <span className="image-post__location">
          {image.user.location && image.user.location}
        </span>
      </p>
      <p>{image.description ? image.alt_description : image.description}</p>
    </div>
  );
};
