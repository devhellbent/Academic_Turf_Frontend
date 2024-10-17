import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const avatarRef = useRef(null);
  const [userData, setUserData] = useState(null);

  // Fetch user data from localStorage
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const logout = () => {
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      localStorage.removeItem("userData"); // Clear user data
      setUserData(null); // Update state to reflect logged out
      navigate('/signin')
      toast.success(`Logging out user: ${userData.name}`);
      // navigate(""); // Navigate to sign-in page
      // window.location.reload();
    } else {
      toast.error("No user is logged in.");
      navigate("/signin");
      window.location.reload();
    }
  };

  // Show dropdown on hover or click
  const showDropdown = () => setIsDropdownVisible(true);

  // Hide dropdown if the mouse leaves both avatar and dropdown
  const hideDropdown = () => {
    setTimeout(() => {
      if (
        !dropdownRef.current?.matches(":hover") &&
        !avatarRef.current?.matches(":hover")
      ) {
        setIsDropdownVisible(false);
      }
    }, 200); // Small delay to ensure it doesn't hide prematurely
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !avatarRef.current.contains(event.target)
      ) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-100 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
              className="text-lg font-bold text-gray-800 cursor-pointer"
            >
              Academic Turf
            </div>
          </div>
          <nav className="hidden md:flex space-x-4">
            <div
              onClick={(e) => {
                e.preventDefault();
                navigate("/all-requirements");
              }}
              className="text-gray-900 cursor-pointer hover:text-gray-800 px-3 py-2 rounded-md text-sm font-bold"
            >
              All Requirements
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                navigate("/post-requirements");
              }}
              className="text-gray-900 cursor-pointer hover:text-gray-800 px-3 py-2 rounded-md text-sm font-bold"
            >
              Post Requirements
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                navigate("/overseas-education");
              }}
              className="text-gray-900 cursor-pointer hover:text-gray-800 px-3 py-2 rounded-md text-sm font-bold"
            >
              Overseas Education
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                navigate("/my-posts");
              }}
              className="text-gray-900 cursor-pointer  hover:text-gray-800 px-3 py-2 rounded-md text-sm font-bold"
            >
              My Posts
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                navigate("/wallet");
              }}
              className="text-gray-900 cursor-pointer hover:text-gray-800 px-3 py-2 rounded-md text-sm font-bold"
            >
              Wallet
            </div>
          </nav>
          <div className="hidden md:block lg:flex items-center gap-3 ">
            {userData ? (
              <div className="relative">
                {/* Avatar Image */}
                <img
                  ref={avatarRef}
                  id="avatarButton"
                  type="button"
                  className="w-10 h-10 rounded-full object-cover cursor-pointer"
                  src={
                    userData.profilePicture ||
                    "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1727763930~exp=1727767530~hmac=ab89d95523cfe749e2105faa4ca310f4a1b012877aec9197fbd9b40d9f235180&w=826"
                  }
                  alt="User dropdown"
                  onClick={showDropdown}
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                />

                {/* Dropdown */}
                {isDropdownVisible && (
                  <div
                    id="userDropdown"
                    ref={dropdownRef}
                    className="absolute z-50 bg-white  divide-y divide-gray-100 rounded-lg shadow-lg w-64 dark:bg-gray-700 dark:divide-gray-600 transition-all duration-300 ease-in-out"
                    style={{
                      top: "50px", // Adjust the dropdown position
                      left: window.innerWidth <= 640 ? "-80px" : "-210px", // Responsive left alignment
                    }}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                  >
                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                      <div>{userData?.name}</div>
                      <div className="font-medium truncate">
                        {userData?.email}{" "}
                      </div>
                    </div>
                    <div className=" border-b text-sm">
                      <div className="px-4">Accounts</div>
                      <div className=" my-2 flex gap-1 flex-col">
                        <p className=" flex gap-2 cursor-pointer items-center px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-person-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                          </svg>
                          Student/Client Details
                        </p>
                        <p className=" flex gap-2 cursor-pointer items-center px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-person-fill-x"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708" />
                          </svg>
                          Service Provider Details
                        </p>
                      </div>
                    </div>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        
                        <div onClick={()=> navigate ('/dashboard')} className=" cursor-pointer gap-2 flex items-center px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 64 64"
                            fill="none"
                          >
                            <rect width="64" height="64" rx="10" />

                            <rect
                              x="12"
                              y="12"
                              width="18"
                              height="18"
                              rx="3"
                              fill="#1a1a1a"
                              stroke="#4A5568"
                              stroke-width="2"
                            />
                            <rect
                              x="34"
                              y="12"
                              width="18"
                              height="18"
                              rx="3"
                              fill="#1a1a1a"
                              stroke="#4A5568"
                              stroke-width="2"
                            />
                            <rect
                              x="12"
                              y="34"
                              width="18"
                              height="18"
                              rx="3"
                              fill="#1a1a1a"
                              stroke="#4A5568"
                              stroke-width="2"
                            />
                            <rect
                              x="34"
                              y="34"
                              width="18"
                              height="18"
                              rx="3"
                              fill="#1a1a1a"
                              stroke="#4A5568"
                              stroke-width="2"
                            />
                          </svg>
                          Dashboard
                        </div>
                      </li>
                      <li>
                        <div className=" cursor-pointer gap-2 flex items-center px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 64 64"
                            fill="none"
                          >
                            <rect width="64" height="64" rx="10" />

                            <rect
                              x="14"
                              y="12"
                              width="36"
                              height="40"
                              rx="5"
                              fill="#1a1a1a"
                              stroke="#4A5568"
                              stroke-width="2"
                            />

                            <rect
                              x="18"
                              y="20"
                              width="28"
                              height="2"
                              rx="1"
                              fill="#A0AEC0"
                            />
                            <rect
                              x="18"
                              y="26"
                              width="24"
                              height="2"
                              rx="1"
                              fill="#A0AEC0"
                            />
                            <rect
                              x="18"
                              y="32"
                              width="28"
                              height="2"
                              rx="1"
                              fill="#A0AEC0"
                            />
                            <rect
                              x="18"
                              y="38"
                              width="24"
                              height="2"
                              rx="1"
                              fill="#A0AEC0"
                            />

                            <path
                              d="M23 46L27 50L35 42"
                              stroke="#38A169"
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          All Requirements
                        </div>
                      </li>
                      <li>
                        <div className=" cursor-pointer gap-2 flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="currentColor"
                            class="bi bi-people-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                          </svg>
                          My Service Provide Profile
                        </div>
                      </li>
                    </ul>
                    <div onClick={logout} className="py-1">
                      <div className=" text-lg cursor-pointer gap-2 flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          fill="currentColor"
                          class="bi bi-box-arrow-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                          />
                        </svg>
                        Sign out
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/signin");
                }}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Sign In
              </button>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/all-requirements");
                setIsMenuOpen(false);
              }}
              className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            >
              All Requirements
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/post-requirements");
                setIsMenuOpen(false);
              }}
              className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            >
              Post Requirements
            </a>
            <button
              onClick={() => {
                navigate("/signin");
                setIsMenuOpen(false);
              }}
              className="w-full text-left text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
