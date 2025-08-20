import React from "react";
import { FaCalendar, FaUser } from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";
import { NewsEventsData } from '../../hooks/NewsEventsData';
import Button from '../../shared/components/Layouts/Button';
import { Link, useNavigate } from 'react-router-dom';

const News = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/news&events');
    };

    return (
         <div className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center mt-2 mb-2">
            <h1 className="text-yellow-400 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold mb-6 mt-6">
                NEWS & EVENTS
            </h1>


            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-full max-w-[1100px]">
                {/* Limit the displayed events to 3 using slice */}
                {NewsEventsData.slice(0, 6).map((event, index) => (
                    <div
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
                    </div>
                ))}
            </div>

            <div className="mt-4 mb-4 flex justify-center sm:justify-end">
                <Button title="VIEW ALL" onClick={handleButtonClick} />
            </div>
        </div>
    );
};

export default News;
