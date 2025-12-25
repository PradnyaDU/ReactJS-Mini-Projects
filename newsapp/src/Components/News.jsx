import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "../ComponentsCSS/NewsCSS.css";
import Spinner from "./Spinner";

export class News extends Component {
  articles = [];
  APIKey = process.env.REACT_APP_MY_NEWS_API_KEY;
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      page: 1,
      pageSize: 12,
      showSpinner: true,
      loading: true,
    };
  }

  updateNews = async (page = this.state.page) => {
    this.props.setProgress(0);
    let url =
      "https://newsapi.org/v2/top-headlines?category=" +
      this.props.category +
      "&country=us&apiKey=" +
      this.APIKey +
      "&page=" +
      page +
      "&pageSize=" +
      this.state.pageSize;
    const response = await fetch(url);
    this.props.setProgress(30);

    const data = await response.json();
    this.props.setProgress(60);

    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
      loading: false,
      showSpinner: false,
    });
    this.props.setProgress(100);
    document.title =
      "NewsHub - " +
      this.props.category.charAt(0).toUpperCase() +
      this.props.category.slice(1);
  };

  async componentDidMount() {
    this.updateNews();
  }

  handleOnPreviousClick = async () => {
    // Handle previous button click
    // console.log("this is previous");

    // let url =
    //   "https://newsapi.org/v2/top-headlines?category=" +
    //   this.props.category +
    //   "&country=us&apiKey=235100dc7f4c4500ba8cbeb83d5d984e&page=" +
    //   (this.state.page - 1) +
    //   "&pageSize=" +
    //   this.state.pageSize;
    // this.setState({ loading: true, showSpinner: true });

    // const response = await fetch(url);
    // const data = await response.json();

    const prevPage = this.state.page - 1;
    this.setState({ page: prevPage }, () => this.updateNews(prevPage));
  };

  handleOnNextClick = async () => {
    console.log("this is next");

    // let url =
    //   "https://newsapi.org/v2/top-headlines?category=" +
    //   this.props.category +
    //   "&country=us&apiKey=235100dc7f4c4500ba8cbeb83d5d984e&page=" +
    //   (this.state.page + 1) +
    //   "&pageSize=" +
    //   this.state.pageSize;
    // this.setState({ loading: true, showSpinner: true });
    // const response = await fetch(url);
    // const data = await response.json();

    const nextPage = this.state.page + 1;
    this.setState({ page: nextPage }, () => this.updateNews(nextPage));
  };

  render() {
    return (
      <>
        {this.state.loading}
        <div className="container my-4 news-container">
          <div className="text-center mb-4 news-list">
            <h2>
              Top Headline -{" "}
              {this.props.category.charAt(0).toUpperCase() +
                this.props.category.slice(1)}
            </h2>
          </div>

          {/* ROW */}
          <div className="row">
            {this.state.articles.length === 0 ? (
              <div className="text-center w-100">
                {this.state.showSpinner && <Spinner />}
              </div>
            ) : (
              this.state.articles.map((article) => (
                <NewsItem
                  key={article.url}
                  title={article.title}
                  description={article.description}
                  author={article.author}
                  date={article.publishedAt}
                  source={article.source?.name}
                  newsUrl={article.url}
                  urlToImage={article.urlToImage}
                />
              ))
            )}
          </div>

          {/* Pagination Buttons */}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <button
              disabled={this.state.page === 1}
              className="btn btn-outline-primary"
              onClick={this.handleOnPreviousClick}
            >
              &larr; Previous
            </button>

            <button
              disabled={this.state.articles.length === 0}
              className="btn btn-outline-primary"
              onClick={this.handleOnNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
