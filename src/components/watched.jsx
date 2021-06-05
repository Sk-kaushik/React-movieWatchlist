import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/globalState";
import MovieCard from "./MovieCard";

export default function Watched() {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>
        </div>

        {watched.length ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type={"watched"} />
            ))}
          </div>
        ) : (
          <div className="no-movies">
            <h2>No Movie Watched</h2>
            <NavLink to="/add" className="add-btn">
              <i className="fas fa-plus"></i> Add
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
