import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, Contact, About } from "./components";
import UserProfile from "./components/UserProfile";
import User from "./containers/User.js";
import Login from "./containers/Login";
import Logout from "./containers/Logout";
import Errors from "./containers/Errors";


export default function Routes1() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route exact path="login/*"  element={<Login />} />
      <Route
        path="user"
        element={
          <User>
            <UserProfile />
          </User>
        }
      />
      <Route path= "logout" element={<Logout />} />
      <Route path= "*" element={<Errors />} />
    </Routes>
  );
}

//<Route path=":id" element={<UserProfile />} />
// <Route path="me" element={<OwnUserProfile />} />
// function UserRoutes() {
//   return (
//     <div>
//         <Link to="me">My Profile</Link>
//         <Outlet />
//     </div>
//   );
// }
