import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4 h-40 max-w-sm w-full flex flex-col justify-between">
        <h2 className="text-lg mt-8 text-center font-semibold">
          Are you sure you want to log out?
        </h2>
        <div className="flex items-center justify-between mt-auto">
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
function Dashboard() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    } else {
      toast.error("No user is logged in.");
      navigate('/signin')
    }
  };

  return (
    <div>
      <div className="w-full min-h-screen mt-[60px] bg-gray-100">
        <div className="container mx-auto flex flex-col gap-6 lg:p-6 p-3 md:p-10">
          <div className="grid mt-10 grid-cols-2 gap-4 md:flex md:flex-row md:justify-between">
            <div
              onClick={() => navigate("/post-requiremnt")}
              className="flex cursor-pointer lg:w-[180px]  justify-center items-center gap-2 rounded-lg bg-white shadow p-4 text-center transition-colors hover:bg-slate-300"
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
                className="h-8 w-8"
              >
                <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"></path>
              </svg>
              <div className="text-sm font-medium">Create Post</div>
            </div>
            <div
              className="flex cursor-pointer lg:w-[180px] justify-center items-center gap-2 rounded-lg bg-white shadow p-4 text-center transition-colors hover:bg-slate-300"
              onClick={() => navigate("/resume-check")}
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
                className="h-8 w-8"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              </svg>
              <div className="text-sm font-medium">Resume Check</div>
            </div>

            <div
              onClick={() => navigate("/wallet")}
              className="flex cursor-pointer lg:w-[180px] justify-center items-center gap-2 rounded-lg bg-white shadow p-4 text-center transition-colors hover:bg-slate-300"
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
                className="h-8 w-8"
              >
                <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
              </svg>
              <div className="text-sm font-medium">Wallet</div>
            </div>
            <div
              onClick={() => navigate("/profile")}
              className="flex cursor-pointer lg:w-[180px] justify-center items-center gap-2 rounded-lg bg-white shadow p-4 text-center transition-colors hover:bg-slate-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
              <div className="text-sm font-medium">Profile</div>
            </div>
            <div>
              <div
                className="flex cursor-pointer lg:w-[180px] justify-center items-center gap-2 rounded-lg bg-white shadow p-4 text-center transition-colors hover:bg-slate-300"
                onClick={() => setIsModalOpen(true)} // Open modal on click
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
                  className="h-8 w-8"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" x2="9" y1="12" y2="12"></line>
                </svg>
                <div className="text-sm font-medium">Logout</div>
              </div>

              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={() => {
                  logout();
                  setIsModalOpen(false);
                }}
              />
            </div>
          </div>
          <div className="flex cursor-pointer flex-col gap-4 rounded-lg bg-white shadow p-6">
            <div className="flex items-center gap-3">
              <span className="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12">
                <img
                  className="aspect-square object-cover h-full w-full"
                  alt="@shadcn"
                  src="https://img.freepik.com/free-photo/people-smiling-men-handsome-cheerful_1187-6057.jpg?t=st=1727605697~exp=1727609297~hmac=19ed9dd2733519eca5ee5b69fb8c40a1aae4d014680c6c2b4db259baab20c47d&w=740"
                />
              </span>
              <div className="flex flex-col">
                <div className="text-sm font-medium">John Doe</div>
                <div className="text-sm text-muted-foreground">
                  john@example.com
                </div>
              </div>
            </div>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-border h-[1px] w-full"
            ></div>
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Remaining Coins</div>
              <div className="text-2xl font-bold">1,234</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Total Posts</div>
              <div className="text-2xl font-bold">125</div>
            </div>
          </div>
          <div
            className="border shadow-sm  flex items-center justify-between rounded-lg bg-gray-300  p-6 text-primary-foreground"
            data-v0-t="card"
          >
            <div>
              <div className="text-sm font-medium">Total Posts</div>
              <div className="text-3xl font-bold">125</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
