import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import pic from "../../../assets/images/logo/LOGO-PNG.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (path, sectionId) => {
    if (location.pathname !== path) {
      navigate(path);
    }
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-10 lg:px-20 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Link to="/" onClick={handleHomeClick} className="flex items-center space-x-2">
            <img src={pic} alt="Logo" className="h-12 w-12 rounded-full bg-gray-800" />
            <div className="text-center">
  <h1 className="text-xl font-semibold">
    <span className="text-black">RAN ONLINE</span>
  </h1>
  <h1 className="text-sm font-semibold flex items-center justify-center gap-2 mt-1">
    <span className="text-gray-600">←</span>
    <span className="text-red-800 tracking-widest">AMIA EP7</span>
    <span className="text-gray-600">→</span>
  </h1>
</div>


          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleHomeClick();
            }}
            className="text-gray-700 border-b-2 border-transparent 
              hover:border-red-700 hover:text-red-700"
          >
            Home
          </Link>
          <Link
            to="/news&events"
            className="text-gray-700 border-b-2 border-transparent 
              hover:border-red-700 hover:text-red-700"
          >
            News & Events
          </Link>
          <Link
            to="/server-info"
            className="text-gray-700 border-b-2 border-transparent 
              hover:border-red-700 hover:text-red-700"
          >
           Server Info
          </Link>
         
          <Link
            to="/rankings"
            className="text-gray-700 border-b-2 border-transparent 
             hover:border-red-700 hover:text-red-700"
          >
           Rankings
          </Link>

          <Link
            to="/top-up"
            className="text-gray-700 border-b-2 border-transparent 
              hover:border-red-700 hover:text-red-700"
          >
           Top-Up
          </Link>

          <Link
             to="/downloads"
            className="text-gray-700 border-b-2 border-transparent 
              hover:border-red-700 hover:text-red-700"
          >
           Downloads
          </Link>
    
          {/* ✅ Login/Register Button */}
          <Link
            to="/login"
            className="bg-gray-500 text-white px-4 py-2 rounded-lg font-medium 
              hover:bg-gray-600 transition duration-300"
          >
            Login / Register
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenu(!menu)}>
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleHomeClick();
                setMenu(false);
              }}
              className="text-gray-700 border-b-2 border-transparent 
             hover:border-red-700 hover:text-red-700"
            >
              Home
            </Link>
            <Link
              to="/news&events"
              className="text-gray-700 border-b-2 border-transparent 
              hover:border-red-700 hover:text-red-700"
              onClick={() => setMenu(false)}
            >
              News & Events
            </Link>
            <Link
              to="/server-info"
              className="text-gray-700 border-b-2 border-transparent 
              hover:border-red-700 hover:text-red-700"
              onClick={() => setMenu(false)}
            >
              Server Info
            </Link>

               <Link
              to="/rankings"
              className="text-gray-700 border-b-2 border-transparent 
              hover:border-red-700 hover:text-red-700"
              onClick={() => setMenu(false)}
            >
              Rankings
            </Link>

             <Link
              to="/top-up"
              className="text-gray-700 border-b-2 border-transparent 
              hover:border-red-700 hover:text-red-700"
              onClick={() => setMenu(false)}
            >
              Top-Up
            </Link>

            <Link
              to="/downloads"
              className="text-gray-700 border-b-2 border-transparent 
              hover:border-red-700 hover:text-red-700"
              onClick={() => setMenu(false)}
            >
              Downloads
            </Link>

            {/* ✅ Login/Register Button (Mobile) */}
            <Link
              to="/login"
              className="bg-gray-500 text-white px-4 py-2 rounded-lg font-medium 
              hover:bg-gray-600 transition duration-300"
              onClick={() => setMenu(false)}
            >
              Login / Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
