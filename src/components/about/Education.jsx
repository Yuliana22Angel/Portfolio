import React from "react";

const educationContent = [
  {
    degree: "Systems Engineering",
    institute: "Universidad Bicentenaria de Aragua",
    year: "2020 - 2025",
    details: `Systems Engineering is an interdisciplinary field that focuses on the design, development, implementation, and integration of complex systems. The goal of Systems Engineering is to ensure that all the components of a system work together effectively and efficiently to meet the desired objectives and requirements.`,
  },
  {
    degree: "Web Developer",
    institute: "Platzi",
    year: "2023 - 2024",
    details: `A Web Developer is a software developer who is proficient in both the front-end and back-end aspects of web development. They are able to design, build, and maintain websites and web applications from end-to-end.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="list_inner">
            <div className="short">
              <div className="job">
                <h3>{val.degree}</h3>
                <span>{val.institute}</span>
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

export default Education;
