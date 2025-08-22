import React from "react";
import gcashicon from "../../assets/images/QrCode/gcash-icon.png";
import qrcode001 from "../../assets/images/QrCode/qrcode01.jfif";
import qrcode002 from "../../assets/images/QrCode/qrcode02.jfif";
import bgImage from "../../assets/images/logo/AmiaBG.png"; 

function Card({ children, className }) {
  return <div className={`rounded-2xl shadow ${className}`}>{children}</div>;
}

function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}

export default function TopUpPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center p-6 overflow-hidden">
      {/* ✅ Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%", // 🔥 fills without crop
        }}
      ></div>

      {/* ✅ Content */}
      <div className="relative z-10 w-full max-w-5xl">
        <h1 className="text-4xl font-bold mt-16 text-yellow-400 text-center">
          HOW TO TOP UP?
        </h1>

        {/* Top-up value */}
        <div className="text-center mb-6">
          <h2 className="text-yellow-400 text-2xl font-bold">
            TOP-UP VALUE: 1 PESO = 1 PP
          </h2>
          <p className="text-sm text-gray-200">
            Special One-Time Purchase Offer:{" "}
            <span className="font-bold">500 PHP = 1,500 PP</span>
          </p>
        </div>

        {/* Payment Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="bg-black/70 border border-gray-700">
            <CardContent className="flex flex-row items-center justify-center p-6 gap-6">
              {/* Left: QR Code */}
              <img
                src={qrcode001}
                alt="GCash QR"
                className="w-32 h-32 border rounded-lg"
              />

              {/* Right: GCash Info */}
              <div className="flex flex-col items-center">
                <img src={gcashicon} alt="GCash" className="w-20 mb-4" />
                <p className="text-xl font-bold text-white">09457861862</p>
                <p className="text-sm text-gray-400">FA****N Y.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/70 border border-gray-700">
            <CardContent className="flex flex-row items-center justify-center p-6 gap-6">
              {/* Left: QR Code */}
              <img
                src={qrcode002}
                alt="GCash QR"
                className="w-32 h-32 border rounded-lg"
              />

              {/* Right: GCash Info */}
              <div className="flex flex-col items-center">
                <img src={gcashicon} alt="GCash" className="w-20 mb-4" />
                <p className="text-xl font-bold text-white">09463200364</p>
                <p className="text-sm text-gray-400">CH******N LL**D C.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <div className="text-center max-w-3xl mx-auto mb-10 text-white">
          <p>
            After donate, please submit the screenshot of the receipt to our
            <a
              href="https://www.facebook.com/RanOnlineAmiaEP7"
              className="text-blue-400 underline ml-1"
            >
              Facebook Messenger.
            </a>
          </p>
          <p className="text-green-400 mt-2">
            Please contact us if you want to top up using other method.
          </p>
        </div>

        {/* Guild Package */}
        <Card className="bg-black/70 border border-yellow-500 mb-6 max-w-3xl mx-auto">
          <CardContent className="p-6 text-white">
            <h2 className="text-yellow-400 font-bold text-xl mb-2">
              GUILD PACKAGE
            </h2>
            <p>Price: 500 PHP per member</p>
            <p>Minimum 10 members required</p>
            <p className="font-bold">Will receive 1,500 PP for each member</p>
            <p className="text-sm text-gray-400 mt-2">
              Note: Never give your username to anyone even in gpacks. Character
              name is enough.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
