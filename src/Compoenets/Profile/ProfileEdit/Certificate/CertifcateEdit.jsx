import React, { useState } from "react";
import EditModal from "./EditModal";

function CertificateEdit({
  certificates,
  userId,
  error,
  loading,
  fetchCertificates,
}) {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true); // Open the modal
  };
  console.log("certificateIdmodal", selectedCertificate);

  const handleSave = (updatedCertificate) => {
    // Optionally handle state update or fetch the certificates again
    fetchCertificates();
  };

  return (
    <div>
      <EditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        certificate={selectedCertificate}
        onSave={handleSave}
        fetchCertificates={fetchCertificates}
        userId={userId}
        certificateId={selectedCertificate} // Pass the id of the selected certificate
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Array.isArray(certificates) && certificates.length > 0 ? (
          certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="border text-card-foreground bg-white rounded-lg shadow"
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
                  onClick={() => handleEditClick(certificate)}
                  className="inline-flex gap-1 shadow items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-9 rounded-md px-3 bg-white hover:bg-gray-100 focus:ring-primary"
                >
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
                    className="w-4 h-4"
                  >
                    <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"></path>
                  </svg>
                  Edit
                </button>
                <button className="inline-flex gap-1 items-center justify-center text-white whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-9 rounded-md px-3 bg-red-500 hover:bg-red-700 focus:ring-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="white"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1 0-2h3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1h3a1 1 0 0 1 1 1zM4.118 4l.282 9.056A1 1 0 0 0 5.4 14h5.2a1 1 0 0 0 1-.944L11.882 4H4.118z"
                    ></path>
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>No certificates found.</div>
        )}
      </div>
    </div>
  );
}

export default CertificateEdit;
