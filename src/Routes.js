import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./containers/Login";


export default function Routes1() {
  return (
    <Routes>
      <Route path="/">
        <Home />
      </Route>
      <Route exact path="login/*">
        <Login />
      </Route>
      // <Route path="about/*" component={About } />
      <Route path="contact/*" element={Contact} />
    </Routes>
  );
}

const routes = {
  "/": () => <Home />,
  "/about": () => <About />,
  "/contact": () => <Contact />
};
