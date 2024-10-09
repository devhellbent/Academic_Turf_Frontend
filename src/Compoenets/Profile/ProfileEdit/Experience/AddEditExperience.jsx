import React from "react";

function AddEditExperience() {
  return (
    <div className="bg-gray-100">
      <div class="w-full max-w-4xl  mt-[60px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 class="text-3xl font-bold mb-8">Experience Management</h1>
        <div class="">
          <div>
            <h2 class="text-xl text-gray-500 font-bold mb-2">Add Experience</h2>
            <div class="bg-white shadow rounded-lg mb-5 p-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="title" class="block text-gray-700 font-bold mb-2">
                    Job Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    class="w-full border-gray-300 p-2 border rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500 focus:ring-1"
                  />
                </div>
                <div>
                  <label
                    for="company"
                    class="block text-gray-700 font-bold mb-2"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    class="w-full border-gray-300 p-2 border  rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500 focus:ring-1"
                  />
                </div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label
                    for="startDate"
                    class="block text-gray-700 font-bold mb-2"
                  >
                    Start Date
                  </label>
                  <input
                    id="startDate"
                    type="date"
                    class="w-full p-2 border  border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500 focus:ring-1"
                  />
                </div>
                <div>
                  <label
                    for="endDate"
                    class="block text-gray-700 font-bold mb-2"
                  >
                    End Date
                  </label>
                  <input
                    id="endDate"
                    type="date"
                    class="w-full p-2 border  border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500 focus:ring-1"
                  />
                </div>
              </div>
              <div class="mt-4">
                <label
                  for="description"
                  class="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows="4"
                  class="w-full border-gray-300 p-2  bg-gray-200 rounded-md shadow-sm  "
                ></textarea>
              </div>
              <div class="flex justify-end mt-4">
                <button class="bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors duration-300">
                  Add Experience
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-bold mb-4">Your Experiences</h2>
          <div class=" grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="bg-white shadow rounded-lg  p-4 transition-transform duration-300 ease-in-out hover:scale-105">
              <h3 class="text-lg font-bold mb-2">Software Engineer</h3>
              <p class="text-gray-500 mb-2">Acme Inc.</p>
              <p class="text-gray-500 mb-2">2020-01-01 - 2022-12-31</p>
              <p class="text-gray-700 mb-4">
                Developed and maintained web applications using React and
                Node.js.
              </p>
              <div class="flex justify-end">
                <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 transition-colors duration-300">
                  Edit
                </button>
                <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
                  Delete
                </button>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow p-4 transition-transform duration-300 ease-in-out hover:scale-105">
              <h3 class="text-lg font-bold mb-2">UI Designer</h3>
              <p class="text-gray-500 mb-2">Globex Corp.</p>
              <p class="text-gray-500 mb-2">2018-06-01 - 2020-01-01</p>
              <p class="text-gray-700 mb-4">
                Designed user interfaces and prototypes for mobile and web
                applications.
              </p>
              <div class="flex justify-end">
                <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 transition-colors duration-300">
                  Edit
                </button>
                <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
                  Delete
                </button>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow p-4 transition-transform duration-300 ease-in-out hover:scale-105">
              <h3 class="text-lg font-bold mb-2">UI Designer</h3>
              <p class="text-gray-500 mb-2">Globex Corp.</p>
              <p class="text-gray-500 mb-2">2018-06-01 - 2020-01-01</p>
              <p class="text-gray-700 mb-4">
                Designed user interfaces and prototypes for mobile and web
                applications.
              </p>
              <div class="flex justify-end">
                <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 transition-colors duration-300">
                  Edit
                </button>
                <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
                  Delete
                </button>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow p-4 transition-transform duration-300 ease-in-out hover:scale-105">
              <h3 class="text-lg font-bold mb-2">Marketing Coordinator</h3>
              <p class="text-gray-500 mb-2">Stark Industries</p>
              <p class="text-gray-500 mb-2">2016-09-01 - 2018-05-31</p>
              <p class="text-gray-700 mb-4">
                Assisted with content creation, social media management, and
                event planning.
              </p>
              <div class="flex justify-end">
                <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 transition-colors duration-300">
                  Edit
                </button>
                <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEditExperience;
