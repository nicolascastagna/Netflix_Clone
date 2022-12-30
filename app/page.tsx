import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import "../styles/globals.css";
import { fetchTrending } from "../utils/fetchMovies";

const HomePage = async () => {
  const trendingMovies = await fetchTrending();

  return (
    <div className="space-y-10 pb-20">
      <Banner />
      <Row title="Current trends" movies={trendingMovies} />
    </div>
  );
};

export default HomePage;
