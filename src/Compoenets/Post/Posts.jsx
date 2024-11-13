import React, { useState, useEffect } from "react";

// Function to truncate text for preview
function truncateText(text, wordLimit) {
  if (!text) return ""; // Return an empty string if text is undefined or null
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
}

const getCurrencyIcon = (currency) => {
  switch (currency) {
    case "USD":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-currency-dollar"
          viewBox="0 0 16 16"
        >
          <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
        </svg>
      );
    case "EUR":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-currency-euro"
          viewBox="0 0 16 16"
        >
          <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936q-.002-.165.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.6 6.6 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
        </svg>
      );
    case "GBP":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="w-4 h-4 mr-1"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8zm0 14.5a6.5 6.5 0 1 1 0-13c3.58 0 6.5 2.92 6.5 6.5S11.58 14.5 8 14.5z" />
          <path d="M7.5 4.5h1v1h-1v-1zm0 2h1v1h-1V6.5zm0 2h1v1h-1V8.5zm0 2h1v1h-1v-1zm0 2h1v1h-1v-1z" />
        </svg>
      );
    case "INR":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-currency-rupee"
          viewBox="0 0 16 16"
        >
          <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
        </svg>
      );
    case "CAD":
      return (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122.88 100.82"
        >
          <title>canadian-dollar</title>
          <path d="M86.7,91.39l-1-.06q-3.47-.21-6.84-.66t-6.45-1q-3.09-.56-6-1.32v-17c2.5.22,5.21.4,8.11.55s5.85.26,8.83.33,5.75.11,8.32.11a27.87,27.87,0,0,0,6.07-.55A7.35,7.35,0,0,0,101.37,70a4.44,4.44,0,0,0,1.21-3.3V65.41a4.17,4.17,0,0,0-1.71-3.64,6.76,6.76,0,0,0-4-1.21H91q-12.8,0-19.41-5.63T65,36.07V32.43q0-12.13,7.28-18.15Q77.69,9.79,86.7,8.66V0H98.61V8.42c1.5.08,3,.2,4.36.35,3,.33,5.92.74,8.6,1.21s5.1,1,7.23,1.49v17q-5.07-.43-11.42-.72t-11.53-.27a30.53,30.53,0,0,0-5.51.44,6.86,6.86,0,0,0-3.75,1.76,5.25,5.25,0,0,0-1.32,3.86v1.11A5.07,5.07,0,0,0,87,38.83a8.53,8.53,0,0,0,5.41,1.43h7.28a25.77,25.77,0,0,1,12.85,2.92,19.12,19.12,0,0,1,7.72,8,24.46,24.46,0,0,1,2.59,11.41v3.64q0,10.48-3.64,16a17.86,17.86,0,0,1-10.37,7.44,51.2,51.2,0,0,1-10.26,1.73v9.47H86.7V91.39Zm-56.59.16A43.46,43.46,0,0,1,17.65,89.9a20.49,20.49,0,0,1-9.49-6.07q-4-4.41-6.06-12.68T0,49.64q0-12.8,2.21-21T8.44,16.05A21,21,0,0,1,18,9.87,40.83,40.83,0,0,1,30.11,8.16a89.66,89.66,0,0,1,12.08.72,74.16,74.16,0,0,1,8.94,1.71,40.52,40.52,0,0,1,5.9,2V29.23c-1.4-.29-3.2-.59-5.41-.88s-4.72-.53-7.55-.72-5.9-.27-9.21-.27a22.36,22.36,0,0,0-6.35.77,7.35,7.35,0,0,0-4.13,3.09A17.18,17.18,0,0,0,22.12,38a77.75,77.75,0,0,0-.72,11.86,91,91,0,0,0,.55,11,18.48,18.48,0,0,0,2,6.89,7.92,7.92,0,0,0,4.13,3.53,19.65,19.65,0,0,0,7,1q8.39,0,13.62-.28T57,71.37V88a39,39,0,0,1-6.45,1.88,76,76,0,0,1-8.66,1.21q-5,.45-11.81.44Z" />
        </svg>
      );
    default:
      return null;
  }
};

// Modal Component
const Modal = ({ post, isOpen, onClose }) => {
  if (!isOpen) return null;
  const wordLimit = 15;
  const handleClickOutside = (e) => {
    if (e.target.id === "modal-container") {
      onClose();
    }
  };

  const skillsArray = post?.skills ? JSON.parse(post.skills) : [];
  return (
    <div
      id="modal-container"
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-8 relative w-full max-w-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          {/* Close Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold mb-4">{post.lookingFor}</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Displaying Post Details */}
          <div className="flex items-center">
            <p className="text-gray-700">
              <strong>Location:</strong> {post.location}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-700 gap-3 items-center flex justify-between">
              <strong>File:</strong>
              <span className="">
                <a
                  href={post.file} // Assuming post.file contains the URL
                  download // This attribute prompts a download when clicked
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-400 border border-transparent rounded h-8 shadow-sm hover:bg-gray-600"
                >
                  Download File
                </a>
              </span>
            </p>
          </div>

          <div className="flex items-center">
            <p className="text-gray-700 flex items-center gap-2">
              <strong>Rate:</strong>{" "}
              <span className="bg-green-200 px-2 py-1 rounded-lg text-xs text-primary-foreground font-bold flex items-center">
                {getCurrencyIcon(post.currency)}{" "}
                {/* Function to get the currency icon */}
                {Math.floor(post.budget)}/hr
              </span>
            </p>
          </div>

          <div className="flex items-center">
            <p className="text-gray-700">
              <strong>Gender:</strong> {post.preferredGender}
            </p>
          </div>
        </div>
        <div className="mb-3">
          <span className="font-semibold">Skills:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {skillsArray.length > 0 ? (
              skillsArray.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
                >
                  {skill.trim()} {/* Trim any leading or trailing spaces */}
                </span>
              ))
            ) : (
              <span>No skills available</span> // Handle the case where skills are not available
            )}
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Job Description</h3>
          <p className="text-gray-500  text-sm mt-3 font-bold">
            {post.requirementDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Posts Component
function Posts() {
  const [showFullText, setShowFullText] = useState({});
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([]); // State to hold posts
  const wordLimit = 15;
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const userId = userData.userid;

  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/post/user/${userId}`
        ); // Replace with your API endpoint
        const data = await response.json();
        // Check if data is an array, otherwise default to an empty array
        setPosts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]); // Ensure posts is an empty array if there's an error
      }
    };

    fetchPosts();
  }, [userId]); // Add userId as a dependency

  const handleToggle = (id) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleUserCardClick = (user) => {
    if (selectedUser && selectedUser.id === user.id) {
      setIsDrawerOpen(false);
      setSelectedUser(null);
    } else {
      setSelectedUser(user);
      setIsDrawerOpen(true);
    }
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const skillsArray = selectedUser?.skills
    ? JSON.parse(selectedUser.skills)
    : [];
  return (
    <div className=" lg:mt-16 mt-[60px] bg-gray-100 min-h-screen">
      <div className="max-w-9xl mx-auto lg:p-4 p-2">
        <h1 className="text-3xl mt-1 font-bold text-primary mb-5">
         My Requirements
        </h1>
        <div className="lg:w-4/4 min-h-screen overflow-y-auto overflow-x-hidden max-h-screen">
          {posts.length === 0 ? (
            <div className="text-center text-gray-500">No posts found</div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 p-3 pl-0 pt-0 gap-3">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white shadow-md cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg  flex flex-col rounded-lg text-card-foreground lg:h-[220px]"
                  onClick={() => handleUserCardClick(post)}
                >
                  {/* Card Content */}
                  <div className="flex-grow p-6 pb-0">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold">
                          {post.lookingFor}
                        </h3>
                        <div className="flex items-center gap-2 text-sm font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            fill="#9333ea"
                            className="bi bi-geo-alt"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                          </svg>
                          <span className="text-[#9333ea] gap-2 text-xs font-bold">
                            {post.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <span className="bg-green-200 px-2 py-1 rounded-lg text-xs text-primary-foreground font-bold flex items-center">
                            {getCurrencyIcon(post.currency)}
                            {Math.floor(post.budget)}/hr
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex mt-2 items-center gap-2 text-sm text-muted-foreground">
                        <span className="bg-[#eaddf6] px-2 py-1 rounded-md text-xs font-bold">
                          {post.preferredGender}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mt-3 font-medium overflow-hidden text-ellipsis">
                      {showFullText[post.id]
                        ? post.description
                        : truncateText(post.requirementDescription, wordLimit)}
                    </p>
                  </div>

                  {/* Fixed Footer */}
                  <div className="flex items-center justify-between bg-gray-200 rounded-b-lg px-4 p-2">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-[#9333ea]">
                        Application Deadline:
                      </span>
                    </div>
                    <div>
                      <button
                        className="bg-[#9333ea] text-sm p-1 px-3 text-bold text-white font-bold hover:bg-[#7c37bd] rounded-[5px]"
                        onClick={() => handleUserCardClick(post)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div
        id="user-profile-drawer"
        className={`fixed inset-y-0 z-50 right-0 lg:w-1/2 bg-white shadow-xl transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out overflow-y-auto`}
      >
        {selectedUser && (
          <div className="lg:p-3 p-2">
            <div className="flex justify-between items-center mb-2">
              <button
                onClick={closeDrawer}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {/* <button
                onClick={() =>
                  window.open(
                    `/user-profile?userId=${selectedUser.id}`,
                    "_blank"
                  )
                }
                className="border flex items-center gap-1 p-1 px-3 rounded bg-gray-300 hover:bg-gray-400"
              >
                Open Profile In New Tab{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-arrow-up-right-square"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                  />
                </svg>
              </button> */}
            </div>

            <div className="  p-2 mt-5">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold ">
                    {selectedUser.lookingFor}
                  </h2>
                  <p className="text-[#9333ea] flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#9333ea"
                      class="bi bi-geo-alt-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                    </svg>

                    {selectedUser.location}
                  </p>
                </div>{" "}
                <p className="text-gray-700 gap-3 items-center flex justify-between">
                  {/* <strong>File:</strong> */}
                  <span className="">
                    <a
                      href={selectedUser.file}
                      download
                      className="inline-flex items-center gap-2 justify-center px-4 py-2 text-sm font-medium text-white bg-[#9737f1] border border-transparent rounded h-8 shadow-sm hover:bg-gray-600"
                    >
                      File{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="white"
                        class="bi bi-cloud-arrow-down-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708" />
                      </svg>
                    </a>
                  </span>
                </p>
              </div>
              <div className=" ">
                <div className="lg:grid-cols-3 grid-cols-2 grid gap-4 justify-between mt-10 mb-6">
                  <div className="flex items-center">
                    <p className="text-gray-700 bg-[#e2cdf5] w-[200px] text-center flex-col p-2 px-5 rounded-[12px] items-center gap-2">
                      <span className="text-gray-600">Rate</span>
                      <div className="flex justify-center">
                        <span className="rounded-lg text-md text-gray-800  font-bold flex items-center">
                          {getCurrencyIcon(selectedUser.currency)}
                          {Math.floor(selectedUser.budget)}
                          <p className="text-xs text-gray-600">/hr</p>
                        </span>
                      </div>
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-gray-700 bg-[#faecbf] w-[200px] text-center p-2 px-5 rounded-[12px] flex-col">
                      <p>Gender</p> {selectedUser.preferredGender}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-gray-700 bg-[#b2c6f8] w-[200px] text-center p-2 px-5 rounded-[12px] flex-col">
                      <p>Language</p> {selectedUser.language}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-gray-700 bg-[#a1f7a4] w-[200px] text-center p-2 px-5 rounded-[12px] flex-col">
                      <p>Meeting</p> {selectedUser.meetingPreference}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-3 bg-blue-50 p-4 rounded-lg">
                <span className="font-semibold">Skills:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {skillsArray.length > 0 ? (
                    skillsArray.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-[#9333ea] text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
                      >
                        {skill.trim()}
                      </span>
                    ))
                  ) : (
                    <span>No skills available</span>
                  )}
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Job Description</h3>
                <p className="text-gray-500 text-sm mt-3 font-bold">
                  {selectedUser.requirementDescription}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Posts;
