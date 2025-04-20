import React from "react";

const addressContent = [
  {
    icon: "icon-smartphone",
    title: "Call Me",
    info: "+58 412",
    href: "https://web.whatsapp.com/send?phone=5848",
  },
  {
    icon: "icon-letter",
    title: "Email Us",
    info: "@gmail.com",
    href: "mailto:@gmail.com",
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
