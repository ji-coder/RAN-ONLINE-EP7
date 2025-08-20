import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCalendar, FaUser } from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";
import { NewsEventsData } from "../hooks/NewsEventsData";

const NewsEventsPage = () => {
    const { page = 1 } = useParams(); // Get the page number from URL, default to 1
    const navigate = useNavigate(); // For navigating between pages

    const itemsPerPage = 6; // Number of events per page
    const currentPage = parseInt(page);

    const totalItems = NewsEventsData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const [selectedEvent, setSelectedEvent] = useState(null); // State for the selected event (for the modal)

    useEffect(() => {
        // Scroll to the top when the page changes
        window.scrollTo(0, 0);

        // Redirect to the first page if the page number is invalid
        if (currentPage > totalPages || currentPage < 1 || isNaN(currentPage)) {
            navigate(`/news-events/page/1`);
        }
    }, [currentPage, navigate, totalPages]);

    useEffect(() => {
        if (selectedEvent) {
            document.body.style.overflow = "hidden"; // Prevent main page scroll when modal is open
        } else {
            document.body.style.overflow = ""; // Restore main page scroll when modal is closed
        }
        return () => {
            document.body.style.overflow = ""; // Clean up overflow style on unmount
        };
    }, [selectedEvent]);

    const paginate = (pageNumber) => {
        navigate(`/news&events/page/${pageNumber}`);
    };

    const closeModal = () => {
        setSelectedEvent(null); // Close the modal
    };

    const openModal = (event) => {
        setSelectedEvent(event); // Set the selected event
    };

    // Determine the items to display for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = NewsEventsData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="flex items-center justify-center flex-col h-auto max-w-full mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-8 md:mt-10 lg:mt-12 mb-5 sm:mb-10 lg:mb-12">
            <h1 className="text-gray-800 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold mb-6 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                NEWS & EVENTS
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-full max-w-[1100px] mb-6">
                {currentItems.map((event, index) => (
                    <div
                        key={index}
                        onClick={() => openModal(event)} // Open the modal with the selected event
                        className="relative group w-full p-4 sm:p-5 lg:p-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                    >
                        <img
                            className="h-auto w-full object-cover rounded-lg"
                            src={event.backgroundImage}
                            alt="event"
                        />
                        <div className="flex justify-between items-center mt-2">
                            <span className="flex items-center text-green-500 text-sm">
                                <FaCalendar className="mr-1 text-sm" />
                                <span className="text-gray-700">{event.date}</span>
                            </span>
                            <span className="flex items-center text-green-500 text-sm">
                                <FaUser className="mr-1 text-sm" />
                                <span className="text-gray-700">Admin</span>
                            </span>
                        </div>
                        <h2 className="text-lg text-center font-semibold mt-2">{event.title}</h2>

                        <RxArrowTopRight className="absolute top-2 left-2 w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] text-white group-hover:text-blue-500 group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center">
                <button
                    onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                    className={`px-4 py-2 mx-2 border border-green-600 text-green-600 rounded-lg transition-all duration-300 ${currentPage === 1 ? "disabled:opacity-50 pointer-events-none" : "hover:bg-green-600 hover:text-white"}`}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="px-4 py-2 mx-2 text-lg">{`${currentPage} of ${totalPages}`}</span>
                <button
                    onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                    className={`px-4 py-2 mx-2 border border-green-600 text-green-600 rounded-lg transition-all duration-300 ${currentPage === totalPages ? "disabled:opacity-50 pointer-events-none" : "hover:bg-green-600 hover:text-white"}`}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>

            {/* Modal for showing event details */}
            {selectedEvent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white w-full max-w-[90%] sm:max-w-[600px] h-full max-h-[90%] sm:max-h-[80%] p-6 rounded-lg shadow-lg relative overflow-auto">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
                        >
                            ×
                        </button>

                        {/* Event Title */}
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">{selectedEvent.title}</h2>

                        {/* Event Image */}
                        <img
                            src={selectedEvent.backgroundImage}
                            alt={selectedEvent.title}
                            className="w-full h-auto max-h-[250px] sm:max-h-[300px] object-cover rounded-lg mb-4"
                        />

                        {/* Event Content */}
                        <p className="text-gray-700 text-sm sm:text-base">{selectedEvent.content}</p>

                        {/* Event Details */}
                        <div className="flex justify-between items-center mt-4 text-sm sm:text-base text-gray-600">
                            <span className="flex items-center">
                                <FaCalendar className="mr-1" />
                                {selectedEvent.date}
                            </span>
                            <span className="flex items-center">
                                <FaUser className="mr-1" />
                                Admin
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsEventsPage;
