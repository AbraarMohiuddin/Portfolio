import React from "react";
import "./About.css";
import themepattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/main.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="abouttitle">
        <h1>About Me</h1>
        <img src={themepattern} />
      </div>
      <div className="aboutsections">
        <div className="aboutleft">
          <img src={profile_img} className="profileimg" />
        </div>
        <div className="aboutright">
          <div className="right1">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <br></br>
            <div className="education">
              <h1>
                <b>Education</b>
              </h1>
              <div className="degree">
                <h2>Bachelor of Computer Science</h2>
                <h3>
                  <i>Swinburne University of Technology</i>
                </h3>
              </div>
              <br></br>
              <h3>GPA 3.7 | WAM: 83</h3>
              <p>
                Received a Letter of Commendation for being one of the top
                students in the course.{" "}
              </p>
            </div>
            <br></br>
            <div className="star">
              <h1 className="starhead">Star Achievement</h1>
              <p>
                Awarded a Certificate of Achievement and a Scholarship by the
                <b> Victorian Chamber of Commerce </b>for earning a position in
                the highly competitive SummerTech Live Program, after being
                selected as one of the 60 students across all Victorian
                Universities.
              </p>
              <p>
                {" "}
                Secured an internship at SpendAble through this prestigious
                program.
              </p>
              <a
                href="/certificate.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="view-link"
              >
                <b>View </b>
                <span className="arrow">→</span>
              </a>{" "}
            </div>
            <br></br>
          </div>
          <div className="rightskills">
            <div className="skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="skill">
              <p>C++/C#</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="skill">
              <p>JavaScript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="skill">
              <p>ReactJS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="skill">
              <p>ASP.NET</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="skill">
              <p>React Native</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="skill">
              <p>Node.js</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="achievements">
        <div className="achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>3.7</h1>
          <p>GPA</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>3</h1>
          <p>INDUSTRY EXPERIENCES COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
