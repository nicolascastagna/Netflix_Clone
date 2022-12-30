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
      <Row title="Current Trends" movies={trendingMovies} />
      <Row title="Top Rated" movies={topRatedMovies} />
      <Row title="Netflix Originals" movies={netflixOriginals} />
      <Row title="Family" movies={familyMovies} />
    </div>
  );
};

export default HomePage;
