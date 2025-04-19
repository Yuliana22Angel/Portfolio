import React from "react";

const experienceContent = [

  {
    position: "Full Stack Web Developer",
    compnayName: "WEEX.PRO",
    year: "2023 - 2024",
    details: ` I led the development of over 40 WordPress websites, including online stores using WooCommerce, static websites, database integrations, and corporate email setups for a variety of businesses.`,
  },
 
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="list_inner">
            <div className="short">
              <div className="job">
                <h3>{val.position}</h3>
                <span>{val.compnayName}</span>
              </div>
              <div className="year">
                <span>{val.year}</span>
              </div>
            </div>
            <div className="text">
              <p>{val.details}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
