import React, {useState} from "react";
import NavLink from "./NavLink";
import Fab from "@mui/material/Fab";

export default function Navbar(props) {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 ps-3 ps-lg-0 mb-lg-0">
            <NavLink name="Single Colour" route="/" />

            <NavLink name="Duo Tone" route="/duo-tone" />
          </ul>
        </div>
        <div className="theme-switch">
          <Fab aria-label="Theme switch button" onClick={props.handleTheme}>{props.icon}</Fab>
        </div>
      </div>
    </nav>
  );
}
