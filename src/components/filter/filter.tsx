import React from "react";

interface Props {
  showLiked: boolean;
  onClick: any;
}

export const Filter = ({ showLiked = false, onClick }: Props) => {
  const handleClick = () => onClick(!showLiked);

  return (
    <div>
      <input
        type="checkbox"
        id="liked"
        name="liked"
        checked={showLiked}
        onClick={handleClick}
      />
      <label htmlFor="liked">Избранное</label>
    </div>
  );
};
