import React, { createContext, useEffect, useReducer } from "react";

import { AppReducer } from "./AppReducer";

const initialState = {
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],

  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const removeMovieFromWatched = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id });
  };

  const moveMovieToWatchList = (movie) => {
    dispatch({ type: "MOVE_MOVIE_TO_WATCHLIST", payload: movie });
  };

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const value = {};

  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,
        addMovieToWatchList,
        removeMovieFromWatchList,
        addMovieToWatched,
        removeMovieFromWatched,
        moveMovieToWatchList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
