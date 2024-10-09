import React from "react";
import featuresImg from "../../Images/features.png";
import { useNavigate } from "react-router-dom";
import "../../globals.css";
import "../../styles/features.css";
function Features() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="margin-block-100 py-6 purple-gradient">
        <h1 className="features-heading txt-ctr">
          Where Your Next Chapter Begins
        </h1>
        <p className="features-para">
          Your potential. Our platform. Perfect match. Your dream job is just a
          search away.
        </p>
      </div>

      <div className="features flex py-4 align-item-ctr margin-block-50">
        <div className="feature-img">
          <img src={featuresImg} alt={"features Image"} className="main-img" />
        </div>

        <div className="features-text">
          <h1 className="features-sub-heading">
            Platform where your requirements aspire fulfillment
          </h1>
          <p className="main-para margin-top-20">
            Pen your requirements, explore what's there in the store
          </p>

          <div
            className="white-btn flex items-center  margin-top-20"
            onClick={() => navigate("/post-requirements")}
            style={{ textDecoration: "none" }}
          >
            <span className="white-btn-text">Post Requirements</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
