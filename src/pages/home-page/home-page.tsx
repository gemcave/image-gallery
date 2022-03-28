import React, { useEffect } from "react";
import { ImagesGallery } from "../../components/images-gallery";
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

  if (loading) return <p>Loading...</p>;
  if (hasErrors) return <p>⚠️</p>;

  return <>{images && <ImagesGallery images={filtered} />}</>;
};
