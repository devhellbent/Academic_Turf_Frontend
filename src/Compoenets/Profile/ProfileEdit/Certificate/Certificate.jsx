import React, { useEffect, useState } from "react";
import axios from "axios";

function Certificate() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userId = userData && userData.userid;

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
  


  console.log("certificates", certificates)
  useEffect(() => {
    if (userId) {
      fetchCertificates();
    }
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
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
  );
}

export default Certificate;
