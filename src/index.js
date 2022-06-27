import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </Router>
);
