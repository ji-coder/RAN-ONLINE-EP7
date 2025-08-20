import React, { useEffect } from 'react';

const ManpowerPage = () => {

    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
    }, []); // Empty dependency array means this runs only on mount


    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center py-4">
            <div className="flex flex-col max-w-6xl p-6 bg-white shadow-lg rounded-lg mt-16">
                {/* Right side: Content */}
                <div className="flex-1 p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center lg:text-left">
                        Manpower
                    </h2>
                    <p className="text-sm sm:text-md text-gray-600 mb-4 text-justify">
                        Mount Carmel Diocesan General Hospital has a regular work force of six hundred forty nine (649) employees composed of the following:
                    </p>
                    <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                        <li>Resident Physician - 17</li>
                        <li>Nurses - 142</li>
                        <li>Others - 381</li>
                    </ul>
                    <p className="text-sm sm:text-md text-gray-600 mb-4 text-justify">
                        There is one (1) sister assisting in the management and operation of the hospital. There are seven (7) nurse supervisors manning the nursing service department.
                    </p>
                    <p className="text-sm sm:text-md text-gray-600 mb-4 text-justify">
                        The hospital laboratory is equipped with state-of-the-art facilities. The hospital has active committees on blood transfusion and blood banking. There is a regular schedule of voluntary blood donation programs.
                    </p>
                    <p className="text-sm sm:text-md text-gray-600 mb-4 text-justify">
                        The hospital pharmacy has four (4) registered pharmacists and eleven (11) pharmacy clerks. It is duly licensed by the corresponding government agencies and authorized to dispense medicine to inpatients and outpatients as well.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ManpowerPage;
