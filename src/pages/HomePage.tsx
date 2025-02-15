import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      navigate("/login");
    }
  });

  return (
    <div className="min-h-screen justify-center flex flex-col items-center">
      <motion.h1
        className="text-5xl font-bold mb-4 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Chat A Lot
      </motion.h1>
      <motion.p
        className="text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Connect, chat, and enjoy real-time conversations.
      </motion.p>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Button className="px-6 py-3 text-lg bg-white text-blue-600 rounded-2xl shadow-lg hover:bg-gray-200 transition">
          Get Started
        </Button>
      </motion.div>
    </div>
  );
};

export default HomePage;
