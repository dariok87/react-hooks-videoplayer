import React from "react";
import DKPlayer from "./DKPlayer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DKPlayer} />
      <Route exact path="/:activeVideo" component={DKPlayer} />
    </Switch>
  </BrowserRouter>
);

export default App;
