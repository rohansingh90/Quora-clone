import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { auth } from "../../Firebase/Firebase";
import { IoLogOutOutline, IoMenu, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import AddQuestion from "../Question/AddQuestion";

const Navbar = ({ setsearch }) => {
  const [addqus, setaddqus] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    auth?.currentUser === null && navigate("/");
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 shadow-lg w-full border-b border-gray-200 fixed bg-white z-50">
      {/* Logo */}
      <div className="flex items-center justify-between w-full lg:w-auto">
        <h1 className="text-3xl sm:text-4xl text-red-700 font-serif font-bold">
          Quora
        </h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl lg:hidden"
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Large Screen Menu */}
      <div
        className={`flex-col lg:flex-row lg:flex lg:items-center lg:gap-6 w-full lg:w-auto ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        {/* Menu Icons */}
        <div className="flex justify-center gap-6 mt-4 lg:mt-0">
          <IoMdHome size={28} className="cursor-pointer" />
          <FaAddressBook size={25} className="cursor-pointer" />
          <FiEdit size={25} className="cursor-pointer" />
          <IoIosPeople size={25} className="cursor-pointer" />
          <IoMdNotificationsOutline size={25} className="cursor-pointer" />
        </div>

        {/* Search Bar */}
        <div className="flex items-center border border-gray-200 h-10 w-full lg:w-96 rounded mt-4 lg:mt-0 mx-auto lg:mx-0">
          <CiSearch size={20} className="ml-3" />
          <input
            onChange={(e) => setsearch(e.target.value)}
            type="text"
            placeholder="Search on Quora"
            className="outline-none w-full px-2"
          />
        </div>

        {/* User and Buttons */}
        <div className="flex flex-col lg:flex-row items-center gap-4 mt-4 lg:mt-0">
          {auth?.currentUser ? (
            <Avatar
              name={auth?.currentUser?.email}
              size="35"
              round={true}
              src={auth?.currentUser?.photoURL}
            />
          ) : (
            <Avatar name="user" size="35" round={true} />
          )}
          <button
            onClick={() => setaddqus(true)}
            className="rounded-full bg-red-800 text-white px-4 py-1 text-sm font-semibold"
          >
            Add Question
          </button>
          <button
            onClick={logout}
            className="hover:bg-gray-200 rounded-full p-2"
          >
            <IoLogOutOutline size={25} />
          </button>
        </div>
      </div>

      {/* Add Question Modal */}
      {addqus && <AddQuestion setaddqus={setaddqus} />}
    </nav>
  );
};

export default Navbar;
