import React, { useState } from "react";

function ResumeCheck() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      // You can handle the file upload process here
      console.log("File ready to upload:", selectedFile);
    }
  };

  return (
    <div>
      <div className="bg-gray-200 min-h-screen">
        <main>
          <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Upload Your Resume
              </h2>
              <div className="bg-gray-100 border border-gray-300 rounded-lg p-8 flex justify-center items-center">
                <div className="text-center">
                  <input
                    type="file"
                    accept=".pdf, .doc, .docx"
                    className="hidden"
                    id="file-upload"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-primary font-medium hover:underline"
                  >
                    <div className="flex justify-center">
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
                        className="h-12 w-12  text-gray-500 mb-4"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" x2="12" y1="3" y2="15"></line>
                      </svg>
                    </div>
                    Drag and drop your resume or{" "}
                    <span className="underline">browse files</span>
                  </label>
                  {selectedFile && (
                    <p className="text-gray-600 mt-4">
                      File: {selectedFile.name}
                    </p>
                  )}
                  {/* <button
                    className="mt-4 bg-primary text-white bg-gray-300 ml-2 py-2 px-4 rounded-lg"
                    onClick={handleFileUpload}
                  >
                    Upload Resume
                  </button> */}
                  <p className="text-gray-500 text-sm mt-4">
                    Supported file types: PDF, DOC, DOCX
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Resume Score Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Your Resume Score
              </h2>
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary text-white font-bold py-2 px-4 rounded-full mr-4">
                    85
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Excellent Resume
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Strengths
                    </h4>
                    <ul className="list-disc pl-6 text-gray-600">
                      <li>Clear and concise writing</li>
                      <li>Relevant skills and experience</li>
                      <li>Excellent formatting and layout</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Areas for Improvement
                    </h4>
                    <ul className="list-disc pl-6 text-gray-600">
                      <li>Quantify achievements with metrics</li>
                      <li>Tailor resume to the job description</li>
                      <li>Expand on relevant projects and accomplishments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Resources Section */}
          <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Additional Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-100 rounded-lg p-6">
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
                    className="h-12 w-12 text-gray-500 mb-4"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Resume Templates
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Browse our collection of professional resume templates.
                  </p>
                  <a
                    className="text-primary font-medium hover:underline"
                    href="#"
                  >
                    Explore Templates
                  </a>
                </div>

                {/* Repeat similar blocks for other resources */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default ResumeCheck;
