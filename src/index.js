import React from "react";
import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";

function App() {
  return <ReactGlobe height="100vh" width="100vw" />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
