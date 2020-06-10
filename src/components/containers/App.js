import React from "react";
import DKPlayer from "./DKPlayer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DKPlayer} />
      <Route exact path="/:activeVideo" component={DKPlayer} />
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
