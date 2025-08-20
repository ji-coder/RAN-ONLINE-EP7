import React, { useEffect } from 'react';

const StructuresAndFacilitiesPage = () => {

    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
    }, []); // Empty dependency array means this runs only on mount


    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center py-4">
            <div className="flex flex-col max-w-6xl p-6 bg-white shadow-lg rounded-lg mt-16">
                <div className="flex-1 p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center lg:text-left">
                        Structures and Facilities
                    </h2>
                    <p className="text-sm sm:text-md text-gray-600 mb-4 text-justify">
                        The buildings of the hospital are erected on an Eight Thousand Nine Hundred Nine (8,909) square meter lot located at Allarey Extension, Lucena City. These buildings are:
                    </p>

                    {/* Two-column layout for Hospital Buildings and Existing Bed Count */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Hospital Buildings */}
                        <div>
                            <h3 className="font-bold text-gray-800 mt-4">Hospital Buildings</h3>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>The Administration Building</li>
                                <li>The New Medical Arts Building</li>
                                <li>The Annex Building</li>
                                <li>The Bishop Alfredo Ma. Obviar Building</li>
                                <li>The Mother Catherine Angelique, OCD Building</li>
                            </ul>
                        </div>

                        {/* Existing Bed Count */}
                        <div>
                            <h3 className="font-bold text-gray-800 mt-4">Existing Bed Count</h3>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>Pediatrics: 40</li>
                                <li>Surgical: 35</li>
                                <li>Medical: 68</li>
                                <li>Ob-Gyne: 35</li>
                                <li>Total: 178</li>
                            </ul>
                        </div>
                    </div>

                    <p className="text-sm sm:text-md text-gray-600 mb-4 text-justify">
                        Mount Carmel Diocesan General Hospital offers therapeutic/curative and diagnostic services in the following specialties:
                    </p>

                    {/* Two-column layout for therapeutic/curative and diagnostic services */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-gray-800 mt-4">A. INTERNAL MEDICINE</h4>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>Cardiology</li>
                                <li>Dermatology</li>
                                <li>Endocrinology</li>
                                <li>Gastroenterology</li>
                                <li>Hematology</li>
                                <li>Infectious Disease</li>
                                <li>Nephrology</li>
                                <li>Neurology</li>
                                <li>Nuclear Medicine</li>
                                <li>Oncology</li>
                                <li>Physiatry</li>
                                <li>Pulmonology</li>
                                <li>Rheumatology</li>
                                <li>Diabetology</li>
                                <li>Psychiatry</li>
                            </ul>

                            <h4 className="font-bold text-gray-800 mt-4">B. PEDIATRICS</h4>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>General</li>
                                <li>Allergy</li>
                                <li>Cardiology</li>
                                <li>Hematology-Oncology</li>
                                <li>Neurology</li>
                                <li>Pulmonology</li>
                                <li>Neonatal Care</li>
                            </ul>

                            <h4 className="font-bold text-gray-800 mt-4">C. OBSTETRICS/GYNECOLOGY</h4>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>General</li>
                                <li>Oncology</li>
                                <li>Sonology</li>
                                <li>Trophoblastic Disease</li>
                            </ul>

                            <h4 className="font-bold text-gray-800 mt-4">D. SURGERY</h4>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>General</li>
                                <li>Neurosurgery</li>
                                <li>Orthopedic Surgery</li>
                                <li>Pediatric Surgery</li>
                                <li>Plastic (Reconstructive) Surgery</li>
                                <li>Thoraco & Cardiovascular Surgery</li>
                                <li>Thoracic & Spine Surgery</li>
                                <li>Urology</li>
                                <li>Ophthalmology</li>
                                <li>Otorhinolaryngology</li>
                                <li>Head and Neck Surgery</li>
                            </ul>

                            <h4 className="font-bold text-gray-800 mt-4">E. RADIOLOGY & ULTRASONOGRAPHY</h4>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>Routine Examinations (Chest & Neck, Head & Face, Abdomen & Pelvis, Extremities, Vertebrae)</li>
                                <li>Toshiba Nemio Color Doppler Ultrasound System for Ultrasound Procedures</li>
                                <li>Special Diagnostic Imaging Procedures</li>
                                <li>UTZ-Guided Procedures (Prostate Biopsy, Liver Biopsy, Thoracostomy/Thoracentesis, etc.)</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-800 mt-4">F. PATHOLOGY</h4>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>Clinical (Hematology, Microscopy, Chemistry, Microbiology, Serology)</li>
                                <li>Anatomic (Histopathology, Fine Needle Aspiration Biopsy, Cell Block of Pathological Body Fluids, Cytology Exams)</li>
                                <li>Blood Bank</li>
                                <li>Voluntary Blood Donation</li>
                            </ul>

                            <h4 className="font-bold text-gray-800 mt-4">G. ENDOSCOPIC PROCEDURES</h4>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>Upper G.I. Endoscopy</li>
                                <li>Colonoscopy</li>
                                <li>Proctosigmoidoscopy</li>
                                <li>Bronchoscopy</li>
                            </ul>

                            <h4 className="font-bold text-gray-800 mt-4">H. COMPUTED TOMOGRAPHY</h4>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>Siemens 64-Slice CT</li>
                            </ul>

                            <h4 className="font-bold text-gray-800 mt-4">I. PHYSICAL MEDICINE AND REHABILITATION</h4>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>Occupational Therapy</li>
                                <li>Physical Therapy</li>
                                <li>Pain Management</li>
                            </ul>

                            <h4 className="font-bold text-gray-800 mt-4">J. HEMODIALYSIS</h4>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>Well-equipped with seven (7) Fresenius Hemodialysis Machines and Reverse Osmosis.</li>
                            </ul>

                            <h4 className="font-bold text-gray-800 mt-4">K. HEART STATION</h4>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>2D Echo with Doppler Study</li>
                                <li>Electrocardiogram (ECG)</li>
                                <li>Treadmill Exercise Test</li>
                                <li>24-Hour ECG Holter Monitoring</li>
                                <li>Vascular Laboratory</li>
                            </ul>

                            <h4 className="font-bold text-gray-800 mt-4">L. PULMONARY LABORATORY</h4>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>Arterial Blood Gas</li>
                                <li>Pulmonary Function Test</li>
                                <li>Ventilatory Therapy</li>
                            </ul>

                            <h4 className="font-bold text-gray-800 mt-4">M. MEDICAL SERVICES</h4>
                            <ul className="list-disc pl-5 text-sm sm:text-md text-gray-600 mb-4">
                                <li>Inpatient</li>
                                <li>Outpatient</li>
                                <li>Emergency</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StructuresAndFacilitiesPage;
