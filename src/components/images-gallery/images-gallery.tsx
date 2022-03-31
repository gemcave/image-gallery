import React from "react";
import { ImagePost } from "../image-post";
import { Message } from "../message";
import "./images-gallery.scss";

type Props = {
  images: any;
};

export const ImagesGallery = ({ images }: Props) => {
  return images?.length > 0 ? (
    <div className="images-gallery">
      {images.map((image: any) => (
        <ImagePost key={image.id} image={image} />
      ))}
    </div>
  ) : (
    <Message>Нет изображений</Message>
  );
};
