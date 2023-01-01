import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import "../styles/globals.css";
import {
  fetchTrending,
  fetchTopRated,
  fetchNetflixOriginals,
  fetchFamily,
} from "../utils/fetchMovies";

const HomePage = async () => {
  const trendingMovies = await fetchTrending();
  const topRatedMovies = await fetchTopRated();
  const netflixOriginals = await fetchNetflixOriginals();
  const familyMovies = await fetchFamily();

  const randomMovieFromTrending =
    trendingMovies[Math.floor(Math.random() * trendingMovies.length)];

  return (
    <div className="space-y-10 pb-20">
      <Banner movie={randomMovieFromTrending} />
      <Row title="Tendances actuelles" movies={trendingMovies} />
      <Row title="Top Rated" movies={topRatedMovies} />
      <Row title="Seulement sur Netflix" movies={netflixOriginals} />
      <Row title="Films pour la famille" movies={familyMovies} />
    </div>
  );
};

export default HomePage;
