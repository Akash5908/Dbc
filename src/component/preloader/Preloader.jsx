import React from "react";
import "./preloader.css";

const Preloader = () => {
  return (
    <div>
      <div className="preloader" id="preloader">
        <div className="preloader-inner">
          <div className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
