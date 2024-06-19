import React from "react";
import Header from "./Header";
import usenow from '../hooks/useNowPlayingMovies'
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  const use = usenow()

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
      main vide container

      vide background
      video title

      secondarycont
      -movie lis 8 n
      cards 8 n
       */}
    </div>
  );
};

export default Browse;
