import React, { useState } from "react";
import Modal from "react-modal";
import ModalFour from "./modal/ModalFour";
import ModalOne from "./modal/ModalOne";
import ModalThree from "./modal/ModalThree";
import ModalTwo from "./modal/ModalTwo";
import ModalFive from "./modal/ModalFive";
import ModalSix from "./modal/ModalSix";

Modal.setAppElement("#root");

const Service = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }

  return (
    <div className="know_tm_services">
      <div className="know_tm_main_title">
        <span>Service</span>
        <h3>Discover our services</h3>
      </div>
      {/* End .know_tm_main_title */}

      <div className="service_list">
        <ul>
          {/* Start Service Motion & Web Graphy */}
          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner" >
              <span className="icon">
                <span className="icon-squares svg"></span>
              </span>
              <h3 className="title">Web design and development: </h3>
              <p className="text">
              Design and creation of custom, responsive websites tailored to the client's needs, optimized for maximum performance and speed.            </p>
            </div>
          </li>
          {/* End Service Motion & Web Graphy */}

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="list_inner" >
              <span className="icon">
                <span className="icon-physics svg"></span>
              </span>
              <h3 className="title">Web application development: </h3>
              <p className="text">
              Development of custom, scalable web applications using modern technologies and programming languages that improve the efficiency and productivity of the business.
              </p>
            </div>
          </li>
          {/* End Service Mobile App Design */}

          {/* Start Service Ui/Ux Consultancy */}
          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="list_inner" >
              <span className="icon">
                <span className="icon-web svg"></span>
              </span>
              <h3 className="title">Search engine optimization (SEO)</h3>
              <p className="text">
              Implementation of on-page and off-page SEO techniques to improve the visibility and ranking of your website in search engines, increasing organic traffic and quality.
              </p>
            </div>
          </li>
          {/* End Service Ui/Ux Consultancy */}

          {/* Start Service Branding & Design */}
          <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="0">
            <div className="list_inner" >
              <span className="icon">
                <span className="icon-user svg"></span>
              </span>
              <h3 className="title">System integration</h3>
              <p className="text">
              Integration of existing systems and applications to improve business processes' efficiency and automation through APIs and other communication protocols.
              </p>
            </div>
          </li>
          {/* End Service Branding & Design */}

          {/* Start Service Mobile App Design */}
          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="list_inner" >
              <span className="icon">
                <span className="icon-briefcase svg"></span>
              </span>
              <h3 className="title">Maintenance and support</h3>
              <p className="text">
              Ongoing maintenance and support for your website or application, including bug fixes, software updates, security monitoring, and technical assistance.
              </p>
            </div>
          </li>
          {/* End Service Mobile App Design */}
          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="list_inner" >
              <span className="icon">
                <span className="icon-writing_2 svg"></span>
              </span>
              <h3 className="title">E-commerce website design and development</h3>
              <p className="text">
              Creation of custom, scalable online stores with advanced features such as inventory management, payment processing, and order tracking, to improve the efficiency and profitability of your business.
              </p>
            </div>
          </li>
          {/* End Service Mobile App Design */}
        </ul>
      </div>

      {/* Start Modal Motion Graphy */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox ">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap ">
              <ModalOne />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Motion Graphy */}

      {/* Start Modal Branding & Design */}
      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox ">
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap ">
              <ModalTwo />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Branding & Design */}

      {/* Start Modal Mobile App Design */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox ">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap ">
              <ModalThree />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Mobile App Design*/}

      {/* Start Modal Modal Ui/Ux Consultancy */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox ">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap">
              <ModalFour />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Ui/Ux Consultancy*/}
      {/* Start Modal Modal Ui/Ux Consultancy */}
      <Modal
        isOpen={isOpen5}
        onRequestClose={toggleModalFive}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox ">
          <button className="close-modal" onClick={toggleModalFive}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap">
              <ModalFive />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Ui/Ux Consultancy*/}
      {/* Start Modal Modal Ui/Ux Consultancy */}
      <Modal
        isOpen={isOpen6}
        onRequestClose={toggleModalSix}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="know_tm_modalbox ">
          <button className="close-modal" onClick={toggleModalSix}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap">
              <ModalSix />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Ui/Ux Consultancy*/}
    </div>
  );
};

export default Service;
