import React, { useEffect, useState } from "react";
import axios from "axios"; // Make sure to import axios
import toast from "react-hot-toast"; // Make sure to import toast if you're using it

function Skills() {
  const [selectedSkills, setSelectedSkills] = useState([]); // State to hold the user's skills

  const getUserIdFromLocalStorage = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    return userData?.userid; // Return userId directly
  };
  const getSkillBackgroundColor = (index) => {
    return skillColors[index % skillColors.length]; // Cycle through the colors
  };

  // Function to fetch user skills from the API
  const fetchUserSkills = async (userId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/users/${userId}/skills`
      );
      setSelectedSkills(response.data.skills || []); // Update state with fetched skills
    } catch (error) {
      toast.error("Error fetching user skills");
      console.error(error); // Log the error for debugging
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
  const skillColors = [
    "bg-blue-200", // Light blue
    "bg-green-200", // Light green
    "bg-red-200", // Light red
    "bg-yellow-200", // Light yellow
    "bg-purple-200", // Light purple
    "bg-pink-200", // Light pink
    "bg-indigo-200", // Light indigo
    "bg-teal-200", // Light teal
    "bg-gray-200", // Light gray
    "bg-orange-200", // Light orange
    "bg-rose-200", // Light rose
    "bg-emerald-200", // Light emerald
    "bg-cyan-200", // Light cyan
    "bg-lime-200", // Light lime
    "bg-violet-200", // Light violet
    "bg-fuchsia-200", // Light fuchsia
    "bg-sky-200", // Light sky
    "bg-amber-200", // Light amber
    "bg-rose-300", // Slightly darker rose
    "bg-blueGray-200", // Light blue-gray
    "bg-stone-200", // Light stone
  ];

  return (
    <div>
      <div>
        <div className="flex flex-wrap gap-3">
          {selectedSkills.length > 0 ? (
            selectedSkills.map((skill, index) => (
              <div
                key={skill.id} // Use skill.id as the key
                className={`px-2 py-1 text-center rounded-full text-xs  text-gray-500 font-bold ${getSkillBackgroundColor(
                  index
                )}`} // Use index to get color
              >
                {skill.name} {/* Render the skill name here */}
              </div>
            ))
          ) : (
            <div className="text-gray-500">No skills available</div>
          )}
        </div>
      </div>
    </div>
  );
}

// Function to get background color based on skill type
const getSkillBackgroundColor = (skill) => {
  switch (skill) {
    case "JavaScript":
      return "bg-[#ff8b8b]";
    case "React":
      return "bg-[#ffb840]";
    case "Node.js":
      return "bg-[#40c68a]";
    case "CSS":
      return "bg-[#ab7ac5]";
    default:
      return "bg-gray-500"; // Default color for unknown skills
  }
};

export default Skills;
