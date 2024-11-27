// // import React from "react";
// // import { GET_ALL_USERS } from "../Graphql/Queries";
// // import { DELETE_USER } from "../Graphql/Mutation";
// // import { useQuery, useMutation } from "@apollo/client";

// // function ListOfUsers() {
// //   const { data } = useQuery(GET_ALL_USERS);

// //   const [deleteUser, { error }] = useMutation(DELETE_USER);

// //   return (
// //     <div>
// //       {data &&
// //         data.getAllUsers.map((user: any) => {
// //           return (
// //             <div>
// //               {user.name} / {user.username}
// //               <button
// //                 onClick={() => {
// //                   deleteUser({ variables: { id: user.id } });
// //                 }}
// //               >
// //                 Delete User
// //               </button>
// //             </div>
// //           );
// //         })}
// //     </div>
// //   );
// // }

// // export default ListOfUsers;

// import React from "react";
// import { GET_ALL_USERS } from "../Graphql/Queries";
// import { DELETE_USER } from "../Graphql/Mutation";
// import { useQuery, useMutation } from "@apollo/client";

// function ListOfUsers() {
//   const { data, loading, error } = useQuery(GET_ALL_USERS);
//   const [deleteUser] = useMutation(DELETE_USER);

//   if (loading)
//     return <div className="text-center text-gray-500">Loading...</div>;
//   if (error)
//     return (
//       <div className="text-center text-red-600">Error: {error.message}</div>
//     );

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
//         User List 📌
//       </h2>
//       {data && data.getAllUsers.length > 0 ? (
//         <div className="space-y-4">
//           {data.getAllUsers.map((user: any) => (
//             <div
//               key={user.id}
//               className="flex justify-between items-center p-4 border border-gray-300 rounded-lg hover:shadow-lg transition duration-200 ease-in-out"
//             >
//               <div className="text-gray-700">
//                 <h3 className="font-semibold">Name: {user.name}</h3>
//                 <p className="text-sm text-gray-500">username: {user.username}</p>
//               </div>
//               <button
//                 onClick={() => deleteUser({ variables: { id: user.id } })}
//                 className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center text-gray-500">No users found.</div>
//       )}
//     </div>
//   );
// }

// export default ListOfUsers;

import React, { useState } from "react";
import { GET_ALL_USERS } from "../Graphql/Queries";
import { DELETE_USER } from "../Graphql/Mutation";
import { useQuery, useMutation } from "@apollo/client";

function ListOfUsers() {
  const { data, loading, error } = useQuery(GET_ALL_USERS);
  const [deleteUser] = useMutation(DELETE_USER);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

  if (loading)
    return <div className="text-center text-gray-500">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-600">Error: {error.message}</div>
    );

  // Get the users for the current page
  const currentUsers = data?.getAllUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  // Pagination logic
  const totalPages = Math.ceil(data?.getAllUsers.length / usersPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="border border-gray p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
        User List 📌
      </h2>

      {data && data.getAllUsers.length > 0 ? (
        <div>
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left text-gray-600">Name</th>
                <th className="px-4 py-2 text-left text-gray-600">Username</th>
                <th className="px-4 py-2 text-left text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user: any) => (
                <tr key={user.id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2 text-gray-700">{user.name}</td>
                  <td className="px-4 py-2 text-gray-500">{user.username}</td>
                  <td className="px-4 py-2 text-gray-700">
                    <button
                      onClick={() => deleteUser({ variables: { id: user.id } })}
                      className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:bg-gray-200"
            >
              Previous
            </button>
            <span className="text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:bg-gray-200"
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500">No users found.</div>
      )}
    </div>
  );
}

export default ListOfUsers;
