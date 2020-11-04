import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";
const ImageList = (props) => {
  //   console.log("list inside image list", props.images);
  const makeImagesFromSource = props.images.map((image) => {
    return <ImageCard key={image.id} image={image}></ImageCard>;
  });
  return <div className="image-list">{makeImagesFromSource}</div>;
};

export default ImageList;
