import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // 👈 This should point to App.jsx

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
