// import React, { useState } from "react";
// import { UPDATE_PASSWORD } from "../Graphql/Mutation";
// import { useMutation } from "@apollo/client";

// function UpdatePassword() {
//   const [username, setUsername] = useState("");
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

//   if (error) {
//     return <h1> Error: {error.message} </h1>;
//   }
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Username..."
//         onChange={(event) => {
//           setUsername(event.target.value);
//         }}
//       />
//       <input
//         type="password"
//         placeholder="Current Password..."
//         onChange={(event) => {
//           setCurrentPassword(event.target.value);
//         }}
//       />
//       <input
//         type="password"
//         placeholder="New Password..."
//         onChange={(event) => {
//           setNewPassword(event.target.value);
//         }}
//       />

//       <button
//         onClick={() => {
//           updatePassword({
//             variables: {
//               username: username,
//               oldPassword: currentPassword,
//               newPassword: newPassword,
//             },
//           });
//         }}
//       >
//         UPDATE PASSWORD
//       </button>
//     </div>
//   );
// }

// export default UpdatePassword;

import React, { useState } from "react";
import { UPDATE_PASSWORD } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";

function UpdatePassword() {
  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

  return (
    <div>
      <div className="w-full p-8 bg-white rounded-lg border border-gray">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          Update Password 👋
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="password"
            placeholder="Current Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(event) => setCurrentPassword(event.target.value)}
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(event) => setNewPassword(event.target.value)}
          />

          <button
            onClick={() => {
              updatePassword({
                variables: {
                  username: username,
                  oldPassword: currentPassword,
                  newPassword: newPassword,
                },
              });
            }}
            className="w-auto py-2 px-4 bg-blue-600 cursor-pointer text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update Password
          </button>

          {error && (
            <div className="mt-4 text-red-600 text-center">
              <p>Error: {error.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UpdatePassword;
