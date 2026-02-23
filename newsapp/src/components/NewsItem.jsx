function NewsItem(props) {
  return (
    <div className="card">
      <div className="position-relative">
        <img
          src={props.imageUrl}
          className="card-img-top"
          alt={props.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            position: "relative",
          }}
        />

        <span
          className="badge text-bg-primary position-absolute rounded-sm p-2 "
          style={{ right: "10px", bottom: "10px" }}
        >
          {props.sources}
        </span>
      </div>

      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">
          <small className="text-muted">
            By <strong>{props.author}</strong> on {props.date}
          </small>
        </p>
        <a href={props.newsUrl} target="_blank" className="btn btn-dark btn-sm">
          Read More &rarr;
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
