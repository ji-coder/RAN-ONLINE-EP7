import React, { useEffect } from 'react';
import img1 from '../../assets/images/about/bpobviar.jpg';
import img2 from '../../assets/images/about/mocatherine.jpg';

const IntroductionPage = () => {
    const images = [img1, img2]; // Add more images to this array as needed

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
                        Introduction
                    </h2>
                    <p className="text-sm sm:text-md text-gray-600 mb-4 text-justify">
                        Mount Carmel Diocesan General Hospital was founded on July 27, 1959 by Bishop Alfredo Ma. Obviar under the name "Clinic Of Mount Carmel" together with Dr. Milagros Correa, a prominent physician in Lucena City. The site chosen for it was the Old Lucena Catholic Cemetery.
                    </p>
                    <p className="text-sm sm:text-md text-gray-600 mb-4 text-justify">
                        The hospital was put up to respond to the medical needs of the clergy, religious, and poor of the diocese. The free hospitalization of the members of the Lucena clergy is part of what Bishop Obviar envisioned for the hospital. He also intended it to serve the indigents.
                    </p>
                    <p className="text-sm sm:text-md text-gray-600 mb-4 text-justify">
                        Initial funding for the clinic reportedly came from the personal donations of both founders. The priests of the diocese gave their monthly financial contribution to support the needs of the clinic. It started operation on August 1st of the same year as a maternity and children's clinic with only sixteen (16) beds.
                    </p>
                    <p className="text-sm sm:text-md text-gray-600 mb-4 text-justify">
                        With the improvement of its facilities over the years, the clinic gradually evolved into a general hospital. It is at this point that the name 'Clinic Of Mount Carmel' was changed to Mount Carmel General Hospital and eventually to Mount Carmel Diocesan General Hospital on November 24, 1995.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default IntroductionPage;
