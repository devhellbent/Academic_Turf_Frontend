import React, { useState, useEffect } from "react";
import axios from "axios";

function EditModal({
  isOpen,
  onClose,
  certificateId,
  certificate,
  fetchCertificates,
  onSave,
  userId,
}) {
  // Check if the certificate object exists before setting up form data
  const [formData, setFormData] = useState({
    name: certificate?.name || "",
    organization: certificate?.organization || "",
    issueDate: certificate?.issueDate || "",
    expirationDate: certificate?.expirationDate || "",
    image: certificate?.image || "",
  });

  console.log("certificateIdedit", certificateId?.id);
  // Update formData when the certificate changes
  useEffect(() => {
    if (certificate) {
      setFormData({
        name: certificate.name || "",
        organization: certificate.organization || "",
        issueDate: certificate.issueDate || "",
        expirationDate: certificate.expirationDate || "",
        image: certificate.image || "",
      });
    }
  }, [certificate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Certificate ID:", certificateId); // Log to check the correct value
      // Make sure certificateId is being passed correctly
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/users/${userId}/certificates/${certificateId?.id}`,
        formData
      );

      onSave(formData);
      fetchCertificates();
      onClose();
    } catch (error) {
      console.error("Error updating certificate:", error);
    }
  };

  // If the modal is not open, or no certificate is passed, return null (nothing is rendered)
  if (!isOpen || !certificate) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit Certificate</h2>
        <form onSubmit={handleSubmit}>
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
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
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
