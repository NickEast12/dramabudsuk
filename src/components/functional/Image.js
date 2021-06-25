import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const ImgComp = ({ data }) => {
  const image = getImage(data.mainImage.asset);
  return (
    <div>
      <p>img</p>
      <GatsbyImage key={data.id} image={image} alt={data.mainImage.alt} />
    </div>
  );
}

export default ImgComp