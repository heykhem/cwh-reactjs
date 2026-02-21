import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    const { imageUrl, newsUrl, title, description } = this.props;
    return (
      <div className="card" style={{ width: "22rem" }}>
        <img
          src={imageUrl}
          className="card-img-top"
          alt={title}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} target="_blank" className="btn btn-dark btn-sm">
            Read More &rarr;
          </a>
        </div>
      </div>
    );
  }
}
