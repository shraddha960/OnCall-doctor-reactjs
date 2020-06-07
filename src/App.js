import React from "react";
import "./App.css";
import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import { Home } from "./components/home/Home";
import { Categories } from "./components/categories/Categories";
import { News } from "./components/news/News";
import { AboutUs } from "./components/aboutus/AboutUs";
import { Footer } from "./components/footer/Footer";
import { Login } from "./components/login/Login";
import { SignUp } from "./components/signup/SignUp";
import { Coupons } from "./components/Coupons";

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <BrowserRouter>
            <div className="container" />
            <Navigation />

            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/categories" component={Categories} />
              <Route path="/news" component={News} />
              <Route path="/aboutUs" component={AboutUs} />
              <Route path="/login" component={Login} />
              <Route path="/signUp" component={SignUp} />
              <Route path="/coupons" component={Coupons} />
            </Switch>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
