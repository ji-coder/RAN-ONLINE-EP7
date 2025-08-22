import { useState } from "react";
import bgImage from "../../assets/images/logo/AmiaBG.png";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
     <div className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden">
      {/* ✅ Fullscreen Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%", // 🔥 fills without crop
        }}
      ></div>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 bg-opacity-80 backdrop-blur-sm mt-20">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {isLogin ? "Login" : "Register"}
        </h2>

        {isLogin ? (
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Login
            </button>

            <p className="text-center text-sm text-gray-600">
              Don’t have an account? {" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="text-indigo-600 hover:underline"
              >
                Register
              </button>
            </p>
          </form>
        ) : (
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                placeholder="Choose a username"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Create password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Pin</label>
              <input
                type="number"
                placeholder="Enter 4-digit PIN"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Register
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account? {" "}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="text-purple-600 hover:underline"
              >
                Login
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
