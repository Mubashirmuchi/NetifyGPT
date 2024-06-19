import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  console.log(posterPath)
  return (
    <div className="w-48 pr-4">
      <img src={IMG_CDN_URL + posterPath} alt="coverphoto" />
    </div>
  );
};

export default MovieCard;
