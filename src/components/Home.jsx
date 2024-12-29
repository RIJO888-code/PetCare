import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/home.png')" }} 
    >
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      ></motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6">
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to Happy Paws!
        </motion.h1>

        <motion.p
          className="text-lg mb-6 max-w-lg text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Your pet's best friend. Let us take care of your furry family member
          with love and care.
        </motion.p>

        <motion.a
          href="/Form"
          className="bg-yellow-500 text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          Get Started
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
