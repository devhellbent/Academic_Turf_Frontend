import React from "react";

import "../../globals.css";
import Main from "./Main";
import Services from "./Services";
import Features from "./Features";
import ContactUs from "./ContactUs";
function HomePage() {
  return (
    <div className="mt-[60px]">
      <div className="margin-block-50">
        <Main />
      </div>

      <div className="margin-block-50">
        <Features />
      </div>

      <div className="margin-block-50">
        <Services />
      </div>

      <div className="margin-block-50">
        <ContactUs />
      </div>
    </div>
  );
}

export default HomePage;
