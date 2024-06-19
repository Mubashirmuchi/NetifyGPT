import React from "react";
import Header from "./Header";
import usenowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

usenowPlayingMovies()
usePopularMovies()

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
