import React from "react";
import { Link } from "react-router-dom";

const logo = "img/logo/dark.png";

const HeaderSixLight = () => {
  return (
    <div className="topbar_inner">
      <div className="logo">
        <Link to="/">
          {" "}
          <img src={logo} alt="brand" />
        </Link>
      </div>
      <div className="right">
        <div className="know_tm_button fixedVersion">
          <a href="img/cv/nelsonrondon36@gmail.com-E.pdf" download>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderSixLight;
