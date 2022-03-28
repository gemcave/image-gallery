import React from "react";
import { useAppSelector } from "../../store/hooks";
import { FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { Link } from "react-router-dom";
import { Author, Image } from "../../store/images/reducer";
import "./image-page.scss";

export const ImagePage = () => {
  const image = useAppSelector((state) => state.images.currentImage);

  const {
    twitter_username,
    instagram_username,
    name: authorName,
    location,
  } = image?.user as Author;

  if (!image) return null;

  return (
    <div className="container-image">
      <div>
        <div>
          <Link to="/">
            <AiOutlineArrowLeft />
          </Link>
        </div>
        <div>
          <h2>
            {authorName} <span className="location">{location}</span>
          </h2>
        </div>
        <div className="social">
          {instagram_username && (
            <a href={`https://www.instagram.com/${instagram_username}`}>
              <FaInstagram />
            </a>
          )}
          {twitter_username && (
            <a href={`https://twitter.com/${twitter_username}`}>
              <FaTwitterSquare />
            </a>
          )}
        </div>
        <div className="container-image__image">
          <img
            style={{ maxWidth: 400, height: "auto" }}
            src={image.urls.regular}
            alt={image.alt_description}
          />
        </div>
      </div>
    </div>
  );
};
