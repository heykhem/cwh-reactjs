import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    const { imageUrl, newsUrl, title, description, author, date, sources } =
      this.props;
    return (
      <div className="card">
        <div className="position-relative">
          <img
            src={imageUrl}
            className="card-img-top"
            alt={title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              position: "relative",
            }}
          />

          <span
            class="badge text-bg-primary position-absolute rounded-sm p-2 "
            style={{ right: "10px", bottom: "10px" }}
          >
            {sources}
          </span>
        </div>

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By <strong>{author}</strong> on {date}{" "}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-dark btn-sm">
            Read More &rarr;
          </a>
        </div>
      </div>
    );
  }
}
