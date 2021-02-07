import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/screens/Home/Home";
import Results from "./components/screens/Results/Results";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/results/:query"} component={Results} />
      </Switch>
    </Router>
  );
};

export default App;
