import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className=" bg-body-secondary mx-auto">
        <div className="container">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <Link
                className="navbar-brand d-flex align-items-center gap-2"
                to="/"
              >
                <img
                  src="/img/logo.png"
                  alt="NewsMonkey Logo"
                  style={{ width: "50px", objectFit: "cover" }}
                />
                NewsMonkey
              </Link>
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="business">
                      Business
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="entertainment">
                      Entertainment
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="health">
                      Health
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="science">
                      Science
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="sports">
                      Sports
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="technology">
                      Technology
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
