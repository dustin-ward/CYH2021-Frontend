import React from "react";
import { Link } from "react-router-dom";

// function Users() {
//   return (
//     <div>
//       <h2>
//         {/* This links to /users - the current route */}
//         <Link to="User/*">User</Link>
//       </h2>
//
//       <ul>
//         {users.map(user => (
//           <li>
//             {/* This links to /users/:id - the child route */}
//             <Link to={user.id}>{user.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default function UserProfile() {
  // const location = useLocation();
  // const { pathname } = location;
  // const splitLocation = pathname.split("/");
  // <!-- Stack the columns on mobile by making one full-width and the other half-width -->


  return (
    <div className="UserProfile">
      <div class="container">
        <div class="row">
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
          <div class="col-12 col-md-8">.col-12 .col-md-8
          </div>
          <h2>
          {/* This links to /users - the parent route */}
            <Link to="..">All Users</Link>
          </h2>

          <h2>
          {/* This links to /users/:id - the current route */}
            <Link to=".">User Profile</Link>
          </h2>

          <h2>
          {/* This links to /users/mj - a "sibling" route */}
            <Link to="../mj">MJ</Link>
          </h2>
        </div></div>


    </div>
  );
}
