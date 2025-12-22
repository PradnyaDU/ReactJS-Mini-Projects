import React from "react";
import "../ComponentsCSS/NewsItem.css";

export default function NewsItem(props) {
  const {
    title,
    description,
    newsUrl,
    author,
    date,
    urlToImage,
    source
  } = props;

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
      <div className="card h-100 shadow-sm">
        <div className="card-body d-flex flex-column">
          {
            /* Image Placeholder */
            <div className="image-placeholder mb-3">
              {/* News Image */}
              <img
                src={
                  urlToImage
                    ? urlToImage
                    : "https://commons.wikimedia.org/wiki/File:No_Image_Available.jpg"
                }
                className="card-img-top"
                alt="News"
              />
            </div>
          }
          {/* Source Badge */}
          <span className="badge bg-danger mb-2 align-self-start">
            {source || "Unknown"}
          </span>

          {/* Title */}
          <h5 className="card-title">{title}</h5>

          {/* Description */}
          <p className="card-text">
            {description
              ? description.slice(0, 100) + "..."
              : "No description available."}
          </p>

          {/* Author & Date */}
          <p className="card-text text-muted mt-auto">
            <small>
              By {author || "Unknown"} <br />
              {new Date(date).toGMTString()}
            </small>
          </p>

          {/* Read More */}
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary mt-2"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
