import React, { useEffect } from "react";
import { ImagesGallery } from "../../components/images-gallery";
import { Message } from "../../components/message/message";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchImages, imagesSelector } from "../../store/images/reducer";

export const HomePage = () => {
  const { images, hasErrors, loading, filterImages, liked } =
    useAppSelector(imagesSelector);
  const dispatch = useAppDispatch();
  const filtered = filterImages
    ? images.filter((image: any) => liked.includes(image.id))
    : images;

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  if (loading || hasErrors)
    return <Message>{loading ? "Loading..." : "❌ Произошла ошибка!"}</Message>;

  return (
    <>
      {filtered.length > 0 ? (
        <ImagesGallery images={filtered} />
      ) : (
        <Message>Нет избранных изображений</Message>
      )}
    </>
  );
};
