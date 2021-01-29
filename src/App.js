import React from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Menu />
    </div>
  );
}

export default App;
