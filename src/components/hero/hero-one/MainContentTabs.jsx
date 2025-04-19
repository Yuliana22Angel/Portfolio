import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PersonalInfo from "../../about/PersonalInfo";
import Resume from "../../about/Resume";
import Portfolio from "../../portfolio/Portfolio";
import Service from "../../service/Service";
import Testimonial from "../../testimonial/Testimonial";
// import Blog from "../../blog/Blog";
import Address from "../../Address";
import Contact from "../../Contact";
import Footer from "../../footer/Footer";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const tabMenuList = [
  { icon: "icon-archive", title: "About Me", ancla: "about" },
  { icon: "icon-contacs", title: "Resume", ancla: "resume" },
  { icon: "icon-briefcase", title: "Portfolio", ancla: "portafolio" },
  //{ icon: "icon-gear", title: "Service", ancla: "service" },
  //{ icon: "icon-message", title: "Testimonial", ancla: "testimonial" },
  //{ icon: "icon-letter", title: "Contact", ancla: "contact"},
];

const MainContentTabs = () => {
  return (
    <Tabs className="know_tm_hero ">
      <div className="main_menu">
        <TabList>
          {tabMenuList.map((menu, i) => (
          
            <Tab key={i}>
                <a href={`#${menu.ancla}`}>
              <div className={`svg ${menu.icon}`}></div>
              <span>{menu.title}</span>
              </a>
            </Tab>
           
          ))}
        </TabList>
      </div>

      <div className="know_tm_mainpart">
        <TabPanel>
          <div id="about"  className="know_tm_main_section">
            <PersonalInfo />
          </div>
        </TabPanel>

        <TabPanel>
          <div id="resume" className="know_tm_main_section">
            <Resume />
          </div>
        </TabPanel>

        <TabPanel>
          <div id="portafolio" className="know_tm_main_section">
            <Portfolio />
          </div>
        </TabPanel>

        <TabPanel>

          <div id="service" className="know_tm_main_section">
            <Service />
          </div>
        </TabPanel>

        <TabPanel>
          <div id="testimonial" className="know_tm_main_section">
            {/* <!-- TESTIMONIALS --> */}

            <div className="know_tm_testimonials">
              <div className="know_tm_main_title">
                <span>Testimonials</span>
                <h3>What people say about me</h3>
              </div>
              <div className="testimonials_list">
                <Testimonial />
              </div>
            </div>

            {/* <!-- /TESTIMONIALS --> */}
          </div>
        </TabPanel>
        {/* End testimonial Content */}

        {/* <TabPanel>
          <div id="blog" className="know_tm_main_section"> */}
            {/* <!-- NEWS --> */}

            {/* <div className="know_tm_news">
              <div className="know_tm_main_title">
                <span>Blog</span>
                <h3>Latest tips, tricks &amp; Updates</h3>
              </div> */}
              {/* End .know_tm_main_title */}
              {/* <Blog />
            </div> */}

            {/* <!-- /NEWS --> */}
          {/* </div>
        </TabPanel> */}

        <TabPanel>
          <div id="contact" className="know_tm_main_section">
            {/* <!-- CONTACT --> */}
            
            <ToastContainer />

            <div className="know_tm_contact">
              <div className="know_tm_main_title">
                <span>Contact Me</span>
                <h3>Contact me to get your work done</h3>
              </div>
              <div className="wrapper">
                <div
                  className="left"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <Address />
                </div>
                {/* End .left */}
                <div
                  className="right"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div className="fields">
                    <Contact />
                  </div>
                </div>
                {/* End .right */}
              </div>
            </div>
            {/* End .know_tm_contact */}

            {/* <!-- /CONTACT --> */}
          </div>
        </TabPanel>
      </div>

      {/* <!-- COPYRIGHT --> */}
      <div className="know_tm_copyright">
        <div className="container">
          <Footer />
        </div>
      </div>
      {/* <!-- /COPYRIGHT --> */}
    </Tabs>
  );
};

export default MainContentTabs;
