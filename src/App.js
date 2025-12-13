import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title="My App" Home="Home"></Navbar>
      <div className="container">
        <TextForm></TextForm>
      </div>
    </>
  );
}

export default App;
