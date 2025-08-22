import React, { useState } from "react";
import { FaFacebookMessenger } from "react-icons/fa"; // Messenger Icon

const ChatyWidget = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleChatButtonClick = () => {
        // Open the Messenger chat link directly
        window.open("https://www.facebook.com/RanOnlineAmiaEP7", "_blank");

        // Close the hover tooltip when the button is clicked
        setIsHovered(false);
    };

    return (
        <div className="relative">
            {/* Chaty Button */}
            <div
                className="fixed bottom-6 right-6 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform"
                onClick={handleChatButtonClick} // Directly open Messenger on click and close the hover
                onMouseEnter={() => setIsHovered(true)} // Show tooltip on hover
                onMouseLeave={() => setIsHovered(false)} // Hide tooltip when mouse leaves
            >
                <FaFacebookMessenger className="w-5 h-5 text-white" />
            </div>

            {/* Modal with Hover Text and Left Arrow */}
            {isHovered && (
                <div className="fixed bottom-8 right-[90px] bg-blue-500 text-white text-sm px-4 py-2 rounded-lg shadow-lg w-max opacity-100 transition-opacity duration-200">
                    <span>Facebook Messenger</span>
                    {/* Arrow for the modal, positioned on the right side */}
                    <div className="absolute right-[-4px] top-1/2  rotate-45 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-blue-500 border-l-8 border-l-transparent"></div>
                </div>
            )}
        </div>
    );
};

export default ChatyWidget;
