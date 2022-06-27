import React from "react";
import HomePage from "./components/HomePage/HomePage";
import ShopPage from "./components/ShopPage/ShopPage";
import Cart from "./components/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shoppage" element={<ShopPage />} />
        <Route exact path="/cart" element={<Cart />} />

        <Route element={() => {}} />
      </Routes>
    </div>
  );
};

export default App;
