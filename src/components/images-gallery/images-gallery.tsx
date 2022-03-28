import React from "react";
import { ImagePost } from "../image-post";
import "./images-gallery.scss";

type Props = {
  images: any;
};

export const ImagesGallery = ({ images }: Props) => {
  return (
    <div className="images-gallery">
      {images.map((image: any) => (
        <ImagePost key={image.id} image={image} />
      ))}
    </div>
  );
};
