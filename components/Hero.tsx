"use client";
import { useAuth } from "@clerk/nextjs";
import HomeButton from "./HomeButton";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const HeroSection = () => {

  const { isSignedIn, userId } = useAuth();
  const router = useRouter();

  const handleTryNowClick = () => {
    if (!isSignedIn) {
      // Redirect to Clerk sign-in page with a callback URL
      router.push(`/sign-in?redirect_url=/organization/${userId}`);
    } else {
      // Navigate to the organization page if signed in
      router.push(`/organization/${userId}`);
    }
  };
  
  return (
    <section
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      id="Home"
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      {/*Start planet */}
      <div className="absolute h-64 w-64 md:h-96 md:w-96  bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      {/*End planet */}
      {/*Start ring 1*/}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[344px] w-[344px] md:h-[580px]  md:w-[580px] border border-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
      >
        <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 top-0 left-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 top-1/2 left-full border border-white rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
      {/*End ring 1*/}
      {/*Start ring 2*/}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
      ></motion.div>
      {/*End Ring 2*/}
      {/*Start ring 3*/}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 90,
          ease: "linear",
        }}
        className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px]  rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></motion.div>
      <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute h-2 w-2 top-1/2 left-full bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      {/*End ring 3*/}
      <div className="container relative mt-16">
        <h1 className="text-7xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          OrbitalX
        </h1>
        <p className="text-lg tracking-tight text-white/70 mt-5 text-center md:text-xl max-w-xl mx-auto">
          GPay for the Decentralized World <br className="m-1"/> Pay Smartly, Pay Decentralized!
        </p>
        <div className="flex justify-center mt-10">
        <HomeButton onClick={handleTryNowClick} >Start Now</HomeButton>
        </div>
      </div>
      <div className="absolute h-[375px] w-full rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(101%-96px)]"></div>
    </section>
  );
};

export default HeroSection;
