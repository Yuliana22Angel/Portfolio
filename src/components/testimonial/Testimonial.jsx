import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          slidesToShow: 1,
          speed: 300,
        },
      },
    ],
  };

  const testimonialContent = [
    {
      desc: `"I'm very happy with my WordPress website developed by Engineer Yuliana Infante. It's modern, functional, and visually appealing. Additionally, communication with him was excellent, and he made sure to meet all my requirements. Thanks, Nelson!"`,
      avatar: "1",
      name: "Grupocredit",
      designation: "Business",
      delayAnimation: "",
    },
    
    {
      desc: `Nelson is an excellent Laravel developer. He created a web application that fit my requirements perfectly, and it was easy to work with him throughout the development process. I'm very satisfied with the result and would recommend him to anyone looking for a high-quality Laravel web application`,
      avatar: "2",
      name: "EADIC",
      designation: "Business",
      delayAnimation: "200",
    },


    {
      desc: `Engineer developed my virtual store with great professionalism and dedication. He understood my requirements and goals perfectly, and created an attractive, easy-to-use, and functional virtual store. I'm very satisfied with the final result and would definitely recommend him to anyone looking for a high-quality virtual store`,
      avatar: "3",
      name: "Libroventa",
      designation: "Business",
      delayAnimation: "100",
    },

    {
      desc: `Engineer Yuliana Infante is a WordPress expert. His creativity and ability to understand what I wanted for my website was impressive. The result was a website that fit my needs perfectly. I'm very grateful to him and would definitely recommend him to anyone needing a quality WordPress website`,
      avatar: "2",
      name: "EADIC",
      designation: "Business",
      delayAnimation: "100",
    },



  ];

  return (
    <Slider {...settings}>
      {testimonialContent.map((val, i) => (
        <div
          className="list_inner"
          key={i}
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={val.delayAnimation}
        >
          <div className="in">
            <div className="text">
              <p>{val.desc}</p>
            </div>
            {/* End .text */}

            <div className="details">
              <div className="left">
                <div className="avatar">
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL +
                        `img/testimonials/${val.avatar}.jpg`
                      })`,
                    }}
                  ></div>
                </div>
                <div className="info">
                  <h3>{val.name}</h3>
                  <span>{val.designation}</span>
                </div>
              </div>
              {/* End .left */}

              <div className="right">
                <span className="icon-left-quote svg"></span>
              </div>
            </div>
            {/* End .details */}
          </div>
        </div>
      ))}
    </Slider>
  );
}
