import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/globalState";

export function MovieControls({ movie, type }) {
  const {
    removeMovieFromWatchList,
    removeMovieFromWatched,
    addMovieToWatched,
    moveMovieToWatchList,
  } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === "watchList" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa fa-eye" aria-hidden="true"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchList(movie.id)}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
          <Link to={`/movieInfo/${movie.id}`}>
            <button className="ctrl-btn">
              <i className="fas fa-info-circle"></i>
            </button>
          </Link>
        </>
      )}

      {type === "watched" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => moveMovieToWatchList(movie)}
          >
            <i className="fa fa-eye-slash" aria-hidden="true"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatched(movie.id)}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </>
      )}
    </div>
  );
}
