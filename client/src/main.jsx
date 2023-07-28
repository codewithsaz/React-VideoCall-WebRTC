import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { SocketProvider } from "./context/SocketProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <SocketProvider>
        <App />
      </SocketProvider>
    </Router>
  </React.StrictMode>
);
