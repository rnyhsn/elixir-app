"use client";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { useEffect, useState } from "react";


const TopSection = () => {
    const [showNavbar, setShowNavbar] = useState(true); // Controls the visibility of the navbar
  const [lastScrollY, setLastScrollY] = useState(0);  // Tracks the last Y scroll position

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down, hide the navbar
      setShowNavbar(false);
    } else {
      // Scrolling up, show the navbar
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); 

  return (
    <div className={`bg-primary text-white px-4 md:px-10 lg:px-20 xl:px-28 py-4 justify-between text-[13px] font-semibold ${showNavbar ? "flex": "hidden"}`}>
        <div className="flex gap-8">
            <div className="flex gap-2 items-center">
                <IoLocationSharp className="text-secondary" /> <span>1010 Avenue, New York, NY 10018 US. </span>
            </div>
            <div className="flex gap-2 items-center">
                <FaPhoneAlt className="text-secondary" />  <span>212 386 5575, 212 386 5576</span>    
            </div>
        </div>
        <div className="flex gap-2 items-center">
            <FaClock className="text-secondary" /> <span>Mon-Sat, 8.00-18.00. Sunday CLOSED</span>
        </div>
    </div>
  )
}

export default TopSection
