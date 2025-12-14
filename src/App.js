import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import DismisAlert from "./Components/DismisAlert";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState("light");

  // Show alert
  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 2000);
  };

  // Toggle theme
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  // Styles
  const appStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#121212",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    paddingTop: "10px",
  };

  const themeStyles = {
    appStyle,
    textareaStyle: {
      color: theme === "light" ? "#000000" : "#ffffff",
      backgroundColor: theme === "light" ? "#ffffff" : "#2b2b2b",
    },
    accordionStyle: {
      backgroundColor: theme === "light" ? "#ffffff" : "#444444",
      borderColor: theme === "light" ? "#dee2e6" : "#555555",
    },
    accordionButtonStyle: {
      backgroundColor: theme === "light" ? "#f8f9fa" : "#444444",
      color: theme === "light" ? "#000000" : "#ffffff",
      borderColor: theme === "light" ? "#dee2e6" : "#555555",
    },
    accordionBodyStyle: {
      color: theme === "light" ? "#000000" : "#ffffff",
      backgroundColor: theme === "light" ? "#ffffff" : "#444444",
    },
  };

  return (
    <Router>
      <Navbar title="My App" theme={theme} />

      <div style={appStyle}>
        {/* Theme Switch */}
        <div className="container d-flex justify-content-end mb-3">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="themeSwitch"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
            <label className="form-check-label ms-2" htmlFor="themeSwitch">
              {theme === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}
            </label>
          </div>
        </div>

        {/* Alert */}
        <DismisAlert alert={alert} />

        {/* Pages */}
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={<TextForm themeStyles={themeStyles} showAlert={showAlert} />}
            />
            <Route
              path="/about"
              element={<About themeStyles={themeStyles} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
