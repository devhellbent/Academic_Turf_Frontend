import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-100 josefin-sans-regular text-white py-8 pt-12  ">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Academic Turf</span>
          </div>
          <p className="text-gray-700 font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            iste vero sunt, pariatur dignissimos numquam
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Popular Pages</h4>
          <ul className="space-y-2">
            <li>
              <div className="hover:text-indigo-500 cursor-pointer">
                All Requirments
              </div>
            </li>
            <li>
              <div
                className="hover:text-indigo-500 cursor-pointer"
                // onClick={() => navigate("/scriptures/Vedas")}
              >
                Services
              </div>
            </li>
            <li>
              <div
                className="hover:text-indigo-500 cursor-pointer"
                // onClick={() => navigate("/scriptures/Upanishad")}
              >
                Find Jobs
              </div>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Important Pages</h4>
          <ul className="space-y-2">
            <li>
              <div
                className="hover:text-indigo-500 cursor-pointer"
                onClick={() => navigate("/about")}
              >
                About
              </div>
            </li>
            <li>
              <div
                className="hover:text-indigo-500 cursor-pointer"
                onClick={() => navigate("")}
              >
                Contact
              </div>
            </li>
            <li>
              <div
                className="hover:text-indigo-500 cursor-pointer"
                onClick={() => navigate("")}
              >
                Privacy Policy
              </div>
            </li>
            <li>
              <div
                className="hover:text-indigo-500 cursor-pointer"
                onClick={() => navigate("")}
              >
                Terms of Service
              </div>
            </li>
           
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4">
            <div
              className="text-gray-400 hover:text-indigo-500 cursor-pointer"
              onClick={() => navigate("")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </div>
            <div
              className="text-gray-400 hover:text-indigo-500 cursor-pointer"
              onClick={() => navigate("")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </div>
            <div
              className="text-gray-400 hover:text-indigo-500 cursor-pointer"
              onClick={() => navigate("")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-800 pt-4 text-center  text-gray-500">
        <p>© 2024 Academic Turf | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
