import React from "react";
import Header from "../../components/header";
import Garden from "../../components/garden";

const Home = () => (
  <div className="layout">
    <Header />
    <Garden />
    <div id="modal-container"></div>
  </div>
);

export default Home;
