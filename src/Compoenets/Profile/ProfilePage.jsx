import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Experience from "./ProfileEdit/Experience/Experience";
import Certificate from "./ProfileEdit/Certificate/Certificate";
import Skills from "./ProfileEdit/Skills/Skills";
import axios from "axios";

function ProfilePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Add this line

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    profilePicture: "",
    location: "",
    phoneNumber: "",
    designation: "",
    experienceYears: "",
  });

  const getUserIdFromLocalStorage = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const userId = userData?.userid;
    return userId;
  };

  // Fetch profile data (GET API)
  const fetchProfile = async (userId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/users/${userId}/profile`
      );
      setProfile(response.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    const userId = getUserIdFromLocalStorage();
    if (userId) {
      fetchProfile(userId); // Fetch profile using the correct userId
    } else {
      console.error("User ID not found in localStorage");
    }
  }, []);

  return (
    <div>
      <div className="bg-gray-200 mt-[60px] text-foreground">
        <div className="container mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr]">
            <div className="flex flex-col  items-center gap-6 rounded-lg bg-white shadow p-6 ">
              <span className="relative flex shrink-0 overflow-hidden rounded-full h-24 w-24">
                <img
                  className="aspect-square h-full w-full object-cover"
                  alt={profile?.name}
                  src={
                    profile?.profilePicture ||
                    "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1727763930~exp=1727767530~hmac=ab89d95523cfe749e2105faa4ca310f4a1b012877aec9197fbd9b40d9f235180&w=826"
                  }
                  loading="lazy"
                />
              </span>
              <div className="grid gap-1 text-center">
                <h2 className="text-2xl font-bold">{profile?.name}</h2>
                <p className="text-muted-foreground">{profile?.email}</p>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-300 px-3 py-1 text-sm font-medium">
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
                  className="h-4 w-4"
                >
                  <circle cx="8" cy="8" r="6"></circle>
                  <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                  <path d="M7 6h1v4"></path>
                  <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                </svg>
                <span>1,234 Coins</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm font-medium">
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
                  className="h-4 w-4"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
                <span>10 Achievements</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm font-medium">
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
                  className="h-4 w-4"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>4.8 Rating</span>
              </div>
            </div>
            <div className="grid gap-8">
              <div className="grid bg-white shadow gap-4 rounded-lg bg-card p-6 ">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">
                    Professional Details
                  </h3>
                  <button
                    onClick={() => navigate("/edit-profile")}
                    className="inline-flex hover:bg-gray-300 rounded-full items-center justify-center whitespace-nowrap p-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
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
                      className="h-5 w-5"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                    <span className="sr-only">Edit</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
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
                      className="h-5 w-5 text-muted-foreground"
                    >
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                    </svg>
                    <div>
                      <p className="font-medium">{profile?.designation}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
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
                      className="h-5 w-5 text-muted-foreground"
                    >
                      <line x1="2" x2="5" y1="12" y2="12"></line>
                      <line x1="19" x2="22" y1="12" y2="12"></line>
                      <line x1="12" x2="12" y1="2" y2="5"></line>
                      <line x1="12" x2="12" y1="19" y2="22"></line>
                      <circle cx="12" cy="12" r="7"></circle>
                    </svg>
                    <p>{profile?.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
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
                      className="h-5 w-5 text-muted-foreground"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <p>{profile?.phoneNumber}</p>
                  </div>

                  <div className="flex items-center gap-2">
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
                      className="h-5 w-5 text-muted-foreground"
                    >
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                    </svg>
                    <p>Experience : {profile?.experienceYears} years</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 rounded-lg bg-white p-6 shadow">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Skills</h3>
                  <button
                    onClick={() => navigate("/edit-skills")}
                    className="inline-flex hover:bg-gray-300 rounded-full items-center justify-center whitespace-nowrap  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
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
                      className="h-5 w-5"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                    <span className="sr-only">Edit</span>
                  </button>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Skills />
                  </div>
                </div>
              </div>
              <div className="grid gap-4 rounded-lg bg-white  p-6 shadow">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Certifications</h3>
                  <button
                    onClick={() => navigate("/add-edit-certificate")}
                    className="inline-flex items-center justify-center whitespace-nowrap hover:bg-gray-300 rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
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
                      className="h-5 w-5"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                    <span className="sr-only">Edit</span>
                  </button>
                </div>
                <div className="grid gap-2">
                  <Certificate />
                </div>
              </div>
              <div className="grid gap-4 rounded-lg bg-white p-6 shadow">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Experience</h3>
                  <button
                    onClick={() => navigate("/add-edit-experience")}
                    className="inline-flex items-center justify-center whitespace-nowrap hover:bg-gray-300 rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
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
                      className="h-5 w-5"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                    <span className="sr-only">Edit</span>
                  </button>
                </div>
                <div className="grid gap-2">
                  <Experience />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
