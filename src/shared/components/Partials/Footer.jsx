import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import coverpic from "../../../assets/images/logo/LOGO-PNG.png";
import { FaRankingStar } from "react-icons/fa6";
import { LuCircleDollarSign } from "react-icons/lu";
import {
  FaFacebookSquare,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaInfoCircle,
  FaCalendarAlt,
  FaUserMd,
  FaArrowUp,
  FaHome,
  FaDownload,
} from "react-icons/fa";
import ChatyWidget from "../Layouts/ChatyWidget";
import CookieConsent from "./../../../cookieconsent/CookieConsent";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToSection = (sectionId) => {
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { replace: true });
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };


  return (
    <div className="relative">
      <div className="bg-gray-600 text-white  ">
       <div className="flex flex-col md:flex-row justify-between items-start p-8 md:px-32 px-5">
<div className="w-full md:w-1/3 flex flex-col items-center md:items-start justify-start mb-6 md:mb-0">
  <img
    src={coverpic}
    alt="Ran Online Logo"
    className="max-w-[250px]  h-auto object-contain"
  />
</div>


          <div className="text-black">
            <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0 text-yellow-400">Quick Links</h1>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="flex items-center hover:text-white transition-all cursor-pointer"
              >
                <FaHome className="mr-2" />
                Home
              </Link>
              <Link
                to="/news&events"
                className="flex items-center hover:text-white transition-all cursor-pointer"
              >
                <FaCalendarAlt className="mr-2" />
                News & Events
              </Link>
              <Link
                to="/server-info"
                className="flex items-center hover:text-white transition-all cursor-pointer"
              >
                <FaInfoCircle  className="mr-2" />
                Server Info
              </Link>

              <Link
                to="/rankings"
                className="flex items-center hover:text-white transition-all cursor-pointer"
              >
                <FaRankingStar className="mr-2" />
                Rankings
              </Link>

              <Link
                to="/top-up"
                className="flex items-center hover:text-white transition-all cursor-pointer"
              >
                <LuCircleDollarSign className="mr-2" />
                Top-Up
              </Link>

              <Link
                to="/downloads"
                className="flex items-center hover:text-white transition-all cursor-pointer"
              >
                <FaDownload className="mr-2" />
                Downloads
              </Link>
            </nav>
          </div>

          <div className="w-full md:w-1/4 text-black">
            <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0 text-yellow-400">Follow Us</h1>
            <nav className="flex flex-col gap-2">
              <a
                href="https://www.facebook.com/RanOnlineAmiaEP7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <FaFacebookSquare className="mr-2 text-blue-600 group-hover:text-white transition duration-300" />
                <span className="text-sm text-black group-hover:text-white transition duration-300">
                  Facebook Page
                </span>
              </a>

              <a
                href="https://www.facebook.com/groups/1237488830026810"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <FaFacebookSquare className="mr-2 text-blue-600 group-hover:text-white transition duration-300" />
                <span className="text-sm text-black group-hover:text-white transition duration-300">
                  Facebook Group
                </span>
              </a>

            </nav>
            
          </div>
        </div> 

        <div className="flex justify-center ">
          <div className="border-t border-gray-700 w-3/4 mb-5">
            <p className="text-center text-sm mt-5">
              ©2025 <span className="text-black">RAN ONLINE AMIA EP7</span>. All rights reserved.
            </p>
            <p className="text-center text-sm mt-1">
             <span className="text-yellow-400 ">Dev By ICODER</span>
            </p>
          </div>
        </div>
      </div>

      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-5 bg-gray-400 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
        >
          <FaArrowUp />

        </button>
      )}
      <ChatyWidget />
      {/* <CookieConsent /> */}

    </div>
  );
};

export default Footer;
