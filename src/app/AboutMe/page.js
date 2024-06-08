"use client";
import React, { useState, useEffect } from "react";

const AboutMe = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to update isSmallScreen state based on viewport width
    const updateIsSmallScreen = () => {
      setIsSmallScreen(window.innerWidth < 768); // Example breakpoint: 768px
    };
    // Call the function once when component mounts
    updateIsSmallScreen();
    // Event listener to update isSmallScreen state when viewport size changes
    window.addEventListener("resize", updateIsSmallScreen);
    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", updateIsSmallScreen);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-24">
      <div className="md:col-span-1">
        {isSmallScreen ? (
          <img src="/tima.jpeg" alt="Photo of me" className="rounded md:w-full lg:max-w-xl mb-12 md:mb-0" />
        ) : null}
        <div className="p-6">
          <h1 className="text-6xl font-bold mb-4">I’m Jane. I live in New York City, where I develop the future.</h1>
          <p className="text-gray-700 md:my-12">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem
            ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
          </p>
          <p className="text-gray-700 my-12">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem
            ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
          </p>
          <p className="text-gray-700 my-12">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem
            ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
          </p>
          <p className="text-gray-700 lg:my-12">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem
            ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:col-span-1">
        <div className="p-6">
          {isSmallScreen ? null : (
            <img src="/tima.jpeg" alt="Photo of me" className="rounded md:w-full lg:max-w-xl mb-12 md:mb-0" />
          )}
          <div className="lg:mt-16 flex flex-col">
            <a href="#" className="flex flex-row my-2">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3a4.48 4.48 0 00-4.49 4.49c0 .35.04.69.1 1.02A12.94 12.94 0 013 4.53a4.48 4.48 0 00-.61 2.27A4.48 4.48 0 004.48 11a4.48 4.48 0 01-2.03-.56v.06a4.48 4.48 0 003.59 4.41 4.52 4.52 0 01-2.02.08 4.48 4.48 0 004.19 3.11 9.05 9.05 0 01-6.66 1.85A12.8 12.8 0 007 21c8.29 0 12.83-6.87 12.83-12.83 0-.2-.01-.39-.02-.59A9.19 9.19 0 0023 3z" />
              </svg>
              <p>Follow me on X</p>
            </a>
            <a href="#" className="flex flex-row my-2">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.18 6.84 9.5.5.09.66-.22.66-.49 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.67-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.03A9.55 9.55 0 0112 6.81c.85.004 1.71.115 2.51.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.66.64.69 1.03 1.58 1.03 2.67 0 3.83-2.34 4.68-4.57 4.92.36.31.68.93.68 1.87 0 1.35-.01 2.44-.01 2.77 0 .27.17.59.67.49A10.004 10.004 0 0022 12c0-5.52-4.48-10-10-10z" />
              </svg>
              <p> Follow me on GitHub</p>
            </a>
            <a href="#" className="flex flex-row my-2">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 00-6 6v5h-4v-5a6 6 0 1112 0v5h-4v-5a6 6 0 00-6-6zM2 9a2 2 0 114 0 2 2 0 01-4 0zM4 13h4v8H4v-8z" />
              </svg>
              <p>Follow me on LinkedIn</p>
            </a>

            <a href="#" className="flex flex-row my-16">
              <img src="/linkedin-linked-in-svgrepo-com.svg" alt="envelope" className="mr-2" />
              <p>jane@email.com</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
