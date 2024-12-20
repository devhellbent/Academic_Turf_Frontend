import React, { useEffect, useRef, useState } from "react";
import phoneNumberList from "../../JsonData/PhoneNumberList.json";
import skillsList from "../../JsonData/SkillsList.json";
import languagesData from "../../JsonData/Language.json";
import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import toast from "react-hot-toast";

function PostRequirement() {
  const [location, setLocation] = useState('');
  const [locationError, setLocationError] = useState('');
  const [selectedCountry, setSelectedCountry] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [requirementType, setRequirementType] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [skillSearch, setSkillSearch] = useState("");
  const [showSkillDropdown, setShowSkillDropdown] = useState(false);
  const [isOpengender, setIsOpengender] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  const [languages, setLanguages] = useState([]);
  const [filteredLanguages, setFilteredLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("Select currency");
  const [requirementDescription, setRequirementDescription] = useState("");
  const [meetingPreference, setMeetingPreference] = useState("");
  const [budget, setBudget] = useState("");
  const [file, setFile] = useState(null);
  const dropdownRef = useRef(null);
  const searchBoxRef = useRef(null);

  useEffect(() => {
    setLanguages(languagesData.languages);
    setFilteredLanguages(languagesData.languages);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredCountries = phoneNumberList.filter((country) =>
    country.label.toLowerCase().includes(searchCountry.toLowerCase())
  );

  const filteredSkills = skillsList.filter((skill) =>
    skill.name.toLowerCase().includes(skillSearch.toLowerCase())
  );

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setIsDropdownOpen(true);
    const filtered = languages.filter((language) =>
      language.toLowerCase().includes(query)
    );
    setFilteredLanguages(filtered);
  };

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    setSearchQuery(language);
    setIsDropdownOpen(false);
  };

  const handleToggle = () => {
    setIsOpengender(!isOpengender);
  };

  const handleSelect = (value) => {
    setSelectedGender(value);
    setIsOpengender(false);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSearchCountry(country.label);
    setShowCountryDropdown(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleAddSkill = (skill) => {
    if (!selectedSkills.some((s) => s.id === skill.id)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
    setSkillSearch("");
    setShowSkillDropdown(false);
  };

  const handleRemoveSkill = (skillId) => {
    const updatedSkills = selectedSkills.filter(
      (skill) => skill.id !== skillId
    );
    setSelectedSkills(updatedSkills);
  };

  const handleRequirementDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionSelect = (value) => {
    setRequirementType(value);
    setDropdownOpen(false);
  };

  const handleLoad = (ref) => {
    searchBoxRef.current = ref;
  };

  const handlePlacesChanged = () => {
    const places = searchBoxRef.current.getPlaces();
    if (places.length === 0) {
      setLocationError("No places found");
      return;
    }
    const place = places[0];
    if (!place.formatted_address) {
      setLocationError("No address available for the selected place");
      return;
    }
    setLocation(place.formatted_address);
    setLocationError("");
  
    const addressComponents = place.address_components;
    let country = "";
    for (let component of addressComponents) {
      if (component.types.includes("country")) {
        country = component.long_name;
        break;
      }
    }
  
    if (country) {
      const matchedCountry = phoneNumberList.find(
        (c) => c.label.toLowerCase() === country.toLowerCase()
      );
  
      if (matchedCountry) {
        setSelectedCountry(matchedCountry);
        setSearchCountry(matchedCountry.label);
      } else {
        console.warn(`Country "${country}" not found in phoneNumberList`);
      }
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const userId = userData.userid;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('location', location);
    formData.append('phoneNumber', phoneNumber);
    formData.append('lookingFor', requirementType);
    formData.append('skills', JSON.stringify(selectedSkills.map(skill => skill.name)));
    formData.append('requirementDescription', requirementDescription);
    formData.append('meetingPreference', meetingPreference);
    formData.append('budget', budget);
    formData.append('currency', selectedCurrency);
    formData.append('preferredGender', selectedGender);
    formData.append('language', selectedLanguage);
    formData.append('userId', userId);
    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/post`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Post requirement created:', result);
        toast.success('Post requirement created Successfully');
        // Handle success (e.g., show a success message, reset form)
      } else {
        console.error('Failed to create post requirement');
        toast.error('Failed to create post requirement');
        // Handle error (e.g., show error message)
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form:', error);
      // Handle error (e.g., show error message)
    }
  };

  const requirementOptions = [
    { value: "assignment-help", label: "Assignment Help" },
    { value: "accommodation", label: "Accommodation" },
    { value: "internship", label: "Internship" },
    { value: "job", label: "Job" },
    { value: "job-support", label: "Job Support (Resume/CV)" },
    { value: "tutoring", label: "Tutoring" },
    { value: "visa-assistance", label: "Visa Assistance" },
  ];

  return (
    <div className="bg-gray-200 mt-[60px] w-full">
      <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl font-bold mb-6">Post a Requirement</h1>
        <form onSubmit={handleSubmit} className="grid gap-6">
          {/* Location */}
          <div>
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="location"
            >
              Location
            </label>
            <div className="below-input-gray-text">
              Enter your locality details here. Note: Please do not put exact
              address here
            </div>
            <LoadScript
              googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
              libraries={["places"]}
            >
            <StandaloneSearchBox
              onLoad={handleLoad}
              onPlacesChanged={handlePlacesChanged}
            >
            <input
              className="flex h-10 w-full shadow rounded-md border px-3 py-2 text-sm"
              id="name"
              placeholder="Enter your Location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            </StandaloneSearchBox>
            </LoadScript>
            {locationError && (
              <p className="text-red-500 text-sm mt-2">{locationError}</p>
            )}
          </div>

          {/* Country Selector */}
          <div className="flex items-center gap-3 w-full">
            <div className="w-[180px]">
              <label className="text-sm text-nowrap font-medium leading-none">
                Country
              </label>
              <input
                type="text"
                placeholder="Search country"
                value={searchCountry}
                onChange={(e) => setSearchCountry(e.target.value)}
                onFocus={() => setShowCountryDropdown(true)}
                className="flex h-10 w-full shadow rounded-md border px-3 py-2 text-sm"
              />
              {showCountryDropdown && searchCountry && (
                <div className="absolute w-full shadow bg-white border rounded-md max-h-40 overflow-auto mt-1 z-10">
                  {filteredCountries.length > 0 ? (
                    filteredCountries.map((country) => (
                      <li
                        key={country.countryCode}
                        onClick={() => handleCountrySelect(country)}
                        className="p-2 hover:bg-gray-200 cursor-pointer"
                      >
                        {country.label} ({country.code})
                      </li>
                    ))
                  ) : (
                    <li className="p-2 text-gray-500">No results found</li>
                  )}
                </div>
              )}
            </div>

            <div className="w-full">
              <label className="text-sm font-medium leading-none">
                Phone Number
              </label>
              <div className="flex">
                <input
                  type="text"
                  readOnly
                  value={selectedCountry ? selectedCountry.code : ""}
                  className="w-16 text-center shadow rounded-l-md border px-3 py-2 text-sm bg-gray-100"
                />
                <input
                  className="flex h-10 w-full shadow rounded-r-md border px-3 py-2 text-sm"
                  id="phone"
                  placeholder="Enter phone number"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  maxLength={selectedCountry ? selectedCountry.maxLength : ""}
                />
              </div>
            </div>
          </div>

          {/* Requirement Type */}
          <div>
            <label className="text-xs font-medium leading-none">
              I'm Looking For
            </label>
            <button
              type="button"
              className="flex h-10 w-full shadow items-center justify-between rounded-md border bg-white px-3 py-2 text-sm"
              onClick={handleRequirementDropdownToggle}
            >
              <span>
                {requirementType ? requirementType : "Select requirement type"}
              </span>
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
                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>

            {/* Dropdown options */}
            {dropdownOpen && (
              <ul className="mt-1 max-h-40 w-full bg-white shadow border rounded-md overflow-auto">
                {requirementOptions.map((option) => (
                  <li
                    key={option.value}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleOptionSelect(option.label)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Skills Selector */}
          <div>
            <label className="text-sm font-medium leading-none">Skills</label>
            <div className="flex flex-wrap items-center gap-1 shadow bg-white border px-3 p-1 rounded-md">
              {/* Display selected skills */}
              {selectedSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-blue-100 text-xs px-2 py-1 rounded-md border flex items-center gap-2"
                >
                  {skill.name}        
                  <button
                    type="button"
                    className="text-red-500"
                    onClick={() => handleRemoveSkill(skill.id)}
                  >
                    ✕
                  </button>
                </div>
              ))}

              {/* Input for searching skills */}
              <input
                type="text"
                className="flex-grow text-sm bg-background border-0 p-2 rounded focus:ring-0 outline-none"
                placeholder="Enter your skills"
                value={skillSearch}
                onChange={(e) => setSkillSearch(e.target.value)}
                onFocus={() => setShowSkillDropdown(true)}
              />
            </div>

            {/* Skill Dropdown */}
            {showSkillDropdown && skillSearch && (
              <ul className="absolute w-full bg-white shadow border rounded-md max-h-40 overflow-auto mt-1 z-10">
                {filteredSkills.length > 0  ? (
                  filteredSkills.map((skill) => (
                    <li
                      key={skill.id}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleAddSkill(skill)}
                    >
                      {skill.name}
                    </li>
                  ))
                ) : (
                  <li className="p-2 text-gray-500">No results found</li>
                )}
              </ul>
            )}
          </div>

          <div>
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="requirement-description"
            >
              Requirement Description
            </label>
            <textarea
              className="flex min-h-[80px] shadow rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
              id="requirement-description"
              rows="4"
              placeholder="Describe your requirement"
              value={requirementDescription}
              onChange={(e) => setRequirementDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="meeting-preference"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Meeting Preference
            </label>
            <div className="flex items-center gap-4">
              <select
                id="meeting-preference"
                name="meeting-preference"
                className="w-full h-10 rounded px-3 shadow border border-primary bg-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
                value={meetingPreference}
                onChange={(e) => setMeetingPreference(e.target.value)}
              >
                <option value="" disabled>
                  Select a meeting preference
                </option>
                <option value="zoom">Zoom</option>
                <option value="google-meet">Google Meet</option>
                <option value="in-person">In-Person</option>
              </select>
            </div>
          </div>

          <div>
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="budget"
            >
              Budget
            </label>
            <div className="flex items-center justify-between gap-2 w-full">
              <input
                className="flex h-10 shadow rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                id="budget"
                placeholder="0"
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
              <div className="relative w-full " ref={dropdownRef}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 shadow bg-white px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onClick={toggleDropdown}
                >
                  <span>{selectedCurrency}</span>
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
                    className="h-4 w-4 opacity-50"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>

                {/* Custom Dropdown Options */}
                {isOpen && (
                  <ul
                    className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1 text-sm"
                    role="listbox"
                  >
                    {["USD", "EUR", "GBP", "INR", "CAD"].map((currency) => (
                      <li
                        key={currency}
                        className="cursor-pointer px-3 py-2 hover:bg-blue-100"
                        role="option"
                        onClick={() => selectCurrency(currency)}
                      >
                        {currency}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div>
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="preferred-gender"
            >
              Preferred Gender
            </label>
            <button
              type="button"
              role="combobox"
              aria-expanded={isOpengender}
              aria-controls="gender-select"
              onClick={handleToggle}
              className="flex h-10 z-50 w-full items-center justify-between rounded-md border border-input bg-white shadow px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span>{selectedGender || "Select preferred gender"}</span>
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
                className={`lucide lucide-chevron-down h-4 w-4 opacity-50 ${
                  isOpengender ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>

            {isOpengender && (
              <ul
                id="gender-select"
                className="absolute mt-2 z-50 w-full bg-white border border-gray-200 rounded-md shadow-md"
              >
                <li
                  onClick={() => handleSelect("Male")}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  Male
                </li>
                <li
                  onClick={() => handleSelect("Female")}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  Female
                </li>
                <li
                  onClick={() => handleSelect("Any")}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  Any
                </li>
              </ul>
            )}

            {/* Hidden select element for form submission if needed */}
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              aria-hidden="true"
              tabIndex="-1"
              style={{
                position: "absolute",
                border: "0px",
                width: "1px",
                height: "1px",
                padding: "0px",
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0px, 0px, 0px, 0px)",
                whiteSpace: "nowrap",
                overflowWrap: "normal",
              }}
            >
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="any">Any</option>
            </select>
          </div>
          <div className="relative w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="language"
            >
              Language Communication
            </label>

            {/* Search input that also serves as the dropdown selector */}
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search or select your preferred language"
              className="flex h-10 rounded-md shadow border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
              onFocus={() => setIsDropdownOpen(true)}
              onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
            />

            {/* Autocomplete dropdown */}
            {isDropdownOpen && filteredLanguages.length > 0 && (
              <ul className="absolute w-full mt-1 max-h-40 overflow-y-auto rounded-md border border-input bg-white shadow-lg z-10">
                {filteredLanguages.map((language, index) => (
                  <li
                    key={index}
                    className="cursor-pointer px-3 py-2 hover:bg-gray-100 text-sm"
                    onMouseDown={() => handleSelectLanguage(language)}
                  >
                    {language}
                  </li>
                ))}
              </ul>
            )}

            {/* Show this when no languages match the search */}
            {isDropdownOpen && filteredLanguages.length === 0 && (
              <ul className="absolute w-full mt-1 rounded-md border border-input bg-white shadow-lg z-10">
                <li className="px-3 py-2 text-sm text-muted-foreground">
                  No languages found
                </li>
              </ul>
            )}
          </div>
          <div>
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="file-upload"
            >
              File Upload
            </label>

            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
              </label>
            </div>
            <div>
              <button type="submit" className="bg-black w-full mt-6 shadow rounded p-2 text-white">
                Create Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostRequirement;                              