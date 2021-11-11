import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Menu from "./auth/Menu";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
