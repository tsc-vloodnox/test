import React from "react";
import Footer from "../components/Footer";
import LeftNav from "../components/LeftNav";

const Pages = () => {
  return (
    <>
      <div className="page-wrapper pages">
        <LeftNav />
        <div className="content">
          <div className="main">
          <div className="bottom">
            <p>Ajouter votre organisation a Structure</p>
            <img width="139" height="114" src="./img/page.jpg" alt="" />
            <button>Creer votre page</button>
          </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Pages;
