import React, { useState, useEffect } from "react";
import axios from "axios";
import skillsList from "../../../../JsonData/SkillsList.json";
import toast from "react-hot-toast";
function AddEditSkill({ userId }) {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [skillSearch, setSkillSearch] = useState("");
  const [showSkillDropdown, setShowSkillDropdown] = useState(false);

  const getUserIdFromLocalStorage = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const userId = userData?.userid;
    return userId;
  };

  // Function to fetch user skills from the API
  const fetchUserSkills = async (userId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/users/${userId}/skills`
      );
      setSelectedSkills(response.data.skills || []);
    } catch (error) {
      toast.error("Error fetching user skills", error);
    }
  };

  useEffect(() => {
    const userId = getUserIdFromLocalStorage();
    if (userId) {
      fetchUserSkills(userId);
    } else {
      console.error("User ID not found in localStorage");
    }
  }, []);

  const filteredSkills = skillsList.filter((skill) =>
    skill.name.toLowerCase().includes(skillSearch.toLowerCase())
  );

  // Add a skill to the selected skills list
  const handleAddSkill = (skill) => {
    if (!selectedSkills.some((s) => s.id === skill.id)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
    setSkillSearch(""); // Clear search after selection
    setShowSkillDropdown(false); // Close dropdown
  };

  // Handle adding a custom skill
  const handleAddCustomSkill = () => {
    const newSkill = {
      id: Date.now(), // Create a temporary ID
      name: skillSearch,
    };
    setSelectedSkills([...selectedSkills, newSkill]);
    setSkillSearch(""); // Clear search input
    setShowSkillDropdown(false); // Close dropdown
  };

  // Remove a skill from the selected skills list
  const handleRemoveSkill = (skillId) => {
    const updatedSkills = selectedSkills.filter(
      (skill) => skill.id !== skillId
    );
    setSelectedSkills(updatedSkills);
  };

  // Handle Save Changes (API call to update skills)
  const handleSaveSkills = async () => {
    try {
      // Fetch the userId from localStorage
      const userId = getUserIdFromLocalStorage();

      // Ensure userId is defined and valid
      if (!userId) {
        toast.error("User ID is missing.");
        return;
      }

      const skillsToUpdate = selectedSkills.map((skill) => ({
        id: skill.id,
        name: skill.name,
      }));

      // Send PUT request to the backend API
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/users/${userId}/skills`,
        {
          skills: skillsToUpdate,
        }
      );

      toast.success("Skills updated successfully!");
    } catch (error) {
      console.error("Error updating skills", error);
      toast.error("Failed to update skills");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="mt-[60px] pt-20 px-20 container mx-auto">
        <p className="p-2 font-bold text-xl">Add or Remove Skills</p>
        {/* Card displaying selected skills */}
        {selectedSkills.length > 0 && (
          <div className="bg-white shadow rounded-lg p-4 mb-6">
            <h3 className="text-md font-semibold mb-4">Selected Skills</h3>
            <div className="flex flex-wrap gap-2">
              {selectedSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-blue-100 text-xs px-2 py-1 rounded-md border flex items-center gap-2"
                >
                  {skill.name}
                  <button
                    className="text-red-500"
                    onClick={() => handleRemoveSkill(skill.id)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add skill input */}
        <label className="text-md font-semibold px-2 leading-none">
          Add Skills
        </label>
        <div className="relative flex flex-col gap-1 shadow bg-white border px-3 py-2 rounded-md">
          <input
            type="text"
            className="text-sm bg-background border-0 p-2 rounded focus:ring-0 outline-none w-full"
            placeholder="Enter your skills"
            value={skillSearch}
            onChange={(e) => setSkillSearch(e.target.value)}
            onFocus={() => setShowSkillDropdown(true)}
          />

          {/* Skill Dropdown */}
        </div>
        <div className="" style={{ marginRight: "40px" }}>
          {showSkillDropdown && skillSearch && (
            <ul className="absolute w-[100vh] bg-white shadow  border rounded-md max-h-40 overflow-auto mt-1 z-10">
              {filteredSkills.length > 0 ? (
                filteredSkills.map((skill) => (
                  <li
                    key={skill.id}
                    className="p-2 ml-1 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleAddSkill(skill)}
                  >
                    {skill.name}
                  </li>
                ))
              ) : (
                <>
                  <li className="p-2 text-gray-500">No results found</li>
                  <li
                    className="p-2 text-blue-500 cursor-pointer hover:bg-gray-200"
                    onClick={handleAddCustomSkill}
                  >
                    Add "{skillSearch}" as a new skill
                  </li>
                </>
              )}
            </ul>
          )}
        </div>
        <div className="flex mt-5 justify-end items-center gap-3">
          <button className="p-2 px-4 hover:bg-gray-200 rounded-md bg-white shadow">
            Cancel
          </button>
          <button
            className="p-2 px-4 hover:bg-gray-800 rounded-md bg-black text-white font-semibold shadow"
            onClick={handleSaveSkills}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEditSkill;
