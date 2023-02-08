import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const [navbar, setNavbar] = useState(false);
  const trsltHeader = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", trsltHeader);

  return (
    <nav className={navbar ? "trslt" : null}>
      <div className="nav-container">
        <div className="first">
          <div className="logo nav-item">
            <NavLink exact to="/">
              <div className="logo">
                <img src="./img/stree.png" alt="icon" />
                <h3>Leaft</h3>
              </div>
            </NavLink>
          </div>
          <div className="header-search-container">
            <form className="header-search-box">
              <button className="header-search-btn">
                <i className="fas fa-search"></i>
              </button>
              <input
                type="text"
                placeholder="Rechercher..."
                className="header-search-field"
              />
            </form>
          </div>

          {user ? (
            <NavLink exact to="/user">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="PersonOutlineIcon"
              >
                <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path>
              </svg>
            </NavLink>
          ) : (
            <NavLink exact to="/profile">
              <img src="./img/icons/login.svg" alt="login" />
            </NavLink>
          )}
        </div>
        <div className="sec">
          <NavLink to="/" exact>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              stroke="#2c3e50"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <g>
                <path
                  d="M39,0c-3,9.4-17,12.7-24.8,16.5C6.5,20.1,1.4,27.7,1.9,35.4C4.3,31.3,9,27.2,17,24.1
  c16-6.2,18.9-11.3,18.9-11.3s0.1,4.8-18.1,13.3C2.1,33.4,4.3,42.6,7.4,44c1.7-4.8,6.1-8,13.7-9.9C41.1,29.2,46.3,14.3,39,0z"
                />
              </g>
            </svg>
          </NavLink>
          <NavLink to="/services" exact className="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M13 3a1 1 0 0 1 1 1v4.535l3.928 -2.267a1 1 0 0 1 1.366 .366l1 1.732a1 1 0 0 1 -.366 1.366l-3.927 2.268l3.927 2.269a1 1 0 0 1 .366 1.366l-1 1.732a1 1 0 0 1 -1.366 .366l-3.928 -2.269v4.536a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-4.536l-3.928 2.268a1 1 0 0 1 -1.366 -.366l-1 -1.732a1 1 0 0 1 .366 -1.366l3.927 -2.268l-3.927 -2.268a1 1 0 0 1 -.366 -1.366l1 -1.732a1 1 0 0 1 1.366 -.366l3.928 2.267v-4.535a1 1 0 0 1 1 -1h2z" />
            </svg>
          </NavLink>
          <NavLink to="/library" exact className="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-books"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="5" y="4" width="4" height="16" rx="1"></rect>
              <rect x="9" y="4" width="4" height="16" rx="1"></rect>
              <path d="M5 8h4"></path>
              <path d="M9 16h4"></path>
              <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z"></path>
              <path d="M14 9l4 -1"></path>
              <path d="M16 16l3.923 -.98"></path>
            </svg>
          </NavLink>
          <NavLink to="/pages" exact className="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-flag"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="5" y1="5" x2="5" y2="21" />
              <line x1="19" y1="5" x2="19" y2="14" />
              <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
              <path d="M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
            </svg>
          </NavLink>
          <NavLink to="/about" exact className="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-info-square"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <polyline points="11 12 12 12 12 16 13 16" />
            </svg>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
