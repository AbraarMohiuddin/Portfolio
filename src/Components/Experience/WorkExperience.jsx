import React from "react";
import "./WorkExperience.css";
import themepattern from "../../assets/theme_pattern.svg";

const WorkExperience = () => {
  return (
    <div id="experience" className="work-experience">
      <div className="work-title">
        <h1>Work Experience</h1>
        <img src={themepattern} alt="Theme pattern" />
      </div>

      <div className="work-content">
        <div className="experience">
          <h3>Software Developer Intern</h3>
          <p>
            <strong>Spendable Inc.</strong> | Dec 2023 – Current
          </p>
          <p
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px 0",
              backgroundColor: "white",
              color: "black",
            }}
          >
            <strong>
              Skills Acquired: React.js | TypeScript | AWS | Redux | SCSS |
              RESTful APIs | API Integration | Responsive Design | Accessibility
              Standards (WCAG) | Performance Optimization
            </strong>
          </p>
          <ul>
            <li>
              Developed and optimized key features for{" "}
              <b>the world’s first debit card </b>web app for the
              specially-abled, using React.js with TypeScript, ensuring
              cross-device compatibility and a smooth user experience.
            </li>
            <li>
              Designed and implemented AWS Lambda functions to handle serverless
              backend operations, including automated transaction processing and
              user data validation, improving scalability and reducing latency.
            </li>
            <li>
              Re-engineered the user onboarding process with RESTful APIs by
              breaking down lengthy sign-up workflows into smaller, intuitive
              steps, resulting in a 60% increase in autonomous user onboarding.
            </li>
            <li>
              Implemented Redux for state management and modularized styling
              with SCSS, resulting in a 25% improvement in application
              performance and maintainability.
            </li>
            <li>
              Integrated APIs for real-time transaction monitoring and
              analytics, improving user insights and operational efficiency.
            </li>
            <li>
              Redesigned the front-end architecture making it completely
              responsive and to meet WCAG standards, ensuring accessibility for
              users with disabilities and improving user retention by 40%.
            </li>
          </ul>
        </div>

        <div className="experience">
          <h3>Student Developer</h3>
          <p>
            <strong>Qeeri.AI</strong> | Feb 2024 – November 2024
          </p>
          <p
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px 0",
              backgroundColor: "white",
              color: "black",
            }}
          >
            <strong>
              Skills Acquired: ASP.NET | ReactJS | Tailwind CSS | RESTful APIs |
              Azure SQL | Azure CI/CD | GitHub Workflows | Full-Stack
              Development | Cloud Deployment
            </strong>
          </p>
          <ul>
            <li>
              Lead Developer for the Student Team at Qeeri.AI, whose platform
              NorthStar is an AI-powered career suggestion and development tool
              for students.
            </li>
            <li>
              Designed and implemented front-end and back-end for multiple
              assessments that users take on the platform, and made the site
              responsive using ReactJS and Tailwind CSS.
            </li>
            <li>
              Developed the backend services using ASP.NET Core Web API for
              several functionalities such as User Profile Scoring, assessment
              data processing, and feedback generation.
            </li>
            <li>
              Crafted a pipeline to send assessment results as well as feedback
              from front-end to Azure SQL database, and user details and images
              to Azure Blob Storage.
            </li>
            <li>
              Integrated external APIs including GPT-4 Turbo and sent user game
              data for feedback and career suggestions.
            </li>
            <li>
              Implemented RESTful APIs and managed database interactions to
              support front-end applications.
            </li>
            <li>
              Deployed the front-end and back-end on Azure Containers and set up
              a CI/CD pipeline using GitHub Workflows to ensure seamless
              integration, automated testing, and continuous deployment.
            </li>
          </ul>
        </div>
        <div className="experience">
          <h3>Student Developer</h3>
          <p>
            <strong>Aquis Atlantis Enterprises</strong> | Feb 2023 – May 2023
          </p>
          <p
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px 0",
              backgroundColor: "white",
              color: "black",
            }}
          >
            <strong>
              Skills Acquired: React.js | Figma | UI/UX Design | MySQL |
              Database Architecture | Jest | React Testing Library | Redux |
              Responsive Design | State Management | Unit Testing | Front-End
              Development
            </strong>
          </p>
          <ul>
            <li>
              Lead a comprehensive 12-week, industry-linked project primarily as
              a Front-End Developer, employing Figma for iterative UI/UX design
              and developing the application's front-end using ReactJS,
              implementing responsive design patterns and state management
              practices.
            </li>
            <li>
              Redesigned and optimized database architecture using MySQL,
              ensuring data integrity and scalability.
            </li>
            <li>
              Designed and implemented unit tests using Jest and React Testing
              Library, validating UI components and Redux state management under
              various scenarios.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
