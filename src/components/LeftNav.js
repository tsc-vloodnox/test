import React from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="left-nav-container">
      <div className="wrapper">
        <div className="first">
          <div className="items">
            <NavLink to="/" exact className="item">
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
              <span>Home</span>
            </NavLink>
          </div>

          <div className="items">
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
              <span>Services</span>
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
              <span>Biblioteque</span>
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
              <span>Pages</span>
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
              <span>About</span>
            </NavLink>
          </div>
        </div>

        <div className="sec">
          <div className="sec-card home">
            <div className="header">
              <h4>Home</h4>
              <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="MoreHorizOutlinedIcon"
              >
                <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg>
            </div>
            <div className="desc">
              <div className="header-search-container">
                <form className="header-search-box">
                  <button className="header-search-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-search"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="10" cy="10" r="7"></circle>
                      <line x1="21" y1="21" x2="15" y2="15"></line>
                    </svg>
                  </button>
                  <input
                    type="text"
                    placeholder="Rechercher des leaf..."
                    className="header-search-field"
                  />
                </form>
              </div>
              {/* <div className="desc-items">
                <h4>Mes publication :</h4>
                <ul className="style-1">
                  <li>
                    <div>
                      <img src="./img/KobeKenjo.jpg" alt="profil-pic" />
                    </div>
                    <div className="trend-content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias aspernatur optio dolorum. Sit nam et impedit.
                      </p>
                      <span>voir</span>
                    </div>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="sec-card services">
            <div className="header">
              <h4>Services</h4>
              <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="MoreHorizOutlinedIcon"
              >
                <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg>
            </div>
            <div className="desc">
              <div className="header-search-container">
                <form className="header-search-box">
                  <button className="header-search-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-search"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="10" cy="10" r="7"></circle>
                      <line x1="21" y1="21" x2="15" y2="15"></line>
                    </svg>
                  </button>
                  <input
                    type="text"
                    placeholder="Rechercher des services..."
                    className="header-search-field"
                  />
                </form>
              </div>
              <NavLink to="/services/assist-my-thesis-defense" exact>
                <button>AMTD</button>
              </NavLink>
              <NavLink to="/services/metree" exact>
                <button>MeTree</button>
              </NavLink>
              <NavLink to="/services/push-my-project" exact>
                <button>Push my project</button>
              </NavLink>
            </div>
          </div>
          <div className="sec-card pages">
            <div className="header">
              <h4>Pages</h4>
              <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="MoreHorizOutlinedIcon"
              >
                <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg>
            </div>

            <div className="desc">
              <div className="desc-items">
                <form className="header-search-box desc-item">
                  <button className="header-search-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-search"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="10" cy="10" r="7"></circle>
                      <line x1="21" y1="21" x2="15" y2="15"></line>
                    </svg>
                  </button>
                  <input
                    type="text"
                    placeholder="Rechercher des groupes..."
                    className="header-search-field"
                  />
                </form>
                <button className="desc-item">+ Creer une pages</button>
              </div>
              {/* <div className="desc-items">
                <h4 className="desc-item">Mes pages :</h4>
                <ul className="style-2">
                  <li className="user-hint">
                    <img src="./img/Audrey.jpg" alt="user-pic" />
                    <p>pseudo rhhfhhhffrgrr </p>
                  </li>
                  <li className="user-hint">
                    <img src="./img/Audrey.jpg" alt="user-pic" />
                    <p>pseudoje krjjrefe fjefhh</p>
                  </li>
                  <li className="user-hint">
                    <img src="./img/Audrey.jpg" alt="user-pic" />
                    <p>pseudo fhfjf fjjfjf djhfhfhhfss</p>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
