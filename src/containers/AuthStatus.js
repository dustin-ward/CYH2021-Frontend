// import React from 'react';
// import axios from 'axios';
// import {useNavigate} from 'react-router-dom';
//
// // function()
//
// export default function AuthStatus() {
//   let token = localStorage.getItem('token');
//   let navigate = useNavigate();
//
//   if (token === null) {
//     return <p> You are not logged in!!! </p>
//   }
//   return (
//       <button
//         onClick={() => {
//           axios({
//             method: 'get',
//             url: 'http://localhost:8080/logout',
//             headers: {
//               "Authorization": `Bearer ${token}`,
//             }
//           })
//             .then(function (res) {
//           })
//           localStorage.removeItem('token');
//           navigate("/");
//         }}
//         >
//           Sign out!
//         </button>
//   );
// }
