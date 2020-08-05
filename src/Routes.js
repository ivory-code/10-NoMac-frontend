import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main.js";
import Footer from "./Components/Footer.js";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/main" component={Main} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
