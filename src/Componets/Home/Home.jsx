// import React, { useState } from "react";
// import LeftSide from "./LeftSide";
// import RightSide from "./RightSide";

// const Home = ({ search }) => {
//   const [menu, setmenu] = useState("");

//   return (
//     <div className="flex flex-col md:flex-row bg-zinc-100 min-h-screen">
//       {/* Left Side */}
//       <div className="w-full md:w-[20%] p-4 md:mt-14 border-b md:border-b-0 md:border-r border-gray-200">
//         <LeftSide setmenu={setmenu} />
//       </div>

//       {/* Right Side */}
//       <div className="w-full md:w-[45%] p-4 md:mt-14">
//         <RightSide search={search} menu={menu} />
//       </div>
//     </div>
//   );
// };

// export default Home;





import React, { useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Home = ({ search }) => {
  const [menu, setmenu] = useState("");

  return (
    <div className="flex flex-col md:flex-row bg-zinc-100 min-h-screen">
      {/* Left Sidebar */}
      <div className="hidden md:flex md:w-[20%] lg:w-[15%] p-4 border-r mt-5 border-gray-200">
        <LeftSide setmenu={setmenu} />
      </div>

      {/* Main Content */}
      <div className="w-full md:w-[60%] lg:w-[55%] p-4 md:mt-4">
        <RightSide search={search} menu={menu} />
      </div>

      {/* Right Sidebar for Widgets (optional) */}
      <div className="hidden md:block md:w-[20%] lg:w-[30%] p-4 border-l border-gray-200 mt-16">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Suggested Topics</h2>
          <ul className="space-y-2">
            <li className="text-sm text-gray-600 cursor-pointer hover:text-blue-500">
              Technology
            </li>
            <li className="text-sm text-gray-600 cursor-pointer hover:text-blue-500">
              Business
            </li>
            <li className="text-sm text-gray-600 cursor-pointer hover:text-blue-500">
              Science
            </li>
            <li className="text-sm text-gray-600 cursor-pointer hover:text-blue-500">
              Fashion
            </li>
          </ul>
        </div>
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Your Interests</h2>
          <ul className="space-y-2">
            <li className="text-sm text-gray-600 cursor-pointer hover:text-blue-500">
              Programming
            </li>
            <li className="text-sm text-gray-600 cursor-pointer hover:text-blue-500">
              Health
            </li>
            <li className="text-sm text-gray-600 cursor-pointer hover:text-blue-500">
              Travel
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
