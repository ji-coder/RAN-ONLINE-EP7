import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCalendar, FaUser } from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";
import { NewsEventsData } from "../../hooks/NewsEventsData";
import { Link } from "react-router-dom";
import bgImage from "../../assets/images/logo/AmiaBG.png"; // ✅ Add your background image

const NewsEventsPage = () => {
    const { page = 1 } = useParams(); 
    const navigate = useNavigate(); 

    const itemsPerPage = 6; 
    const currentPage = parseInt(page);

    const totalItems = NewsEventsData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    React.useEffect(() => {
        window.scrollTo(0, 0);
        if (currentPage > totalPages || currentPage < 1 || isNaN(currentPage)) {
            navigate(`/news&events/page/1`);
        }
    }, [currentPage, navigate, totalPages]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = NewsEventsData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        navigate(`/news&events/page/${pageNumber}`);
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            
            {/* ✅ Background */}
            <div
            className="absolute inset-0"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "100% 100%", // 🔥 fills full screen without crop or black
            }}
            ></div>

            {/* ✅ Foreground Content */}
            <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                <h1 className="text-yellow-400 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold mb-6 mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-center">
                    NEWS & EVENTS
                </h1>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-full max-w-[1100px] mb-6">
                    {currentItems.map((event, index) => (
                        <Link
                            to={`/news&events/${index + 1}`}
                            key={index}
                            className="relative group w-full p-4 sm:p-5 lg:p-6 
                             bg-white/30 backdrop-blur-sm  
                            shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] 
                            space-y-2 rounded-lg cursor-pointer 
                            hover:scale-105 
                            transition duration-300 ease-in-out"
                        >
                            <img
                                className="h-auto w-full object-cover rounded-lg"
                                src={event.backgroundImage}
                                alt="event"
                            />
                            <div className="flex justify-between items-center mt-2">
                                <span className="flex items-center text-white text-sm">
                                    <FaCalendar className="mr-1 text-sm" />
                                    <span className="text-white">{event.date}</span>
                                </span>
                                <span className="flex items-center text-white text-sm">
                                    <FaUser className="mr-1 text-sm" />
                                    <span className="text-white">Admin</span>
                                </span>
                            </div>
                            <h2 className="text-lg text-center text-yellow-400 font-semibold mt-2">{event.title}</h2>

                            <RxArrowTopRight className="absolute top-2 left-2 w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] text-white group-hover:text-blue-500 group-hover:rotate-45 transition-transform duration-300" />
                        </Link>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mb-6">
                    <button
                        onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                        className={`px-4 py-2 mx-2 border border-white text-white rounded-lg transition-all duration-300 ${currentPage === 1 ? "disabled:opacity-50 pointer-events-none" : "hover:bg-gray-600 hover:text-white"}`}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span className="px-4 py-2 mx-2 text-lg text-white">{`${currentPage} of ${totalPages}`}</span>
                    <button
                        onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                        className={`px-4 py-2 mx-2 border border-white text-white rounded-lg transition-all duration-300 ${currentPage === totalPages ? "disabled:opacity-50 pointer-events-none" : "hover:bg-gray-600 hover:text-white"}`}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsEventsPage;
