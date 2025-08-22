import React, { useState } from "react";
import { Cloud, HardDrive, FolderArchive, AlertTriangle } from "lucide-react";
import bgImage from "../../assets/images/logo/AmiaBG.png";

function DownloadLinks() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
     
     {/* ✅ Background */}
      <div
      className="absolute inset-0"
      style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%", // 🔥 fills full screen without crop or black
      }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-16 lg:py-20 space-y-6 w-full">
        <h1
        className="font-extrabold text-yellow-400 text-center mb-2 tracking-tight mt-12 sm:mt-8 md:mt-10 lg:mt-4"
        style={{
          fontSize: "clamp(1.25rem, 2vw + 1rem, 2.5rem)", 
        }}
        >
        DOWNLOAD LINKS
      </h1>


        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          {/* Client Installer */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
              Client Installer
            </h2>

            <a
              href="https://www.mediafire.com/file/pcu174o8pfw1jku/amia+ep7+client.exe/file"
              target="_blank"
              className="flex items-center gap-3 p-3 sm:p-4 bg-blue-50 hover:bg-blue-100 rounded-xl shadow-sm transition"
            >
              <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              <span className="text-gray-700 font-medium text-sm sm:text-base">
                MediaFire
              </span>
            </a>

            <a
              href="https://drive.google.com/file/d/1w0zAP3SN-Bh5T9lxLakkxKCwJVGJuias/view"
              target="_blank"
              className="flex items-center gap-3 p-3 sm:p-4 bg-green-50 hover:bg-green-100 rounded-xl shadow-sm transition"
            >
              <HardDrive className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              <span className="text-gray-700 font-medium text-sm sm:text-base">
                Google Drive
              </span>
            </a>

            <a
              href="https://mega.nz/file/bIUkUZbL#FKkQ7IUKCP-Ubunfc_30SlAy7TZcCYtjYiHZqwPEUkA"
              target="_blank"
              className="flex items-center gap-3 p-3 sm:p-4 bg-red-50 hover:bg-red-100 rounded-xl shadow-sm transition"
            >
              <FolderArchive className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
              <span className="text-gray-700 font-medium text-sm sm:text-base">
                Mega
              </span>
            </a>
          </div>

          {/* Manual Patch */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
              Manual Patch
            </h2>

            <button
              onClick={() => setShowPopup(true)}
              className="w-full flex items-center gap-3 p-3 sm:p-4 bg-blue-50 hover:bg-blue-100 rounded-xl shadow-sm transition"
            >
              <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              <span className="text-gray-700 font-medium text-sm sm:text-base">
                MediaFire
              </span>
            </button>

            <button
              onClick={() => setShowPopup(true)}
              className="w-full flex items-center gap-3 p-3 sm:p-4 bg-green-50 hover:bg-green-100 rounded-xl shadow-sm transition"
            >
              <HardDrive className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              <span className="text-gray-700 font-medium text-sm sm:text-base">
                Google Drive
              </span>
            </button>

            <button
              onClick={() => setShowPopup(true)}
              className="w-full flex items-center gap-3 p-3 sm:p-4 bg-red-50 hover:bg-red-100 rounded-xl shadow-sm transition"
            >
              <FolderArchive className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
              <span className="text-gray-700 font-medium text-sm sm:text-base">
                Mega
              </span>
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 p-4 sm:p-6 bg-yellow-50 border border-yellow-200 rounded-xl text-sm sm:text-base text-yellow-800 max-w-5xl w-full">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600" />
            <h2 className="font-semibold">Instructions</h2>
          </div>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            <li>Please download the Client Installer.</li>
            <li>Turn off any antivirus or Windows Defender.</li>
            <li>Install the Client Installer.</li>
            <li>
              After installation, extract the Manual Patch into the Client
              Installer folder.
            </li>
            <li>
              Open the Launcher, wait for the patch to complete, and click Start.
            </li>
          </ol>
          <p className="mt-4 font-semibold text-center text-sm sm:text-base">
            🎮 Happy gaming!
          </p>
        </div>

        {/* Popup Modal */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 px-4">
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center space-y-4">
              <h2 className="text-lg font-bold text-gray-800">
                🚧 Under Maintenance
              </h2>
              <p className="text-gray-600">
                The Manual Patch is currently under maintenance. Please check
                back later.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DownloadLinks;
