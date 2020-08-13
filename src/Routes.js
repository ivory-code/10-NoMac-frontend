import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hotelpage from "./Components/HoteldetailComponents/Hotelpage";
import Main from "./Pages/Main.js";
import Review from "./Pages/Review.js";
import Footer from "./Components/Footer";
import DetailListPage from "./Pages/DetailListPage";
import GoogleMap from "./Components/DetailComponents/GoogleMap";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/hotelpage" component={Hotelpage} />
        <Route exact path="/postreview" component={PostReview} />
        <Route exact path="/list" component={DetailListPage} />
        <Route exact path="/map" component={GoogleMap} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
