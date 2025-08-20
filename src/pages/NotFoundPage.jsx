import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');

    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-5xl font-bold text-red-600">404</h1>
                <p className="mt-4 text-xl font-semibold">Page Not Found</p>
                <p className="mt-2 text-gray-600">The page you are looking for might have been moved or deleted.</p>
                <button
                    onClick={handleGoHome}
                    className="mt-6 px-4 py-2 bg-blue-600 text-white font-normal rounded hover:bg-blue-700 transition duration-300"
                >
                    Go Back Home
                </button>
            </div>
        </div>
    );
};

export default NotFoundPage;
