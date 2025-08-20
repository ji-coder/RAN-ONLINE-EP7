import React, { useEffect } from 'react';
import img1 from '../../assets/images/about/bpobviar.jpg';

const NaturAndTypePage = () => {
    const images = [img1]; // Add more images to this array as needed

    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
    }, []); // Empty dependency array means this runs only on mount


    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center py-4">
            <div className="flex flex-col lg:flex-row max-w-6xl p-6 bg-white shadow-lg rounded-lg mt-16">
                {/* Left side: Images */}
                <div className={`flex-1 grid grid-cols-${images.length > 1 ? '1 sm:grid-cols-2 gap-2' : '1'} mb-4 lg:mb-0`}>
                    {images.map((image, index) => (
                        <div key={index} className="w-full flex justify-center items-center">
                            <img
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="w-auto h-auto max-h-[400px] max-w-full rounded-lg shadow-md object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Right side: Content */}
                <div className="flex-1 p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center lg:text-left">
                        Nature And Type
                    </h2>
                    <p className="text-sm sm:text-md text-gray-600 mb-4 text-justify">
                        Mount Carmel Diocesan General Hospital (MCDGH) is a private Catholic Hospital owned by the Diocese of Lucena. It is accredited by the Department of Health and the Philippine Health Insurance Corporation as a tertiary level, second level referral, general hospital.
                    </p>
                    <p className="text-sm sm:text-md text-gray-600 mb-4 text-justify">
                        It admits patients with medical, surgical, obstetric and gynecologic conditions, as well as pediatric patients and those whose case pertains to specialty services.
                    </p>
                    <p className="text-sm sm:text-md text-gray-600 mb-4 text-justify">
                        It is an acute hospital catering to acutely, critically ill patients, not a nursing home or a sanitarium (for chronically ill).
                    </p>
                    <p className="text-sm sm:text-md text-gray-600 mb-4 text-justify">
                        It offers not only therapeutic/curative but also diagnostic services. It provides health teachings, which are health promotive, disease-preventive and rehabilitative.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NaturAndTypePage;
