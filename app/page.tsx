import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import "../styles/globals.css";

const HomePage = () => {
  return (
    <div className="space-y-10 pb-20">
      <Banner />
      <Row />
    </div>
  );
};

export default HomePage;
