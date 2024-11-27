// import React, { useState } from "react";

// const Note = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   const handleClose = () => {
//     setIsVisible(false);
//   };

//   return (
//     <>
//       {isVisible && (
//         <div
//           className="fixed top-5 left-1/2 transform -translate-x-1/2 max-w-md w-full bg-orange-400 text-white p-4 rounded-lg shadow-lg flex items-center justify-between space-x-4 transition duration-300 ease-in-out"
//         >
//           <div className="flex items-center space-x-2">
//             <span className="font-semibold text-lg">Note:</span>
//             <p className="text-sm">
//               This is just practicing fullstack deployment in AWS EC2 with CI/CD pipeline. So I didn’t focus on the
//               code much, and I haven't put state management correctly yet. You need
//               to "refresh" when you create or update something to see the result.
//             </p>
//           </div>
//           <button
//             onClick={handleClose}
//             className="text-white text-xl font-bold focus:outline-none hover:text-gray-300"
//           >
//             &times;
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default Note;

import React, { useState } from "react";

const Note = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-5 border left-1/2 transform -translate-x-1/2 max-w-2xl mx-auto w-full bg-white border-l-8 border-orange-500 text-orange-700 p-4 rounded-lg shadow-md flex items-start space-x-4">
          {/* Icon */}
          <div className="flex-shrink-0">
            <svg
              className="h-6 w-6 text-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              
            </svg>
          </div>

          {/* Content */}
          <div className="flex-grow">
            <h4 className="font-semibold text-lg">Note!</h4>
            <p className="text-sm">
              ⚠️ This is project just practicing fullstack deployment in AWS EC2 with CI/CD
              pipeline. So I didn’t focus on the code much, and I haven't put
              state management correctly yet. You need to "refresh" when you
              create or update something to see the result.
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="text-orange-500 hover:text-orange-700 focus:outline-none"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Note;
