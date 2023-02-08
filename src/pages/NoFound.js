import React from "react";
import Footer from "../components/Footer";
import LeftNav from "../components/LeftNav";

const NoFound = () => {
  return (
    <>
      <div className="page-wrapper home">
        <LeftNav />
        <div className="content">
          <h1>Erreur 404</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NoFound;
