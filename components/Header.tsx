"use client";
import LogoIcon from "@/public/orbitalx-high-resolution-logo-transparent.png";
import MenuIcon from "@/assets/icon-menu.svg";
import HomeButton from "./HomeButton";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";

const Header = () => {
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
    <header className="mt-4 sticky top-0 z-30 backdrop-blur-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center  md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div className="flex items-center">
            <div className=" h-10 w-10 rounded-lg flex justify-center items-center hover:transition-transform duration-200 hover:scale-150">
              <Image src={LogoIcon} alt="Logo" className="w-auto h-auto" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-16 text-sm">
              <a href="#Home" className="text-white/70 text-base font-bold font-serif transition-transform duration-200 hover:text-purple-500 hover:scale-125 ">Home</a>
              <a href="#Features" className="text-white/70 text-base font-bold font-serif transition-transform duration-200 hover:text-purple-500 hover:scale-125 ">Features</a>
              <a href="#Contact" className="text-white/70 text-base font-bold font-serif transition-transform duration-200 hover:text-purple-500 hover:scale-125 ">Contact</a>
            </nav>
          </div>
          {/* Button and Menu */}
          <div className="flex gap-4 items-center">
            <HomeButton onClick={handleTryNowClick} >TRY NOW</HomeButton>
            {/* Menu Icon */}
            <Image src={MenuIcon} alt="Menu Icon" className="w-6 h-6 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
