import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  c = "John";
  render() {
    return (
      <>
        <Navbar />
        <News pageSize={5} country="us" category="science" />
      </>
    );
  }
}
