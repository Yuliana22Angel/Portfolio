import React from "react";
import Social from "../Social";
import { Link } from "react-router-dom";

const logo = "img/logo/dark.png";

const Header = () => {
  return (
    <div className="topbar_inner">
      {/*
      <div className="logo">
        <Link to="/">
          {" "}
          <img src={logo} alt="Logo" style={{ width: '100%', height: 'auto', minWidth: '150px' }} />
        </Link>
      </div>
      {/* End .logo */}

      <div className="right">
        <div className="social">
          <Social />
        </div>
        {/* End .social */}
        <div className="know_tm_button">
          <a href="img/cv/yuliana16infante@gmail.com-E.pdf" download>
            Download CV
          </a>
        </div>
        {/* End download button */}
      </div>
    </div>
    // End .topbar_inner
  );
};

export default Header;
