import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

export default function ResultCard({ movie }) {
  const { addMovieToWatchList, addMovieToWatched, watchList, watched } =
    useContext(GlobalContext);

  let movieInWatchList = watchList.find((o) => o.id === movie.id);
  let movieInWatched = watched.find((o) => o.id === movie.id);

  const isMovieExistInWatchList = movieInWatchList
    ? true
    : movieInWatched
    ? true
    : false;
  const isMovieExistInWatched = movieInWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          {movie.release_date ? (
            <h4 className="release-date">
              {movie.release_date.substring(0, 4)}
            </h4>
          ) : (
            <h4>Released</h4>
          )}
        </div>
        <div className="controls">
          <button
            className="btn"
            disabled={isMovieExistInWatchList}
            onClick={() => addMovieToWatchList(movie)}
          >
            Add to watchlist
          </button>
          <button
            className="btn"
            disabled={isMovieExistInWatched}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to watched
          </button>
        </div>
      </div>
    </div>
  );
}
