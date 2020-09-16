import React from "react";
import "./App.css";
import List from "./List";
import Nav from "./Nav";

function App() {
  return (
    <div className="App" style={{ flex: 1 }}>
      <p>Keep It Simple</p>
      <Nav style={{ flex: 1 }} />
      <List style={{ flex: 3 }} />
    </div>
  );
}

export default App;
