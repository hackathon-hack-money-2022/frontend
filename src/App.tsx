import React from "react";
import { Route, Switch } from "react-router-dom";
import { OwnAppBar } from "./components/AppBar";
import { useAppbar } from "./utils/useAppBar";
import { Constructions } from "./views/Construction";
import { Landing } from "./views/Landing";

export default function App(): JSX.Element {
  return (
    <React.Fragment>
      <Switch key={window.location.href}>
        <Route exact path="/" component={useAppbar(Landing)} />
        <Route
          exact
          path="/construction"
          component={useAppbar(Constructions)}
        />
      </Switch>
    </React.Fragment>
  );
}
