import React, { useState } from "react";

function truncateText(text, wordLimit) {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
}

const Modal = ({ post, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleClickOutside = (e) => {
    if (e.target.id === "modal-container") {
      onClose();
    }
  };

  return (
    <div
      id="modal-container"
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-8 relative w-full max-w-2xl">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <p className="text-gray-700"><strong>Location:</strong> {post.location}</p>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z" clipRule="evenodd" />
            </svg>
            <p className="text-gray-700"><strong>Deadline:</strong> {post.deadline}</p>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
            </svg>
            <p className="text-gray-700"><strong>Rate:</strong> {post.rate}</p>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <p className="text-gray-700"><strong>Distance:</strong> {post.miles}</p>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <p className="text-gray-700"><strong>Gender:</strong> {post.gender}</p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Job Description</h3>
          <p className="text-gray-700">{post.description}</p>
        </div>
      </div>
    </div>
  );
};

function Posts() {
  const [showFullText, setShowFullText] = useState({});
  const [selectedPost, setSelectedPost] = useState(null);

  const handleToggle = (id) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleOpenModal = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  const posts = [
    {
      id: 1,
      title: "Software Engineer",
      location: "San Francisco, CA",
      rate: "$50/hr",
      miles: "5 miles Away",
      gender: "Male",
      description:
        "Seeking a skilled software engineer to join our growing team. Experience with React, Node.js, and cloud technologies preferred. Work on various challenging projects, enhance your skills and grow your career.",
      deadline: "06/30/2023",
    },
    {
      id: 2,
      title: "Marketing Intern",
      location: "New York, NY",
      rate: "$20/hr",
      miles: "10 miles Away",
      gender: "Female",
      description:
        "Seeking a motivated marketing intern to assist with social media campaigns, content creation, and market research. This is a great opportunity for someone looking to gain real-world marketing experience.",
      deadline: "07/15/2023",
    },
    // Other posts...
  ];

  const wordLimit = 8;

  return (
    <div className="container mx-auto">
      <div className="bg-gray-200 px-20 py-12 md:py-20">
        <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="rounded-lg border text-card-foreground bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="grid gap-4 p-6 pb-0">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <div className="flex items-center gap-2 text-sm font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="gray"
                        className="bi bi-geo-alt"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                      </svg>
                      <span className="text-gray-400 gap-2 text-xs font-bold">
                        {post.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="bg-green-200 px-2 py-1 rounded-lg  text-primary-foreground font-bold">
                      {post.rate}
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="bg-gray-200 px-2 py-1 rounded-md text-xs font-bold">
                      {post.miles}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="bg-gray-200 px-2 py-1 rounded-md text-xs font-bold">
                      {post.gender}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm font-medium">
                  {showFullText[post.id]
                    ? post.description
                    : truncateText(post.description, wordLimit)}
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap text-xs font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
                    onClick={() => handleToggle(post.id)}
                  >
                    {showFullText[post.id] ? "Show Less" : "View More"}
                  </button>
                </p>
              </div>
              <div className="border"></div>
              <div className="flex items-center bg-gray-100 rounded-b-lg px-4 p-2 justify-between">
                <div className="flex  items-center justify-between text-xs  font-bold">
                  <span className="text-gray-500">
                    Application Deadline: {post.deadline}
                  </span>
                </div>
                <div>
                  <button
                    className="bg-gray-600 text-sm p-1 px-3 text-bold text-white font-bold hover:bg-gray-700 rounded-[5px]"
                    onClick={() => handleOpenModal(post)}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPost && (
        <Modal post={selectedPost} isOpen={!!selectedPost} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Posts;
