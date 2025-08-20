import { motion } from "framer-motion";

export default function Rankings() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6">
      
      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center w-32 h-32 rounded-full bg-yellow-500 shadow-lg mb-6"
      >
        <span className="text-6xl">⚙️</span>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-yellow-400 mb-3"
      >
        Rankings Page
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-gray-300 text-lg text-center max-w-md"
      >
        🚧 This feature is currently <span className="text-yellow-400 font-semibold">under maintenance</span>.  
        Please check back later.
      </motion.p>

      {/* Button */}
      <motion.a
        href="/"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl shadow-md hover:bg-yellow-400 transition"
      >
        Back to Home
      </motion.a>
    </div>
  );
}
