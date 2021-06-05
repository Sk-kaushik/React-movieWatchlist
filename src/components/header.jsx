import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <NavLink to="/">Movie Watchlist</NavLink>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to="/" exact>
                WatchList
              </NavLink>
            </li>
            <li>
              <NavLink to="/watched">Watched</NavLink>
            </li>{" "}
            <li>
              <NavLink to="/add" className="add-btn">
                <i className="fas fa-plus"></i> Add
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
