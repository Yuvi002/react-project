import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
}

//React 18 way of rendering the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Before React 18
//React.render(<App />);
