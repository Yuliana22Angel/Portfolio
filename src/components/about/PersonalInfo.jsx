import React from "react";

const personalDetails = [
  { title: "Name", info: "Yuliana Infante" },
  { title: "Birthday", info: "March 09, 2001" },
  { title: "Mail", info: "yuliana16infante@gmail.com" },
  { title: "Phone", info: "+58 4125838229" },
  /*{title: "Address", info: "20, Maracay, Venezuela"},*/
  /*{ title: "Nationality", info: "Venezolano" },*/
];

const aboutContentInfo = {
  meta: "About Me",
  title: "Systems Engineer | Web Developer",
  subTitle: "A passionate Systems Engineer and Web Developer based In Maracay, Venezuela",
  description: `Hi! I’m Yuliana Infante, a Systems Engineer with a strong passion for web development. With over a year and a half of hands-on experience as a web developer, I’ve built a solid foundation of skills and knowledge that allow me to create successful, user-focused digital solutions.`,
};

const PersonalInfo = () => {
  return (
    <div className="know_tm_about">
      <div className="left" data-aos="fade-right">
        <div className="left_inner">
          <div className="image">
            <img src="img/thumbs/35-44.jpg" alt="" />
            <div
              className="main"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/img/about/1.webp"
                })`,
              }}
            ></div>
          </div>
          {/* End .image */}

          <div className="details">
            <ul>
              {personalDetails.map((value, i) => (
                <li key={i}>
                  <h3>{value.title}</h3>
                  <span>{value.info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* End .left */}

      <div className="right" data-aos="fade-right">
        <div className="know_tm_main_title">
          <span>{aboutContentInfo.meta}</span>
          <h3>{aboutContentInfo.title}</h3>
        </div>
        <div className="bigger_text">
          <p>{aboutContentInfo.subTitle}</p>
        </div>
        <div className="text">
          <p>{aboutContentInfo.description}</p>
        </div>
        <div className="know_tm_button">
          <a href="img/cv/yuliana16infante@gmail.com-E.pdf" download>
            Download CV
          </a>
        </div>
      </div>
      {/* End .right */}
    </div>
  );
};

export default PersonalInfo;
