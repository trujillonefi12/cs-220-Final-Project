import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white py-4 flex justify-between items-center px-8 ml-60">
            {/* Left side with menu links */}
            <div className="text-zinc-800">
                <a href="#" className="mr-4">Home</a>
                <a href="#" className="mr-4">About</a>
                <a href="#" className="mr-4">Uses</a>
                <a href="#" className="mr-4">Projects</a>
            </div>
            {/* Right side with copyright notice */}
            <div className="text-zinc-400 font-normal text-sm ">
                <span>© 2024 John Doe. All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
