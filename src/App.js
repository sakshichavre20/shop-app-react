import "./styles/app.scss";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";
import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
