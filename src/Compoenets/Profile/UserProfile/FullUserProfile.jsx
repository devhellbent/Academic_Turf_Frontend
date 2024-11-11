import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

function FullUserProfile() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [experience, setExperience] = useState([]);
  const location = useLocation();

  // Extract the userId from the URL search parameters
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("userId");
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    profilePicture: "",
    location: "",
    phoneNumber: "",
    designation: "",
    experienceYears: "",
  });
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
    if (userId) {
      fetchProfile(userId); // Fetch profile using the correct userId
    } else {
      console.error("User ID not found in localStorage");
    }
  }, []);
  const fetchCertificates = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/certificates/user/${userId}`
      );
      if (response.status === 200) {
        setCertificates(response.data || []); // Ensure default value is an empty array
      } else {
        setError(`Error fetching certificates: ${response.status}`);
      }
    } catch (err) {
      console.error(err.response ? err.response.data : err.message); // Log the error response if available
      setError("Error fetching certificates");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (userId) {
      fetchCertificates();
    }
  }, [userId]);

  const fetchExperience = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/experience/user/${userId}`
      );
      setExperience(response.data || []);
    } catch (err) {
      toast.error("Error fetching Experience");
    }
  };

  useEffect(() => {
    if (userId) {
      fetchExperience();
    }
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
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
  return (
    <div className=" p-4 container mx-auto ">
      <div className="w-full border rounded-md mt-14  border-gray-300">
        {/* Cover and Profile Section */}
        <div className="relative">
          <div className="h-48 w-full bg-[#f3f2f0]">
            <img
              src="https://img.freepik.com/free-vector/leaves-background-color-year_23-2148380575.jpg?t=st=1731233236~exp=1731236836~hmac=ab5a02129b8efbe5c4ee6f07593b89bc9c7c86469923d5d7eec45bcc3215aa4c&w=900"
              alt="Cover"
              className="h-48 w-full object-cover rounded-t-md"
            />
          </div>
          <div className="absolute left-4 top-24 h-32 w-32 rounded-full border-4 border-gray-400">
            <img
              src={profile.profilePicture}
              alt="Profile"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Profile Info Section */}
        <div className="mt-16 p-4 flex flex-col gap-4  sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">{profile.name}</h2>
              <span className="text-blue-600">•</span>
            </div>
            <p className="text-xl text-blue-600 font-medium mb-2">
              {profile.designation}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="rounded-full bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-blue-700">
              Message
            </button>
            <button
              className="rounded-full border border-blue-600 px-4 py-1.5 text-sm font-semibold text-blue-600 hover:bg-blue-50"
              onClick={() => setIsFollowing(!isFollowing)}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
            <button className="rounded-full border border-gray-300 p-1.5 hover:bg-gray-50">
              <span className="h-5 w-5 text-gray-600">•••</span>
            </button>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-6 grid gap-4 p-4  sm:grid-cols-3">
          <div className="col-span-2 space-y-4">
            {/* About Section */}
            <div className="rounded-lg border border-gray-200 bg-white p-3">
              <h2 className="text-lg font-semibold">About</h2>
              <p className="mt-2 text-gray-600">
                {
                  "I'm the model of the new CMO. I've combined a deep background in brand management at blue chip CPG companies with eCommerce growth marketing at the world's biggest retailer. I've run 100M$+ I've created world-class campaigns. I've built digital marketing organizations from the ground up. I have over 20 years' experience leading..."
                }
                <button className="text-blue-600 hover:underline">
                  See more
                </button>
              </p>
            </div>

            {/* Marketing Expertise */}
            <div className="rounded-lg border border-gray-200 bg-white p-2 ">
              <h2 className="text-lg font-semibold">Skills</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                <div className="flex flex-wrap gap-2 p-1">
                  {(profile.skills || []).map((skill) => (
                    <span
                      key={skill.id}
                      className="bg-blue-100 text-blue-800 text-xs  font-medium px-3 py-0.5 rounded-full"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 bg-white p-2">
              <h2 className="font-semibold">Intro</h2>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="h-5 w-5 text-gray-500">
                    <MapPinIcon />
                  </span>
                  <span className="mb-1">{profile.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="h-5 w-5 text-gray-500">📧</span>
                  <a
                    href="mailto:john@contact.com"
                    className="text-blue-600 hover:underline overflow-hidden text-ellipsis"
                  >
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="h-5 w-5 text-gray-500">
                    <BriefcaseIcon />
                  </span>
                  <a href="#" className="text-blue-600 hover:underline">
                    {profile.experienceYears} years
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="h-5 w-5 text-gray-500">
                    <DollarIcon />
                  </span>

                  <span className="mb-1">30 $/hr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 p-4 ">
          <div className="rounded-lg border border-gray-200 bg-white p-3">
            <h2 className="text-lg font-semibold mb-1">Certificate</h2>
            <div className="" data-v0-t="card">
              <div className="grid grid-cols-1 gap-4">
                {Array.isArray(certificates) && certificates.length > 0 ? (
                  certificates.map((certificate) => (
                    <div
                      className="bg-gray-200 rounded-lg overflow-hidden shadow"
                      key={certificate.id}
                    >
                      <div className="p-2 md:p-3 lg:px-4">
                        <div className="flex items-center justify-between mb-2">
                          <img
                            alt="Certificate"
                            width="90"
                            height="60"
                            className="rounded-sm"
                            src={certificate.image}
                            style={{
                              objectFit: "contain",
                            }}
                          />

                          <div className="flex gap-2 items-center">
                            <div className="border bg-green-200 shadow font-bold text-xs items-center h-6 p-1 px-2 rounded mt-4">
                              <div className="mb-3">Issued</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-md font-semibold">
                              {certificate.name}
                            </h3>
                            <div className="text-sm text-gray-500 font-bold mb-2">
                              Issued by: {certificate.organization}
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="text-xs text-gray-500 font-bold">
                              Issued on: {certificate.issueDate}
                            </div>
                            <div className="text-xs text-gray-500 font-bold">
                              Expires on: {certificate.expirationDate}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No certificates found.</div>
                )}
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-3">
            <h2 className="text-lg font-semibold mb-1">Experience</h2>
            <div className="" data-v0-t="card">
              <div className="grid gap-8">
                {experience.length > 0 ? (
                  experience.map((exp) => (
                    <div
                      key={exp.id}
                      className="rounded-lg border bg-gray-200 text-card-foreground shadow flex flex-col gap-6 p-4"
                      data-v0-t="card"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h3 className="text-xl font-bold">{exp.jobtitle}</h3>
                          <p className="text-gray-500 font-bold ">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {exp.startDate} - {exp.endDate}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  ))
                ) : (
                  <p>No experiences found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullUserProfile;
