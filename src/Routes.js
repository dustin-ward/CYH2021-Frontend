import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./containers/Login";


export default function Routes1() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="login/*"  element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="contact/*" element={<Contact />} />
    </Routes>
  );
}
