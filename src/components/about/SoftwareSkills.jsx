import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
import "react-circular-progressbar/dist/styles.css";
import "../../assets/scss/main/SoftwareSkills.scss"; // Importa tus estilos SCSS aquí

const SoftwareSkills = () => {
  return (
    <div className="software"> 
      <div className="circular_progress_bar">
        <ul className="logo-list">
        <li>
            <div className="list_inner">
              <div style={{ width: "110px" }}>
              <div className="tecnologia">
                  <img src="img/svg/tech/react.svg" alt="react" />
                </div>

                <div className="title">
                  <h5>React</h5>
                </div>
              </div>
            </div>
          </li>
          {/* End li */}
          {/*
          <li>
            <div className="list_inner">
              <div style={{ width: "110px" }}>
              <div className="tecnologia">
                  <img src="img/svg/tech/aws.svg" alt="aws" />
                </div>

                <div className="title">
                  <h5>AWS</h5>
                </div>
              </div>
            </div>
          </li>
          */}
          {/* End li */}
          {/*
          <li>
            <div className="list_inner">
              <div style={{ width: "110px" }}>
              <div className="tecnologia">
                  <img src="img/svg/tech/angular.svg" alt="angular" />
                </div>

                <div className="title">
                  <h5>Angular</h5>
                </div>
              </div>
            </div>
          </li>
          */}
          {/* End li */}
          
          <li>
            <div className="list_inner">
              <div style={{ width: "110px" }}>
              <div className="tecnologia">
                  <img src="img/svg/tech/php.svg" alt="php" />
                </div>

                <div className="title">
                  <h5>PHP</h5>
                </div>
              </div>
            </div>
          </li>
          {/* End li */}
          
          <li>
            <div className="list_inner">
              <div style={{ width: "110px" }}>
              <div className="tecnologia">
                  <img src="img/svg/tech/codeigniter.svg" alt="codeigniter" />
                </div>

                <div className="title">
                  <h5>CodeIgniter</h5>
                </div>
              </div>
            </div>
          </li>
          {/* End li */}

          {/*
          <li>
            <div className="list_inner">
              <div style={{ width: "110px" }}>
              <div className="tecnologia">
                  <img src="img/svg/tech/moodle.svg" alt="moodle" />
                </div>

                <div className="title">
                  <h5>Moodle</h5>
                </div>
              </div>
            </div>
          </li>
          */}
          {/* End li */}

          {/*
          <li>
            <div className="list_inner">
              <div style={{ width: "110px" }}>
              <div className="tecnologia">
                  <img src="img/svg/tech/inet.svg" alt="net" />
                </div>

                <div className="title">
                  <h5>.NET</h5>
                </div>
              </div>
            </div>
          </li>
          */}
          {/* End li */}

          <li>
            <div className="list_inner">
              <div style={{ width: "110px" }}>
              <div className="tecnologia">
                  <img src="img/svg/tech/git.svg" alt="git" />
                </div>

                <div className="title">
                  <h5>Git</h5>
                </div>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div style={{ width: "110px" }}>
              <div className="tecnologia">
                  <img src="img/svg/tech/wordpress1.svg" alt="wordpress" />
                </div>

                <div className="title">
                  <h5>WordPress</h5>
                </div>
              </div>
            </div>
          </li>
          {/* End li */}

          {/*
          <li>
            <div className="list_inner">
              <div style={{ width: "110px" }}>
              <div className="tecnologia">
                  <img src="img/svg/tech/api.svg" alt="api" />
                </div>

                <div className="title">
                  <h5>API REST</h5>
                </div>
              </div>
            </div>
          </li>
          */}
          {/* End li */}

          <li>
            <div className="list_inner">
              <div style={{ width: "110px" }}>
              <div className="tecnologia">
                  <img src="img/svg/tech/sql.svg" alt="sql" />
                </div>

                <div className="title">
                  <h5>SQL</h5>
                </div>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div style={{ width: "110px" }}>
              <div className="tecnologia">
                  <img src="img/svg/tech/google-analytics.svg" alt="analytics" />
                </div>

                <div className="title">
                  <h5>Google Analytics</h5>
                </div>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div style={{ width: "110px" }}>
              <div className="tecnologia">
                  <img src="img/svg/tech/js.svg" alt="javascript" />
                </div>

                <div className="title">
                <h5>JavaScript</h5>
                </div>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div style={{ width: "110px" }}>
              <div className="tecnologia">
                  <img src="img/svg/tech/html.svg" alt="html" />
                </div>

                <div className="title">
                  <h5>HTML</h5>
                </div>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div style={{ width: "110px" }}>
              <div className="tecnologia">
                  <img src="img/svg/tech/css.svg" alt="css" />
                </div>

                <div className="title">
                  <h5>CSS</h5>
                </div>
              </div>
            </div>
          </li>
          {/* End li */}
          {/*
          <li>
            <div className="list_inner">
              <div style={{ width: "110px" }}>
              <div className="tecnologia">
                  <img src="img/svg/tech/tailwind.svg" alt="tailwind" />
                </div>

                <div className="title">
                  <h5>Tailwind</h5>
                </div>
              </div>
            </div>
          </li>
          */}
          {/* End li */}

        </ul>
      </div>
    </div>
  );
};

export default SoftwareSkills;
