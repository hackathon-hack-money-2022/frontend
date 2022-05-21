import { Route, Switch, withRouter } from "react-router-dom";
import { useAppBar } from "./utils/useAppBar";
import { Constructions } from "./views/Construction";
import { Landing } from "./views/Landing";

export default function App(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={withRouter(useAppBar(Landing))} />
      <Route
        path="/construction"
        component={withRouter(useAppBar(Constructions))}
      />
    </Switch>
  );
}
