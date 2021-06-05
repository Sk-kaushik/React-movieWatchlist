import React, { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../context/globalState";
// import Watchlist from "./watchlist";

export default function MovieInfo({ match }) {
  const { watchList } = useContext(GlobalContext);
  const [movie, setCurrentMovie] = useState();

  useEffect(() => {
    if (watchList.length > 0) {
      setCurrentMovie(movieInfo());
    }
  }, []);

  const movieInfo = () => {
    if (watchList && watchList.length > 0) {
      return watchList.find((item) => item.id === parseInt(match.params.id));
    }
  };

  return (
    <div className="movie-info">
      {movie ? (
        <div className="movie-info-container">
          <div className="movie-info-img">
            <span>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} Poster`}
              />
              <div className="movie-info-rating">
                <i class="fas fa-star"></i>
                <p>{movie.vote_average}</p>
              </div>
            </span>
          </div>
          <div className="movie-info-title">
            <h3>"{movie.title}"</h3>
            <p>Language: "{movie.original_language}"</p>
            <p>Release Date: {movie.release_date}</p>
          </div>
          <div className="movie-info-overview">
            <p>
              <span>Overview:</span> {movie.overview}
            </p>
          </div>
        </div>
      ) : (
        <h1>Nothing to show</h1>
      )}
    </div>
  );
}
