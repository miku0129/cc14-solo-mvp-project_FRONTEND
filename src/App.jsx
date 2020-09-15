import React from "react";
import "./App.css";
import List from "./List";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>App here!</p>
        <Nav />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <List />
    </div>
  );
}

export default App;
