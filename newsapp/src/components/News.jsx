import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import timeAgo from "../utils/timeAgo";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async updateNews() {
    const { country, category = "general", pageSize } = this.props;

    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=f2d05d8265a841dc910bde9be97e206d&page=${this.state.page}&pageSize=${pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = () => {
    if (this.state.page <= 1) return;

    this.setState((prev) => ({ page: prev.page - 1 }), this.updateNews);
  };

  handleNextClick = () => {
    const totalPages = Math.ceil(this.state.totalResults / this.props.pageSize);
    if (this.state.page + 1 >= totalPages) return;

    this.setState((prev) => ({ page: prev.page + 1 }), this.updateNews);
  };

  render() {
    return (
      <div className="container mt-5 pb-3">
        <h1 className="mb-3 fs-3">NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row g-4 mt-2">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <NewsItem
                    newsUrl={element.url}
                    imageUrl={element.urlToImage || "/img/default.jpg"}
                    title={element.title}
                    description={
                      element.description
                        ? element.description
                        : "No description available"
                    }
                    author={element.author ? element.author : "Unknown"}
                    date={timeAgo(element.publishedAt)}
                    sources={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex gap-3 align-items-center justify-content-center mt-5">
          <button
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / `${this.props.pageSize}`)
            }
            onClick={this.handleNextClick}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
