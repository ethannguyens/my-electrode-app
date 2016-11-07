import React from "react";
import { Route, IndexRoute } from "react-router";
import { Home } from "./components/home";
import { YourAwesomeComponent } from "your-awesome-published-npm-module";

export const routes = (
  <Route path="/" component={Home}>
    <IndexRoute component={YourAwesomeComponent}/>
    <Route path="/invite" component={YourAwesomeComponent}/>
  </Route>
);
