import React from "react";
import fashion from "/public/fashion.jpg";
import software from "/public/software.jpg";
import movies from "/public/movies.jpg";
import busnies from "/public/busnies.jpg";
import health from "/public/health.jpg";
import human from "/public/human.jpg";
import science from "/public/science.jpeg";

const LeftSide = ({ setmenu }) => {
  return (
    <div className="p-4 bg-white sm:p-6 md:p-8 lg:p-10">
      {/* Category List */}
      <div
        onClick={() => setmenu("Mens Fashion")}
        className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-200 rounded-lg"
      >
        <img src={fashion} className="w-12 h-12 rounded-md object-cover" alt="Mens Fashion" />
        <h1 className="text-gray-700 text-sm md:text-base lg:text-lg">Mens Fashion</h1>
      </div>

      <div
        onClick={() => setmenu("SoftWare")}
        className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-200 rounded-lg"
      >
        <img src={software} className="w-12 h-12 rounded-md object-cover" alt="Software" />
        <h1 className="text-gray-700 text-sm md:text-base lg:text-lg">Software</h1>
      </div>

      <div
        onClick={() => setmenu("Movies")}
        className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-200 rounded-lg"
      >
        <img src={movies} className="w-12 h-12 rounded-md object-cover" alt="Movies" />
        <h1 className="text-gray-700 text-sm md:text-base lg:text-lg">Movies</h1>
      </div>

      <div
        onClick={() => setmenu("Busines")}
        className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-200 rounded-lg"
      >
        <img src={busnies} className="w-12 h-12 rounded-md object-cover" alt="Business" />
        <h1 className="text-gray-700 text-sm md:text-base lg:text-lg">Business</h1>
      </div>

      <div
        onClick={() => setmenu("Humans")}
        className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-200 rounded-lg"
      >
        <img src={human} className="w-12 h-12 rounded-md object-cover" alt="Humans" />
        <h1 className="text-gray-700 text-sm md:text-base lg:text-lg">Humans</h1>
      </div>

      <div
        onClick={() => setmenu("Health")}
        className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-200 rounded-lg"
      >
        <img src={health} className="w-12 h-12 rounded-md object-cover" alt="Health" />
        <h1 className="text-gray-700 text-sm md:text-base lg:text-lg">Health</h1>
      </div>

      <div
        onClick={() => setmenu("Fashion and Style")}
        className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-200 rounded-lg"
      >
        <img src={fashion} className="w-12 h-12 rounded-md object-cover" alt="Fashion and Style" />
        <h1 className="text-gray-700 text-sm md:text-base lg:text-lg">Fashion and Style</h1>
      </div>

      <div
        onClick={() => setmenu("Science")}
        className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-200 rounded-lg"
      >
        <img src={science} className="w-12 h-12 rounded-md object-cover" alt="Science" />
        <h1 className="text-gray-700 text-sm md:text-base lg:text-lg">Science</h1>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-300" />

      {/* Footer */}
      <h1 className="text-xs md:text-sm text-center text-gray-400 leading-6">
        About . Careers . <br />
        Terms . Privacy . <br />
        Acceptable Use . <br />
        Advertise . Press . <br />
        Your Ad Choices . <br />
        Grievance Officer
      </h1>
    </div>
  );
};

export default LeftSide;