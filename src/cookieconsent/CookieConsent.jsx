import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CookieConsent = () => {
    const [showConsent, setShowConsent] = useState(true);
    const [animate, setAnimate] = useState(false);
    const location = useLocation(); // Hook to get the current location

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setShowConsent(false);
    };

    // Check if the user has already accepted
    const consentStatus = localStorage.getItem('cookieConsent');

    useEffect(() => {
        if (showConsent) {
            setAnimate(true);
            const timer = setTimeout(() => setAnimate(false), 500); // Reset animation after 0.5s
            return () => clearTimeout(timer); // Clean up timeout on component unmount
        }
    }, [location, showConsent]); // Depend on location to detect route changes

    // Instead of returning null early, we just check the consent status at render time
    if (consentStatus === 'true' || consentStatus === 'false') {
        return null; // Do not render consent popup if already accepted or denied
    }

    return (
        showConsent && (
            <div className={`fixed bottom-0 left-0 right-0 bg-gray-200 text-black p-4 ${animate ? 'animate-pushTop' : ''
                } z-[9999]`}>
                <div className="flex justify-between items-center max-w-4xl mx-auto">
                    <span>
                        We use cookies to enhance your user experience. By using our website, you agree to our use of cookies.{" "}
                        <a href="/privacy-policy" className="text-blue-600 hover:underline">Learn more</a>.
                    </span>
                    <div>
                        <button
                            onClick={handleAccept}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default CookieConsent;
