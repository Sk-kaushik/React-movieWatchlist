import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/globalState";
import MovieCard from "./MovieCard";

export default function Watchlist() {
  const { watchList } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My WatchList</h1>
        </div>

        {watchList.length ? (
          <div className="movie-grid">
            {watchList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type={"watchList"} />
            ))}
          </div>
        ) : (
          <div className="no-movies">
            <h2>No Movie in your watchlist</h2>
            <Link to="/add" className="add-btn">
              <i className="fas fa-plus"></i> Add
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
