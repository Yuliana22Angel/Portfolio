import React from "react";
import { Link } from "react-router-dom";

const logo = "img/logo/light.png";

const HeaderThreeDark = () => {
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

      <div className="know_tm_author_info">
        <div className="info_inner">
          <div className="info">
            <h3>Sarah Jessica</h3>
            <span>Senior UI/UX Designer</span>
          </div>
          <div className="avatar">
            <div
              className="main"
              data-img-url="img/hero/3.jpg"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "img/hero/3.jpg"
                })`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderThreeDark;
