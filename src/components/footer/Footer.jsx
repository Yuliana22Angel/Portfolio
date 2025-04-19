import React from "react";

const Footer = () => {
  return (
    <>
      <div className="inner">
        <div className="left">
          <p>
            Designed with love &copy; {new Date().getFullYear()} by Yuliana Infante
            All right reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
