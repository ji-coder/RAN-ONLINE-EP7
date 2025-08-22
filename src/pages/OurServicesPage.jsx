import React from "react";
import bgImage from "../assets/images/logo/AmiaBG.png"; // ✅ adjust path to your image

function OurServicesPage() {
  return (
    <div className="relative min-h-screen flex justify-center items-start p-6 mt-20 overflow-hidden">
      {/* ✅ Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%", // 🔥 fills full screen without crop
        }}
      ></div>

      {/* ✅ Content (kept above background) */}
      <div className="relative z-10 max-w-3xl w-full bg-white/20 rounded-2xl shadow-lg p-8 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-yellow-400">Ran Online : Amia EP7</h1>
          <p className="text-lg text-white">SERVER INFORMATION</p>
        </div>

        {/* Server Info */}
        <div>
          <ul className="space-y-2 text-white">
            <li>Max Level - 230</li>
            <li>Last Skill - 207</li>
            <li>Gold - Low Rate</li>
            <li>Loot - Low Rate</li>
            <li>Exp - High Rate</li>
            <li>Pure Hunt Base</li>
            <li>6 Balanced Class</li>
            <li>Craft Base</li>
          </ul>
        </div>

        {/* Set & Weapon */}
        <div>
          <h2 className="text-xl font-semibold text-yellow-400 mb-3">Set & Weapon</h2>
          <ul className="space-y-2 text-white">
            <li>Starting Set - Dark Lunar</li>
            <li>Starting Weapon - Astral</li>
            <li>Last Set - Celestial</li>
            <li>Last Weapon - Black Dragon</li>
            <li>Max Upgrade - +10</li>
          </ul>
        </div>

        {/* Official PVP Features */}
        <div>
          <h2 className="text-xl font-semibold text-yellow-400 mb-3">Official PVP Features</h2>
          <ul className="space-y-2 text-white">
            <li>Tyranny Wars</li>
            <li>Clan Wars</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OurServicesPage;
