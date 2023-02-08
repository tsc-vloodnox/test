import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import LeftNav from "../components/LeftNav";
import Dashboard from "../components/library/Dashboard";

const Library = () => {
  return (
    <>
      <div className="page-wrapper library">
        <LeftNav />
        <div className="content">
          <div className="header">
            <NavLink exact to="/library">
              Dashbord
            </NavLink>
            <NavLink exact to="/my-files">
              My files
            </NavLink>
          </div>
          <Dashboard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Library;
