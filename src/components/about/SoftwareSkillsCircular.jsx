import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
import "react-circular-progressbar/dist/styles.css";

const SoftwareSkillsCircular = () => {
  return (
    <div className="software"> 
      <div className="circular_progress_bar">
        <ul>
          <li>
            <div className="list_inner">
              <div style={{ width: "150px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 80 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={2.5}
                        styles={buildStyles({
                          textColor: "#ff451b",
                          pathColor: "#ff451b",
                          trailColor: "#eee",
                          textSize: "12",
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>

                <div className="title">
                  <h3>Laravel</h3>
                </div>
              </div>
            </div>
          </li>
          {/* End li */} 

          <li>
            <div className="list_inner">
              <div style={{ width: "150px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 90 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={2.5}
                        styles={buildStyles({
                          textColor: "#ff451b",
                          pathColor: "#ff451b",
                          trailColor: "#eee",
                          textSize: "12",
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
                <div className="title">
                  <h3>Wordpress</h3>
                </div>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div style={{ width: "150px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 90 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={2.5}
                        styles={buildStyles({
                          textColor: "#ff451b",
                          pathColor: "#ff451b",
                          trailColor: "#eee",
                          textSize: "12",
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
                <div className="title">
                  <h3>PHP</h3>
                </div>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div style={{ width: "150px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 80 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={2.5}
                        styles={buildStyles({
                          textColor: "#ff451b",
                          pathColor: "#ff451b",
                          trailColor: "#eee",
                          textSize: "12",
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
                <div className="title">
                  <h3>SQL</h3>
                </div>
              </div>
            </div>
          </li>
          {/* End li */}



          <li>
            <div className="list_inner">
              <div style={{ width: "150px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 70 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={2.5}
                        styles={buildStyles({
                          textColor: "#ff451b",
                          pathColor: "#ff451b",
                          trailColor: "#eee",
                          textSize: "12",
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
                <div className="title">
                  <h3>Moodle</h3>
                </div>
              </div>
            </div>
          </li>


          <li>
            <div className="list_inner">
              <div style={{ width: "150px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 60 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={2.5}
                        styles={buildStyles({
                          textColor: "#ff451b",
                          pathColor: "#ff451b",
                          trailColor: "#eee",
                          textSize: "12",
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
                <div className="title">
                  <h3>API REST</h3>
                </div>
              </div>
            </div>
          </li>



          <li>
            <div className="list_inner">
              <div style={{ width: "150px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 80 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={2.5}
                        styles={buildStyles({
                          textColor: "#ff451b",
                          pathColor: "#ff451b",
                          trailColor: "#eee",
                          textSize: "12",
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
                <div className="title">
                  <h3>Javascript</h3>
                </div>
              </div>
            </div>
          </li>



          <li>
            <div className="list_inner">
              <div style={{ width: "150px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 100 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={2.5}
                        styles={buildStyles({
                          textColor: "#ff451b",
                          pathColor: "#ff451b",
                          trailColor: "#eee",
                          textSize: "12",
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
                <div className="title">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
          </li>


          <li>
            <div className="list_inner">
              <div style={{ width: "150px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 95 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={2.5}
                        styles={buildStyles({
                          textColor: "#ff451b",
                          pathColor: "#ff451b",
                          trailColor: "#eee",
                          textSize: "12",
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
                <div className="title">
                  <h3>css</h3>
                </div>
              </div>
            </div>
          </li>


          <li>
            <div className="list_inner">
              <div style={{ width: "150px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 90 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={2.5}
                        styles={buildStyles({
                          textColor: "#ff451b",
                          pathColor: "#ff451b",
                          trailColor: "#eee",
                          textSize: "12",
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
                <div className="title">
                  <h3>Bootstrap</h3>
                </div>
              </div>
            </div>
          </li>



          <li>
            <div className="list_inner">
              <div style={{ width: "150px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 75 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={2.5}
                        styles={buildStyles({
                          textColor: "#ff451b",
                          pathColor: "#ff451b",
                          trailColor: "#eee",
                          textSize: "12",
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
                <div className="title">
                  <h3>Google analytics</h3>
                </div>
              </div>
            </div>
          </li>


          <li>
            <div className="list_inner">
              <div style={{ width: "150px" }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 75 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={2.5}
                        styles={buildStyles({
                          textColor: "#ff451b",
                          pathColor: "#ff451b",
                          trailColor: "#eee",
                          textSize: "12",
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
                <div className="title">
                  <h3>Git</h3>
                </div>
              </div>
            </div>
          </li>


        </ul>
      </div>
    </div>
  );
};

export default SoftwareSkillsCircular;