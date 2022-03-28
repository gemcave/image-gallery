import React, { ReactEventHandler } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

export const LikeButton = ({
  liked = false,
  onClick,
}: {
  liked: boolean;
  onClick: any;
}) => {
  const handleClick = (e: any) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <div onClick={handleClick}>
      {liked ? <FcLike size={40} /> : <FcLikePlaceholder size={40} />}
    </div>
  );
};
