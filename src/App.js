import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import WatchList from "./components/watchlist";
import Watched from "./components/watched";
import Add from "./components/add";
import "./App.css";
import { GlobalProvider } from "./context/globalState";
import MovieInfo from "./components/MovieInfo";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={WatchList} />
          <Route path="/watched" component={Watched} />
          <Route path="/add" component={Add} />
          <Route path="/movieInfo/:id" component={MovieInfo} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
