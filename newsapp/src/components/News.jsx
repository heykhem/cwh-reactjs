import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <div className="container mt-5 pb-3">
        <h1 className="mb-3 fs-3">NewsMonkey - Top Headlines</h1>
        <div className="row mt-2">
          <div className="col-md-4">
            <NewsItem
              imgUrl="https://www.politico.com/dims4/default/resize/1200/quality/90/format/jpg?url=https%3A%2F%2Fstatic.politico.com%2F08%2F13%2Fa7a9d5234692b1d68ffafae96bb3%2Fgettyimages-2241266904.jpg"
              title="AMC Theatres Will Refuse to Screen AI Short Film After Online Uproar - The Hollywood Reporter"
              description="The veterans argued the project would encroach on the nearby Arlington National Cemetery."
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              imgUrl="https://www.politico.com/dims4/default/resize/1200/quality/90/format/jpg?url=https%3A%2F%2Fstatic.politico.com%2F08%2F13%2Fa7a9d5234692b1d68ffafae96bb3%2Fgettyimages-2241266904.jpg"
              title="AMC Theatres Will Refuse to Screen AI Short Film After Online Uproar - The Hollywood Reporter"
              description="The veterans argued the project would encroach on the nearby Arlington National Cemetery."
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              imgUrl="https://www.politico.com/dims4/default/resize/1200/quality/90/format/jpg?url=https%3A%2F%2Fstatic.politico.com%2F08%2F13%2Fa7a9d5234692b1d68ffafae96bb3%2Fgettyimages-2241266904.jpg"
              title="AMC Theatres Will Refuse to Screen AI Short Film After Online Uproar - The Hollywood Reporter"
              description="The veterans argued the project would encroach on the nearby Arlington National Cemetery."
            />
          </div>
        </div>
      </div>
    );
  }
}
