import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import timeAgo from "../utils/timeAgo";
import { useState, useEffect } from "react";

function News(props) {
  const {
    country,
    category = "general",
    pageSize,
    setProgress,
    apiKey,
  } = props;

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalize = (word) => {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const updateNews = async () => {
    setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  useEffect(() => {
    document.title = `News Monkey - ${capitalize(category)}`;
  }, [category]);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div className="container mt-5 pb-3">
      <h1 className="mb-3 fs-3">
        NewsMonkey - Top {capitalize(category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row g-4 mt-2">
            {articles.map((element, index) => {
              return (
                <div
                  key={`${element.source?.id || element.source?.name || "src"}-${element.publishedAt || "date"}-${index}`}
                  className="col-md-4"
                >
                  <NewsItem
                    newsUrl={element.url || ""}
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

export default News;
