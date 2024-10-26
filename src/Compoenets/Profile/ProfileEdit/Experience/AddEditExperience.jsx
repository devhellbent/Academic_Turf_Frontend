import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import EditExperience from "./EditExperience";

function AddEditExperience() {
  const [JobTitle, setJobTitle] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [experience, setExperience] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const userId = userData.userid;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!JobTitle || !companyname || !startDate || !userId) {
      toast.error("Please fill out all required fields");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${
          process.env.REACT_APP_API_URL || "http://localhost:5000"
        }/api/experience`,
        {
          jobtitle: JobTitle,
          company: companyname,
          startDate,
          endDate,
          description,
          userId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        toast.success("Experience added successfully");
        fetchExperience();
        setDescription("");
        setEndDate("");
        setCompanyname("");
        setStartDate("");
        setJobTitle("");
      } else {
        toast.error("Failed to add Experience");
      }
    } catch (error) {
      console.error("Error adding Experience:", error);
      setError("An error occurred while adding the experience");
      toast.error("An error occurred while adding the Experience");
    } finally {
      setLoading(false);
    }
  };

  const fetchExperience = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/experience/user/${userId}`
      );
      setExperience(response.data || []);
      setLoading(false);
    } catch (err) {
      setError("Error fetching Experience");
      setLoading(false);
    }
  };

  const openEditModal = (experience) => {
    setSelectedExperience(experience);
    setJobTitle(experience.jobtitle);
    setCompanyname(experience.companyname);
    setStartDate(experience.startDate);
    setEndDate(experience.endDate);
    setDescription(experience.description);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (experience) => {
    setSelectedExperience(experience);
    setIsDeleteModalOpen(true);
  };

  const handleEditExperience = async (updatedExperience) => {
    setLoading(true);
    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/experience/${updatedExperience.id}`,
        {
          jobtitle: updatedExperience.jobtitle,
          company: updatedExperience.companyname,
          startDate: updatedExperience.startDate,
          endDate: updatedExperience.endDate,
          description: updatedExperience.description,
          userId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Experience updated successfully");
      setIsEditModalOpen(false);
      fetchExperience();
    } catch (error) {
      toast.error("Error updating experience");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteExperience = async () => {
    setLoading(true);
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/experience/${selectedExperience.id}`
      );
      toast.success("Experience deleted successfully");
      setIsDeleteModalOpen(false);
      fetchExperience();
    } catch (error) {
      toast.error("Error deleting experience");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchExperience();
    } else {
      setLoading(false);
      setError("User not logged in");
    }
  }, [userId]);

  if (loading) return <div>Loading Experience</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-gray-100">
      <div className="w-full max-w-4xl mt-16 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Experience Management</h1>
        <div>
          <h2 className="text-xl text-gray-500 font-bold mb-2">
            Add Experience
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded-lg mb-5 p-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="jobtitle"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Job Title
                </label>
                <input
                  id="jobtitle"
                  type="text"
                  value={JobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  required
                  className="w-full border-gray-300 p-2 border rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500 focus:ring-1"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company
                </label>
                <input
                  id="company"
                  value={companyname}
                  onChange={(e) => setCompanyname(e.target.value)}
                  required
                  type="text"
                  className="w-full border-gray-300 p-2 border rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500 focus:ring-1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label
                  htmlFor="startDate"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Start Date
                </label>
                <input
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500 focus:ring-1"
                />
              </div>
              <div>
                <label
                  htmlFor="endDate"
                  className="block text-gray-700 font-bold mb-2"
                >
                  End Date
                </label>
                <input
                  id="endDate"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500 focus:ring-1"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                className="w-full border-gray-300 p-2 bg-gray-200 rounded-md shadow-sm"
              ></textarea>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                {loading ? "Adding..." : "Add Experience"}
              </button>
            </div>
          </form>
        </div>
        {experience.length > 0 ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Experiences</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {experience.map((exp) => (
                <div key={exp.id} className="bg-white shadow rounded-lg p-4">
                  <h3 className="text-lg font-bold mb-2">{exp.jobtitle}</h3>
                  <p className="text-gray-500 mb-2">{exp.company}</p>
                  <p className="text-gray-500 mb-2">
                    {exp.startDate} - {exp.endDate}
                  </p>
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  <div className="flex justify-end">
                    <button
                      onClick={() => openEditModal(exp)}
                      className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => openDeleteModal(exp)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>No experiences found.</p>
        )}
        {/* Edit Experience Modal */}
        {isEditModalOpen && (
          <EditExperience
            experience={selectedExperience}
            onSave={handleEditExperience}
            onCancel={() => setIsEditModalOpen(false)}
          />
        )}

        {/* Delete Confirmation Modal */}
        {isDeleteModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">Confirm Delete</h2>
              <p>Are you sure you want to delete this experience?</p>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setIsDeleteModalOpen(false)}
                  className=" bg-gray-300 px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteExperience}
                  className="bg-red-500 text-white px-4 py-2 rounded-md "
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddEditExperience;
