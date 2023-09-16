import React from "react";
import NavLink from "./components/NavLink";
import Fab from "@mui/material/Fab";
import Brightness4Icon from "@mui/icons-material/Brightness4";

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
            <NavLink name="Monochrome" route="/" />

            <NavLink name="Duo Tone" route="/duo-tone" />
          </ul>
        </div>
        <div className="theme-switch">
          <Fab aria-label="Theme switch button" onClick={props.handleTheme}><Brightness4Icon fontSize="large"/></Fab>
        </div>
      </div>
    </nav>
  );
}
