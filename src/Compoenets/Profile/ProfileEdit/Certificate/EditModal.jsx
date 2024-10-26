import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function EditModal({
  isOpen,
  onClose,
  certificateId,
  certificate,
  fetchCertificates,
  userId,
}) {
  const [formData, setFormData] = useState({
    name: certificate?.name || "",
    organization: certificate?.organization || "",
    issueDate: certificate?.issueDate || "",
    expirationDate: certificate?.expirationDate || "",
  });
  const [imageFile, setImageFile] = useState(null); // State to store the file

  // Update formData when the certificate changes
  useEffect(() => {
    if (certificate) {
      setFormData({
        name: certificate.name || "",
        organization: certificate.organization || "",
        issueDate: certificate.issueDate || "",
        expirationDate: certificate.expirationDate || "",
      });
    }
  }, [certificate]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file); // Set the selected file
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log the formData for debugging
    console.log("Form Data: ", formData);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("organization", formData.organization);
    data.append("issueDate", formData.issueDate);
    data.append("expirationDate", formData.expirationDate);
    if (imageFile) {
      data.append("image", imageFile); // Append the image file if it exists
    }

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/certificates/${certificateId}`,
        data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Certificate Successfully Edited");
        fetchCertificates(); // Refresh the certificates
        onClose(); // Close modal after successful update
      } else {
        toast.error("Failed to update certificate");
      }
    } catch (error) {
      toast.error("Error updating certificate:", error);
    }
  };

  if (!isOpen || !certificate) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 lg:w-[70%]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Edit Certificate</h2>
          <div
            onClick={onClose}
            className="border p-1 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="overflow-x-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 px-1">
            <div className="mb-4">
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Organization</label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 px-1 mb-4">
            <div className="mb-4">
              <label className="block text-sm font-medium">Issue Date</label>
              <input
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Expiration Date</label>
              <input
                type="date"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-1 mb-7">
            <div className="flex">
              {certificate.image && (
                <img
                  src={certificate.image}
                  alt="Certificate Preview"
                  className="h-24 w-[30%] border object-cover rounded"
                />
              )}
            </div>
            <div className="">
              <label className="block text-sm font-medium">
                Change Certificate Image
              </label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.gif"
                onChange={handleImageChange}
                className="w-full px-3 py-3 border rounded-md"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 font-semibold text-gray-600 px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black hover:bg-gray-800 font-semibold text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
