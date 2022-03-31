import React, { useEffect, useState } from "react";
import { ImagesGallery } from "../../components/images-gallery";
import { Message } from "../../components/message/message";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchImages, imagesSelector } from "../../store/images/reducer";

export const HomePage = () => {
  const { images, hasErrors, loading, filterImages, liked } =
    useAppSelector(imagesSelector);
  const [filteredImages, setFilteredImages] = useState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("images fetch");
    dispatch(fetchImages());
  }, [dispatch]);

  useEffect(() => {
    if (filterImages && images?.length > 0) {
      setFilteredImages(
        filterImages
          ? images.filter((image: any) => liked.includes(image.id))
          : images
      );
    }
  }, [filterImages, liked]);

  if (loading || hasErrors)
    return <Message>{loading ? "Loading..." : "❌ Произошла ошибка!"}</Message>;

  return (
    <>
      <ImagesGallery images={filterImages ? filteredImages : images} />
    </>
  );
};
