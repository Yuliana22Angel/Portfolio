import React from "react";

const addressContent = [
  {
    icon: "icon-smartphone",
    title: "Call Me",
    info: "+58 412411 8188",
    href: "https://web.whatsapp.com/send?phone=584124118188",
  },
  {
    icon: "icon-letter",
    title: "Email Us",
    info: "nelsonrondon36@gmail.com",
    href: "mailto:nelsonrondon36@gmail.com",
  },
  /*{
    icon: "icon-placeholder",
    title: "Address",
    info: "Maracay, Venezuela",
    href: "",
  },*/
];

const Address = () => {
  return (
    <ul>
      {addressContent.map((val, i) => (
        <li key={i}>
          <div className="list_inner">
            <span className="icon">
              <span className={`svg ${val.icon}`}></span>
            </span>
            <div className="short">
              <h3>{val.title}</h3>
              <span>
                <a href={val.href}>{val.info}</a>
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Address;
