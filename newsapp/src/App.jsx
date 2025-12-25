import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

export default class App extends React.Component {
  state = {
    progress: 0,
  };

  setProgress =async (progress) => {
    this.setState({ progress });
  };
  render() {
    return (
      <>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                key="general"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                key="business"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                key="entertainment"
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                key="health"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                key="science"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                key="sports"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                key="technology"
                category="technology"
              />
            }
          />
        </Routes>
        <LoadingBar height={3} color="#f97316" progress={this.state.progress} />
        <div
          className="loading-dot"
          style={{ left: `${this.state.progress}%` }}
        ></div>
      </>
    );
  }
}