import React from "react";

interface Props {
  showLiked: boolean;
  onChange: (liked: boolean) => void;
}

export const Filter = ({ showLiked = false, onChange }: Props) => {
  const handleChange = () => onChange(!showLiked);

  return (
    <div>
      <input
        type="checkbox"
        id="liked"
        name="liked"
        checked={showLiked}
        onChange={handleChange}
      />
      <label htmlFor="liked">Избранное</label>
    </div>
  );
};
