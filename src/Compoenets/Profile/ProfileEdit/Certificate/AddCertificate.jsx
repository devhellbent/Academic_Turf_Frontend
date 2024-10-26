import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import CertifcateEdit  from './CertifcateEdit'

function AddCertificate() {
  const [certificateName, setCertificateName] = useState("");
  const [organization, setOrganization] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [certificateImage, setCertificateImage] = useState(null);
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Get the userId from localStorage (stored as JSON string)
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const userId = userData.userid;

  // Handle image change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCertificateImage(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!certificateName || !organization || !userId || !certificateImage) {
      toast.error("Please fill out all required fields");
      return;
    }

    const formData = new FormData();
    formData.append("name", certificateName);
    formData.append("organization", organization);
    formData.append("issueDate", issueDate);
    formData.append("expirationDate", expirationDate);
    formData.append("userId", userId);
    formData.append("image", certificateImage);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/certificates`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        toast.success("Certificate added successfully");
        fetchCertificates();
        setCertificateName("");
        setOrganization("");
        setIssueDate("");
        setExpirationDate("");
        setCertificateImage(null);
      } else {
        toast.error("Failed to add certificate");
      }
    } catch (error) {
      console.error("Error adding certificate:", error);
      toast.error("An error occurred while adding the certificate");
    }
  };

  // Fetch certificates for the given user ID
  const fetchCertificates = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/certificates/user/${userId}`
      );
      setCertificates(response.data || []);
      setLoading(false);
    } catch (err) {
      setError("Error fetching certificates");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchCertificates();
    } else {
      setLoading(false);
      setError("User not logged in");
    }
  }, [userId]);

  if (loading) return <div>Loading certificates...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-gray-100 mt-[60px] min-h-screen">
      <div className="grid gap-8 max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          <div>
            <h1 className="text-3xl font-bold">Certificate Management</h1>
            <p className="text-muted-foreground">
              Add and view your certificates in one place.
            </p>
          </div>
          <div className="border text-card-foreground bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="grid gap-6 p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="name">
                    Certificate Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm"
                    id="name"
                    placeholder="Enter certificate name"
                    value={certificateName}
                    onChange={(e) => setCertificateName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="organization">
                    Issuing Organization
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm"
                    id="organization"
                    placeholder="Enter issuing organization"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="issueDate">
                    Issue Date
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm"
                    id="issueDate"
                    type="date"
                    value={issueDate}
                    onChange={(e) => setIssueDate(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="expirationDate">
                    Expiration Date
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm"
                    id="expirationDate"
                    type="date"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="image">
                  Certificate Image
                </label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                        aria-hidden="true"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={handleImageChange}
                      accept=".jpg, .png, .gif"
                    />
                  </label>
                </div>
              </div>
              <div className="items-center flex justify-end p-6">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-black text-white hover:bg-gray-700"
                >
                  Add Certificate
                </button>
              </div>
            </form>
          </div>
        </div>
        {certificates.length > 0 ? (
          <div>
            <h2 className="text-2xl font-bold">Your Certificates</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              {certificates.map((certificate) => (
                <CertifcateEdit
                  key={certificate._id} // Use _id as the key
                  certificate={certificate}
                  fetchCertificates={fetchCertificates}
                />
              ))}
            </div>
          </div>
        ) : (
          <p>No certificates found.</p>
        )}
      </div>
    </div>
  );
}

export default AddCertificate;