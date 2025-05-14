import React from "react";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const socialShare = [
  {
    img: "whatsapp",
    link: "https://wa.me/584125838229?text=Hola%2C%20quiero%20más%20información",
    mobileLink: "whatsapp://send?phone=584125838229&text=Hola%2C%20quiero%20más%20información",
  },
  {
    img: "github",
    link: "https://github.com/Yuliana22Angel",
  },
];

const handleClick = (e, item) => {
  if (item.img === "whatsapp" && isMobile) {
    e.preventDefault(); // Previene navegación normal
    window.location.href = item.mobileLink; // Fuerza apertura en app
  }
};

const Social = () => {
  return (
    <ul>
      {socialShare.map((item, i) => (
        <li key={i}>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleClick(e, item)}
          >
            <img
              className="svg2"
              src={`img/svg/social/${item.img}.svg`}
              alt="brand"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;

