import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import og from "../../images/og.png";
import "./Navigation.css";

export class Navigation extends Component {
  render() {
    return (
      <Navbar bg="light" expands="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <img src={og} height="40" width="150" alt="cndlogo" />
            <NavLink className="d-inline p-2 bg-light text-dark" to="/">
              Home
            </NavLink>

            <NavLink
              className="d-inline p-2 bg-light text-dark"
              to="/categories"
            >
              Categories
            </NavLink>

            <NavLink className="d-inline p-2 bg-light text-dark" to="/news">
              News
            </NavLink>

            <NavLink className="d-inline p-2 bg-light text-dark" to="/aboutUs">
              AboutUs
            </NavLink>

            <NavLink className="button" to="/signup">
              Sign Up
            </NavLink>

            <NavLink className="button1" to="/login">
              Login
            </NavLink>
          </Nav>

          <input type="text" class="form-control" placeholder="Search" />
          <button className="block" variant="outline-success">
            Search
          </button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
