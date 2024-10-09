import React from "react";
import "../../styles/features.css";
import "../../styles/services.css";
import "../../styles/card.css";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { PiAirplaneInFlight } from "react-icons/pi";
import { GiMagicBroom } from "react-icons/gi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { HiOutlineDocumentCheck } from "react-icons/hi2";

export default function Services() {
  const services = [
    {
      icon: <HiOutlineBuildingOffice />,
      textTitle: "Jobs",
    },
    {
      icon: <PiAirplaneInFlight />,
      textTitle: "Visa Assistance",
    },
    {
      icon: <LiaChalkboardTeacherSolid />,
      textTitle: "Tutoring",
    },
    {
      icon: <HiOutlineDocumentCheck />,
      textTitle: "Resume Check",
    },
    {
      icon: <GiMagicBroom />,
      textTitle: "There's more",
    },
  ];

  return (
    <div>
      <div className="margin-block-50">
        <div className="background">
          <div className="purple-gradient services">
            <h1 className="services-heading">What we offer?</h1>
            <p className="main-para txt-ctr margin-top-10">
              Hunt for services at the comfort of your home
            </p>
          </div>

          <div className="card-div pb-8 cursor-pointer flex  background">
            {services.map((service, index) => (
              <div className="card " key={index}>
                <div className="card-icon">{service.icon}</div>
                <div className="card-title">{service.textTitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
