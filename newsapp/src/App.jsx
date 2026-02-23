import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <>
        <Navbar />
        <LoadingBar color="#f11946" height={3} progress={this.state.progress} />
        <Outlet context={{ setProgress: this.setProgress }} />
      </>
    );
  }
}
