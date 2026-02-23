import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import timeAgo from "../utils/timeAgo";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };

    document.title = "News Monkey - " + this.capitalize(this.props.category);
  }

  capitalize = (word) => {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  async updateNews() {
    const {
      country,
      category = "general",
      pageSize,
      setProgress,
      apiKey,
    } = this.props;
    setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${this.state.page}&pageSize=${pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    setProgress(30);

    let parsedData = await data.json();
    setProgress(70);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    const { country, category = "general", pageSize, apiKey } = this.props;
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${this.state.page}&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <div className="container mt-5 pb-3">
        <h1 className="mb-3 fs-3">
          NewsMonkey - Top {this.capitalize(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row g-4 mt-2">
              {this.state.articles.map((element, index) => {
                return (
                  <div
                    key={`${element.source?.id || element.source?.name || "src"}-${element.publishedAt || "date"}-${index}`}
                    className="col-md-4"
                  >
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
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
