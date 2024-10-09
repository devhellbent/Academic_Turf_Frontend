import React from "react";
import mainImg from "../../Images/main.png";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <main className="main flex flex-col md:flex-row items-center justify-between" id="background">
        {/* Text Section */}
        <div className="main-text flex flex-col md:w-1/2 p-4">
          <h1 className="main-heading text-4xl font-bold">
            Find and Connect <span className="main-blob text-purple-600">10x</span> faster at Academic Turf
          </h1>
          <p className="main-para mt-5 text-lg">
            Home to associations that get work done. <br />
            Finding services that suit you just got faster.
          </p>
          <div className="btn-div flex mt-5">
            <Link to="/home" className="purple-btn bg-purple-600 text-white py-2 px-4 rounded-md mr-4">
              Get Started
            </Link>
            <Link to="/user-requirements" className="purple-border-btn border-2 border-purple-600 text-purple-600 py-2 px-4 rounded-md">
              Find Jobs and Opportunities
            </Link>
          </div>
          <div className="mt-5">
            <p className="trusted-by text-gray-500">TRUSTED BY:</p>
            <p className="trusted-by font-bold text-lg">OVER 100+ DEVELOPERS</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="main-img md:w-1/2 p-4">
          <img 
            src={mainImg} 
            className="w-full h-auto object-contain" 
            alt="Main Image" 
          />
        </div>
      </main>
    </div>
  );
}

export default Main;
