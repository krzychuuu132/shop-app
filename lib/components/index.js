import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StartSide from "./StartSide";
import Register from "./Register";
import Login from "./Login";
import BadPatch from "./BadPatch";
import MainSide from "./MainSide";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={StartSide} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/mainSide" component={MainSide} />
            <Route component={BadPatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
