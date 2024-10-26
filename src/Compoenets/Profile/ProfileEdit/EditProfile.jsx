import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function EditProfile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    profilePicture: "",
    location: "",
    phoneNumber: "",
    designation: "",
    experienceYears: "",
  });
  const [loading, setLoading] = useState(false); // Loading state

  const [profilePictureFile, setProfilePictureFile] = useState(null);

  const getUserIdFromLocalStorage = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    return userData?.userid;
  };

  const fetchProfile = async (userId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/users/${userId}/profile`
      );
      setProfile(response.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    const userId = getUserIdFromLocalStorage();
    if (userId) {
      fetchProfile(userId);
    } else {
      console.error("User ID not found in localStorage");
    }
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    setProfilePictureFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true
    const userId = getUserIdFromLocalStorage();

    if (userId) {
      try {
        const formData = new FormData();
        formData.append("name", profile.name);
        formData.append("email", profile.email);
        formData.append("location", profile.location);
        formData.append("phoneNumber", profile.phoneNumber);
        formData.append("designation", profile.designation);
        formData.append("experienceYears", profile.experienceYears);

        if (profilePictureFile) {
          formData.append("profilePicture", profilePictureFile);
        }

        const response = await axios.put(
          `${process.env.REACT_APP_API_URL}/api/users/${userId}/profile`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        if (response.status === 200) {
          setProfile({
            ...profile,
            ...response.data.updatedUser,
          });
          toast.success("Profile updated successfully!");
        }
      } catch (error) {
        console.error("Error updating profile:", error);
        alert("Failed to update profile.");
      } finally {
        setLoading(false); // Set loading to false when the update completes
      }
    } else {
      console.error("User ID not found for updating profile");
      alert("User ID is missing.");
      setLoading(false); // Ensure loading is false if user ID is not found
    }
  };
  return (
    <div>
      <div className="flex flex-col min-h-screen bg-gray-100 mt-[60px] text-foreground">
        <main className="flex-1 py-8 sm:py-12">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-8">
                <div className="rounded-lg border bg-white shadow text-card-foreground">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                      Profile
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Update your profile information.
                    </p>
                  </div>
                  <div className="p-6 grid gap-6">
                    <div className="grid gap-2">
                      <label className="text-sm font-medium" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="input"
                        id="name"
                        value={profile.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-sm font-medium" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="input"
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        className="text-sm font-medium"
                        htmlFor="profilePicture"
                      >
                        Profile Picture
                      </label>
                      <div className="flex items-center gap-4">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16">
                          <img
                            className="aspect-square h-full w-full"
                            alt="Profile"
                            src={
                              profile.profilePicture ||
                              "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                            }
                          />
                        </span>
                        <input
                          className="input"
                          id="profilePicture"
                          type="file"
                          onChange={handleFileChange} // Handle file input
                          accept="image/*" // Restrict to image files
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="rounded-lg border bg-white text-gray-600 shadow">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="whitespace-nowrap text-2xl font-semibold">
                      Contact
                    </h3>
                    <p className="text-sm">Update your contact information.</p>
                  </div>
                  <div className="p-6 grid gap-6">
                    <div className="grid gap-2">
                      <label className="text-sm font-medium" htmlFor="location">
                        Location
                      </label>
                      <input
                        className="input"
                        id="location"
                        value={profile.location}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        className="text-sm font-medium"
                        htmlFor="phoneNumber"
                      >
                        Phone Number
                      </label>
                      <input
                        className="input"
                        id="phoneNumber"
                        value={profile.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Activity Section */}
                <div className="rounded-lg border bg-white text-card-foreground shadow">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="whitespace-nowrap text-2xl font-semibold">
                      Activity
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Update your activity information.
                    </p>
                  </div>
                  <div className="p-6 grid gap-6">
                    <div className="grid gap-2">
                      <label
                        className="text-sm font-medium"
                        htmlFor="designation"
                      >
                        Designation
                      </label>
                      <input
                        className="input"
                        id="designation" // Updated ID here
                        value={profile.designation}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="grid gap-2">
                      <label
                        className="text-sm font-medium"
                        htmlFor="experienceYears"
                      >
                        Experience (years)
                      </label>
                      <input
                        className="input"
                        id="experienceYears"
                        type="number"
                        value={profile.experienceYears}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end items-center gap-3">
                  <button
                    type="button"
                    className="p-2 px-4 hover:bg-gray-200 rounded-md bg-white shadow"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="p-2 px-4 hover:bg-gray-800 rounded-md bg-black text-white font-semibold shadow"
                    disabled={loading} // Disable the button while loading
                  >
                    {loading ? (
                      <span className="flex text-white items-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          stroke="currentColor"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="white"
                          />
                          <path
                            className="opacity-75"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            fill="white"
                          />
                        </svg>
                        Saving...
                      </span>
                    ) : (
                      "Save Changes"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default EditProfile;
