import axios from "axios";
import { useState } from "react";
import EditModal from "./EditModal"; // Import the EditModal component
import toast from "react-hot-toast";

function CertificateEdit({
  certificate, // Expect a single certificate object
  userId,
  fetchCertificates,
}) {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEditClick = () => {
    setSelectedCertificate(certificate);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = () => {
    setSelectedCertificate(certificate);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/certificates/${certificate.id}`
      );
      console.log(response.data.message);
      fetchCertificates();
      toast.success("Certificate Deleted"); // Refresh the certificates after deletion
    } catch (error) {
      toast.error(
        "Error deleting certificate:",
        error.response?.data?.message || error.message
      );
    } finally {
      setIsDeleteModalOpen(false);
    }
  };

  const handleSave = () => {
    fetchCertificates(); // Refresh the certificates after saving changes
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  if (!certificate) {
    return <div>No certificate available.</div>;
  }

  return (
    <div
      key={certificate.id}
      className="border text-card-foreground  bg-white rounded-lg shadow"
      data-v0-t="card"
    >
      <div className="grid gap-4 p-6">
        <div className="flex items-center gap-4">
          <img
            alt="Certificate"
            width="100"
            height="80"
            className="rounded-md"
            src={certificate.image}
            style={{ aspectRatio: "140/110", objectFit: "contain" }}
          />
          <div className="grid gap-1">
            <div className="font-medium">{certificate.name}</div>
            <div className="flex">
              <div className="text-sm font-bold text-gray-600 px-1 rounded bg-gray-100">
                {certificate.organization}
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-1 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Issued:</span>
            <span>{certificate.issueDate}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Expires:</span>
            <span>{certificate.expirationDate}</span>
          </div>
        </div>
      </div>
      <div className="items-center flex justify-end gap-2 p-6">
        <button
          onClick={handleEditClick}
          className="inline-flex gap-1 font-semibold  shadow-sm items-center justify-center whitespace-nowrap text-sm text-gray-600 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-9 rounded-md px-3 bg-white hover:bg-gray-100 focus:ring-primary"
        >
          Edit
        </button>
        <button
          onClick={handleDeleteClick}
          className="inline-flex gap-1 items-center justify-center text-white whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-9 rounded-md px-3 bg-red-500 hover:bg-red-700 focus:ring-primary"
        >
          Delete
        </button>
      </div>
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black opacity-50 fixed inset-0"></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-10">
            <h2 className="text-lg font-semibold mb-4">Delete Certificate</h2>
            <p>
              Are you sure you want to delete this certificate? This action
              cannot be undone.
            </p>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="inline-flex gap-1 items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input h-9 rounded-md px-3 bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="inline-flex gap-1 items-center justify-center text-white whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input h-9 rounded-md px-3 bg-red-500 hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <EditModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        certificateId={certificate.id}
        certificate={selectedCertificate}
        fetchCertificates={fetchCertificates}
        onSave={handleSave}
        userId={userId}
      />
    </div>
  );
}

export default CertificateEdit;
