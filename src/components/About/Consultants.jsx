import React, { useEffect } from 'react';

const ConsultantsPage = () => {

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
                        Consultants
                    </h2>
                    <p className="text-sm sm:text-md text-gray-600 mb-4 text-justify">
                        MCDGH has three hundred eleven (311) active & visiting consultants with specialties in various fields:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold text-gray-800 mt-4">INTERNAL MEDICINE</h3>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>Asthma, Allergy & Immunology</li>
                                <li>Cardiology</li>
                                <li>Dermatology</li>
                                <li>Endocrinology</li>
                                <li>Family Medicine</li>
                                <li>Gastroenterology</li>
                                <li>Hematology</li>
                                <li>Infectious Disease</li>
                                <li>Neurology/Psychiatry</li>
                                <li>Nephrology</li>
                                <li>Neurology</li>
                                <li>Nuclear Medicine</li>
                                <li>Oncology</li>
                                <li>Psychiatry</li>
                                <li>Pulmonology</li>
                                <li>Rheumatology</li>
                                <li>Medical Nutrition</li>
                            </ul>

                            <h3 className="font-bold text-gray-800 mt-4">OBSTETRICS & GYNECOLOGY</h3>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>Oncology</li>
                                <li>Perinatology</li>
                                <li>Sonology</li>
                                <li>Trophoblastic Disease</li>
                                <li>Reproductive Endocrinology and Infertility</li>
                                <li>Gynecologic Endoscopy Surgery</li>
                            </ul>

                            <h3 className="font-bold text-gray-800 mt-4">OPHTHALMOLOGY</h3>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>Refractive Surgery</li>
                                <li>Retina</li>
                                <li>Pediatric Ophthalmology</li>
                            </ul>

                            <h3 className="font-bold text-gray-800 mt-4">PHYSICAL MEDICINE & REHABILITATION</h3>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>Physiatry</li>
                            </ul>

                            <h3 className="font-bold text-gray-800 mt-4">Anesthesiology</h3>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>Pediatric Anesthesia</li>
                            </ul>

                            <h3 className="font-bold text-gray-800 mt-4">Dental Medicine</h3>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>Endodontics</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-800 mt-4">PEDIATRICS</h3>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>Neurology</li>
                                <li>Hematology - Oncology</li>
                                <li>Pulmonology</li>
                                <li>Cardiology</li>
                                <li>Nephrology</li>
                                <li>Infectious Disease</li>
                                <li>Endocrinology</li>
                            </ul>

                            <h3 className="font-bold text-gray-800 mt-4">SURGERY</h3>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>Urology</li>
                                <li>Urologic Oncology</li>
                                <li>Organ Transplantation & Vascular Surgery</li>
                                <li>Laparoscopic Surgery</li>
                                <li>Neurosurgery</li>
                                <li>Thoracocardiovascular Surgery</li>
                                <li>Pediatric Surgery</li>
                                <li>Otorhinolaryngology (ENT) - Head and Neck Surgery</li>
                                <li>General Surgery</li>
                                <li>Orthopedic Surgery</li>
                            </ul>

                            <h3 className="font-bold text-gray-800 mt-4">Diagnostic Imaging</h3>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>Radiation Oncology</li>
                                <li>Vascular and Interventional</li>
                                <li>CT-MRI</li>
                            </ul>

                            <h3 className="font-bold text-gray-800 mt-4">Pathology</h3>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>Clinical Pathology</li>
                                <li>Anatomic Pathology</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsultantsPage;
