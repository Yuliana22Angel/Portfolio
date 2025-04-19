import React from "react";

const socialShare = [
  {
    img: "whatsapp",
    link: "https://web.whatsapp.com/send?phone=584125838229",
  },
  {
    img: "github",
    link: "https://github.com/Yuliana22Angel",
  },
];
const SocialThree = () => {
  return (
    <ul>
      {socialShare.map((item, i) => (
        <li key={i}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img
              className="svg"
              src={`img/svg/social/${item.img}.svg`}
              alt="brand"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialThree;
