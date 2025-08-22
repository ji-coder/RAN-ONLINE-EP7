import gcashicon from '../../assets/images/QrCode/gcash-icon.png';
import qrcode001 from '../../assets/images/QrCode/qrcode01.jfif';
import qrcode002 from '../../assets/images/QrCode/qrcode02.jfif';

function Card({ children, className }) {
  return <div className={`rounded-2xl shadow ${className}`}>{children}</div>
}

function CardContent({ children, className }) {
  return <div className={className}>{children}</div>
}

export default function TopUpPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mt-16">HOW TO TOP UP?</h1>

      {/* Top-up value */}
      <div className="text-center mb-6">
        <h2 className="text-yellow-400 text-2xl font-bold">
          TOP-UP VALUE: 1 PESO = 1 PP
        </h2>
        <p className="text-sm text-gray-300">
          Special One-Time Purchase Offer: <span className="font-bold">500 PHP = 1,500 PP</span>
        </p>
      </div>

      {/* Payment Options */}
      <div className="grid md:grid-cols-2 gap-6 mb-6 w-full max-w-4xl">
        <Card className="bg-gray-900 border border-gray-700">
            <CardContent className="flex flex-row items-center justify-center p-6 gap-6">
                {/* Left: QR Code */}
                <img
                 src={qrcode001}
                alt="GCash QR"
                className="w-32 h-32 border rounded-lg"
                />

                {/* Right: GCash Info */}
                <div className="flex flex-col items-center">
                <img
                     src={gcashicon}
                    alt="GCash"
                    className="w-24 mb-4"
                />
                <p className="text-xl font-bold">09457861862</p>
                <p className="text-sm text-gray-400">FA****N Y.</p>
                </div>
            </CardContent>
        </Card>
        <Card className="bg-gray-900 border border-gray-700">
            <CardContent className="flex flex-row items-center justify-center p-6 gap-6">
                {/* Left: QR Code */}
                <img
                src={qrcode002}
                alt="GCash QR"
                className="w-32 h-32 border rounded-lg"
                />

                {/* Right: GCash Info */}
                <div className="flex flex-col items-center">
                <img
                    src={gcashicon}
                    alt="GCash"
                    className="w-24 mb-4"
                />
               <p className="text-xl font-bold">09463200364</p> 
               <p className="text-sm text-gray-400">CH******N LL**D C.</p>
                </div>
            </CardContent>
        </Card>

      </div>

      {/* Instructions */}
      <div className="text-center max-w-3xl mb-10">
        <p>
          After donate, Pls submit the screenshot of the receipt to our
          <a href="https://www.facebook.com/RanOnlineAmiaEP7" className="text-blue-400 underline ml-1">Facebook Messenger.</a>
        </p>
        <p className="text-green-400 mt-2">
          Pls contact us if you want to top up using other method.
        </p>
      </div>

      {/* Guild Package */}
      <Card className="bg-gray-900 border border-yellow-500 mb-6 max-w-3xl">
        <CardContent className="p-6">
          <h2 className="text-yellow-400 font-bold text-xl mb-2">GUILD PACKAGE</h2>
          <p>Price: 500 PHP per member</p>
          <p>Minimum 10 members required</p>
          <p className="font-bold">Will receive 1,500 PP for each member</p>
          <p className="text-sm text-gray-400 mt-2">
            Note: Never give your username to anyone even in gpacks. Character name is enough.
          </p>
        </CardContent>
      </Card>

      
    </div>
  );
}
