import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    const { imgUrl, title, description } = this.props;
    return (
      <div className="card" style={{ width: "22rem" }}>
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Read News
          </a>
        </div>
      </div>
    );
  }
}
