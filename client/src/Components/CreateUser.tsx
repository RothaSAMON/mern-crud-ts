// import React, { useState } from "react";
// import { CREATE_USER } from "../Graphql/Mutation";
// import { useMutation } from "@apollo/client";
// function CreateUser() {
//   const [name, setName] = useState("");
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");

//   const [createUser, { error }] = useMutation(CREATE_USER);

//   return (
//     <div className="createUser">
//       <input
//         type="text"
//         placeholder="name"
//         onChange={(event) => {
//           setName(event.target.value);
//         }}
//       />
//       <input
//         type="text"
//         placeholder="username"
//         onChange={(event) => {
//           setUserName(event.target.value);
//         }}
//       />
//       <input
//         type="text"
//         placeholder="password"
//         onChange={(event) => {
//           setPassword(event.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           createUser({
//             variables: {
//               name: name,
//               username: userName,
//               password: password,
//             },
//           });
//         }}
//       >
//         Create User
//       </button>
//     </div>
//   );
// }

// export default CreateUser;

import React, { useState } from "react";
import { CREATE_USER } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";

function CreateUser() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER);

  return (
    <div className="createUser">
      <div className="w-full p-8 bg-white border border-gray rounded-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          Create User 👉👈
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(event) => setUserName(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(event) => setPassword(event.target.value)}
          />

          <button
            onClick={() => {
              createUser({
                variables: {
                  name: name,
                  username: userName,
                  password: password,
                },
              });
            }}
            className="w-auto py-2 px-4 bg-blue-600 cursor-pointer text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create User
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

export default CreateUser;
