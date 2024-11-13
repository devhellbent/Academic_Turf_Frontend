"use client";

import { useState, useEffect, useRef } from "react";
import skillsList from "../../JsonData/SkillsList.json";
import countriesData from "../../JsonData/countries.json";
import UserProfile from "../Profile/UserProfile/UserProfile";
import { useNavigate } from "react-router-dom";

export default function Component() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [requirementType, setRequirementType] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const requirementOptions = [
    { value: "assignment-help", label: "Assignment Help" },
    { value: "accommodation", label: "Accommodation" },
    { value: "internship", label: "Internship" },
    { value: "job", label: "Job" },
    { value: "job-support", label: "Job Support (Resume/CV)" },
    { value: "tutoring", label: "Tutoring" },
    { value: "visa-assistance", label: "Visa Assistance" },
  ];

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [selectedSkills, selectedCountry, requirementType]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/users`
      );
      const data = await response.json();
      setUsers(data);
      setFilteredUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleRequirementDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearch = () => {
    const filtered = users.filter((user) => {
      const matchesSkills =
        selectedSkills.length === 0 ||
        selectedSkills.every(
          (skill) =>
            user.skills &&
            user.skills.some(
              (userSkill) =>
                userSkill.name.toLowerCase() === skill.toLowerCase()
            )
        );
      const matchesCountry = selectedCountry
        ? user.location &&
          user.location.toLowerCase() === selectedCountry.toLowerCase()
        : true;
      const matchesRequirement = requirementType
        ? user.requirementType === requirementType
        : true;

      return matchesSkills && matchesCountry && matchesRequirement;
    });
    setFilteredUsers(filtered);
  };

  const handleOptionSelect = (value) => {
    setRequirementType(value);
    setDropdownOpen(false);
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

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleSkillSelect = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleSkillRemove = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  const handleResetFilters = () => {
    setSelectedSkills([]);
    setSelectedCountry("");
    setRequirementType("");
  };

  const StarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const MapPinIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  );

  const DollarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
        clipRule="evenodd"
      />
    </svg>
  );

  const BriefcaseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
    </svg>
  );

  const Autocomplete = ({ items, placeholder, onSelect, initialValue }) => {
    const [inputValue, setInputValue] = useState(initialValue || "");
    const [filteredItems, setFilteredItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [wrapperRef]);

    const handleInputChange = (e) => {
      const value = e.target.value;
      setInputValue(value);
      setFilteredItems(
        items.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        )
      );
      setIsOpen(true);
    };

    const handleSelectItem = (item) => {
      setInputValue(item.name);
      onSelect(item.name);
      setIsOpen(false);
    };

    useEffect(() => {
      if (items.some((item) => item.name === inputValue)) {
        setIsOpen(false);
      }
    }, [inputValue, items]);

    return (
      <div ref={wrapperRef} className="relative">
        <input
          type="text"
          className="w-full p-2 border bg-gray-200 rounded"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
        />
        {isOpen && filteredItems.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border rounded mt-1 max-h-60 overflow-auto">
            {filteredItems.map((item) => (
              <li
                key={item.id}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectItem(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDrawerOpen) {
        const drawer = document.getElementById("user-profile-drawer");
        if (drawer && !drawer.contains(event.target)) {
          closeDrawer();
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDrawerOpen]);

  return (
    <div className="lg:mt-16 mt-[60px] bg-gray-100 min-h-screen">
      <div className="max-w-9xl mx-auto lg:p-4 p-2 py-4">
        <div className="flex flex-col lg:flex-row ">
          {/* Filter sidebar */}
          <div className="lg:w-1/4 bg-white p-4 lg:min-h-screen rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div className="">
              <h3 className="font-medium mb-1 ">Skills</h3>
              <Autocomplete
                items={skillsList}
                placeholder="Search skills..."
                onSelect={handleSkillSelect}
              />
              <div className="mt-2 flex flex-wrap gap-2">
                {selectedSkills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center"
                  >
                    {skill}
                    <button
                      onClick={() => handleSkillRemove(skill)}
                      className="ml-1 text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-medium mb-1">Country</h3>
              <Autocomplete
                items={countriesData}
                placeholder="Search Country..."
                initialValue={selectedCountry}
                onSelect={(country) => setSelectedCountry(country)}
              />
            </div>
            {/* <div className="mb-4">
              <h3 className="font-medium mb-2">Requirement Type</h3>
              <select
                className="w-full p-2 border bg-gray-200 rounded"
                value={requirementType}
                onChange={(e) => setRequirementType(e.target.value)}
              >
                <option value="">Select a requirement</option>
                {requirementOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div> */}
            <button
              className="w-full bg-[#9333ea] text-white p-2 rounded  hover:bg-[#782dbf]"
              onClick={handleResetFilters}
            >
              Reset Filters
            </button>
          </div>

          {/* User cards */}
          <div className="lg:w-3/4 min-h-screen overflow-y-auto overflow-x-hidden max-h-screen">
            <h1 className="text-3xl mt-1 font-bold text-primary mb-5 ml-3">
              Find Service Provider
            </h1>
            {filteredUsers.length === 0 ? (
              <div className="text-center text-gray-600 font-medium">
                No users found matching your criteria.
              </div>
            ) : (
              <div className="grid grid-cols-1 p-3 pt-0 gap-3">
                {filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    className="bg-white rounded-xl shadow-md cursor-pointer overflow-hidden transition-all  hover:shadow-sm   "
                    onClick={() => handleUserCardClick(user)}
                  >
                    <div className="p-6">
                      <div className="flex justify-between">
                        <div className="flex items-center space-x-4">
                          <img
                            src={user.profilePicture}
                            alt={`${user.name}'s profile`}
                            className="w-20 h-20 rounded-full object-cover border-2 border-[#9333ea]"
                          />
                          <div className="flex justify-center items-start ">
                            <div className="">
                              <h2 className="text-xl font-bold text-gray-800">
                                {user.name}
                              </h2>
                              <p className="text-[#9333ea] font-medium">
                                {user.designation}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start justify-end ">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`${
                                i < 4 ? "text-yellow-400" : "text-[#9333ea]"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm mt-2">
                        I'm the model of the new CMO. I've combined a deep
                        background in brand management at blue chip.
                      </p>
                      <div className="mt-4">
                        <div className="flex flex-wrap gap-2">
                          {(user.skills || []).map((skill) => (
                            <span
                              key={skill.id}
                              className="bg-[#dfc9f4] text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full"
                            >
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center space-x-1 text-gray-600">
                          <MapPinIcon />
                          <span>{user.location}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="currentColor"
                            className="bi bi-envelope-at-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                          </svg>
                          <span>{user.email}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <DollarIcon />
                          <span>Hourly rate not available</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <BriefcaseIcon />
                          <span>{user.experienceYears} years</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* User Profile Drawer */}
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
              <button
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
              </button>
            </div>
            <UserProfile selectedUser={selectedUser} userId={selectedUser.id} />
          </div>
        )}
      </div>
    </div>
  );
}
