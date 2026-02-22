import React, { Component } from "react";
import loading from "/img/loading-spinner.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="loading-spinner" style={{ width: "40px" }} />
      </div>
    );
  }
}
