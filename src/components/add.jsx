import React, { useState } from "react";
import ResultCard from "./resultCard";

export default function Add() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState("");

  const onChange = (e) => {
    const api_key = process.env.REACT_APP_KEY;
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}`;

    e.preventDefault();
    setQuery(e.target.value);
    if (e.target.value.length > 0) {
      fetch(URL + `&query=${e.target.value}`)
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res.json();
        })
        .then((data) => {
          if (!data.error) {
            setResults(data.results);
          } else {
            setResults([]);
          }
        })
        .catch((err) => alert("Error in fetching data"));
    } else {
      return;
    }
  };
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => {
                return (
                  <li key={movie.id}>
                    <ResultCard movie={movie} />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
