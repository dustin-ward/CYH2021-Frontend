import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Contact, About } from "./components";
import UserProfile from "./components/UserProfile";
import User from "./containers/User.js";
import OwnUserProfile from "./containers/OwnUserProfile";
import Login from "./containers/Login";
import Errors from "./containers/Errors";

import { Link, Outlet } from "react-router-dom";


export default function Routes1() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route exact path="login/*"  element={<Login />} />
        <Route
          path="/user"
          element={
            <User>
              <UserProfile />
            </User>
          }
        />
        //<Route path=":id" element={<UserProfile />} />
        // <Route path="me" element={<OwnUserProfile />} />
      <Route path= "*" element={<Errors />} />
    </Routes>
  );
}

function UserRoutes() {
  return (
    <div>
        <Link to="me">My Profile</Link>
        <Outlet />
    </div>
  );
}
