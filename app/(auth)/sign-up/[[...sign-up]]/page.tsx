"use client";
import { ClerkLoaded, SignUp } from '@clerk/nextjs';
import startsBg from "@/assets/stars.png";
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <motion.div
      style={{
        backgroundImage: `url(${startsBg.src})`,
      }}
      animate={{
        backgroundPositionX: startsBg.width,
      }}
      transition={{
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      }}
      className="min-h-screen flex items-center justify-center px-4 bg-transparent relative overflow-hidden"
    >
      {/* Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>

      {/* Planet Element */}
      <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>

      {/* Rotating Rings */}
      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "1turn" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-white rounded-full top-1/2 left-1/2 opacity-20"
      >
        <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 top-0 left-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>
      
      {/* Second Rotating Ring */}
      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "1turn" }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 border-dashed"
      ></motion.div>

      {/* Gradient Background Container for Sign-Up */}
      <div className="relative z-10 bg-[radial-gradient(circle_at_center,#4a208a,rgb(74,32,138,.5),#0E0024)] p-8 rounded-lg shadow-lg text-white text-center space-y-1 pt-6 pb-6 max-w-md w-full">
      <ClerkLoaded>
        <SignUp />
      </ClerkLoaded>
      </div>
    </motion.div>
  );
}
