import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";
import DismisAlert from "./Components/DismisAlert";

function App() {
  const [alert, setalert] = useState(null);
  
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
  };
  const [currentPage, setCurrentPage] = useState("home");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

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
    <>
      <Navbar
        title="My App"
        Home="Home"
        onNavClick={setCurrentPage}
        theme={theme}
      />
      <div style={appStyle}>
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

        <div className="container">
          {currentPage === "home" && (
            <TextForm theme={theme} themeStyles={themeStyles} showAlert={showAlert}/>
          )}
          {currentPage === "about" && (
            <About theme={theme} themeStyles={themeStyles} />
          )}
        </div>
        <DismisAlert alert={alert}> </DismisAlert>
      </div>
    </>
  );
}

export default App;
