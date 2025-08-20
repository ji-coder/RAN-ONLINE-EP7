import React, { useEffect } from 'react';

const CoreValuesPage = () => {

    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
    }, []); // Empty dependency array means this runs only on mount


    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center py-4">
            <div className="flex flex-col lg:flex-row max-w-6xl p-6 bg-white shadow-lg rounded-lg mt-16">
                {/* Right side: Content */}
                <div className="flex-1 p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center lg:text-left">
                        Core Values
                    </h2>
                    <ul className="text-sm sm:text-md text-gray-600 mb-4 text-justify list-disc pl-5">
                        <li className="mb-2">
                            <strong className="text-green-500">Compassion</strong><br />
                            Inherent Respect for Human Dignity and Patients’ Rights<br />
                            “Every person is made in the image and likeness of God.” (Gen. 1:27)
                        </li>
                        <li className="mb-2">
                            <strong className="text-green-500">Charity</strong><br />
                            Subsidized services to the marginalized<br />
                            “Whatever you do to the least of my brethren, you do it to Me.” (Mt. 25:40)
                        </li>
                        <li className="mb-2">
                            <strong className="text-green-500">Integrity</strong><br />
                            Moral and Ethical Standards Adhering to Truth and Transparency<br />
                            “I am the Way, the Truth and the Life.” (Jn 14:6)
                        </li>
                        <li className="mb-2">
                            <strong className="text-green-500">Service Excellence</strong><br />
                            Provide best Medical and Support Services<br />
                            “I came to serve, not to be served.” (Mk 10:45)
                        </li>
                        <li className="mb-2">
                            <strong className="text-green-500">Teamwork</strong><br />
                            Working as one towards achievement of the aspirations and goals of every department and the entire hospital<br />
                            “Let each one of us; therefore, serve according to our different gifts.” (Rom 12:6)
                        </li>
                    </ul>

                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center lg:text-left">
                        Vision
                    </h2>
                    <p className="text-sm sm:text-md text-gray-600 mb-4 text-justify">
                        To be the best and the biggest quality healthcare provider in Southern Tagalog, healing with Christ to give holistic service to the community.
                    </p>
                    <p className="text-sm sm:text-md text-gray-600 mb-4 text-justify">
                        Excellence in Service, Leader in Healthcare. We serve humanity to glorify God.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center lg:text-left">
                        Mission
                    </h2>
                    <ul className="text-sm sm:text-md text-gray-600 text-justify list-disc pl-5">
                        <li className="mb-2">
                            <strong className="text-green-500">To the Patients:</strong> We render quality services, providing healing of the mind, the body, and the soul.
                        </li>
                        <li className="mb-2">
                            <strong className="text-green-500">To the Diocese:</strong> We take care of the clergy as leaders of the community and embody the Church preferential option for the poor.
                        </li>
                        <li className="mb-2">
                            <strong className="text-green-500">To our Employees:</strong> We create an environment for Christian formation and leadership by promoting their total well-being, professional growth, and development.
                        </li>
                        <li className="mb-2">
                            <strong className="text-green-500">To our Doctors:</strong> We provide state-of-the-art facilities and opportunities for continuing education to enable them to practice their profession with excellence and the highest ethical standards in accordance with Christian principles.
                        </li>
                        <li className="mb-2">
                            <strong className="text-green-500">To the Country:</strong> We contribute to the building of a healthy and productive citizenry and a progressive and peaceful nation.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CoreValuesPage;
