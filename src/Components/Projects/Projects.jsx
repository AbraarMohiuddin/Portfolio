import React from "react";
import "./Projects.css";
import themepattern from "../../assets/theme_pattern.svg";
import northstar from "../../assets/northstar.png";
import bookquest from "../../assets/bookquest.png";
import dex from "../../assets/dex.png";
import plane from "../../assets/plane.png";
import portfolio from "../../assets/portfolio.png";
import restaurant from "../../assets/restaurant.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "NorthStar",
      description:
        "An AI-powered career development platform that provides interactive quizzes using dynamic content. Built as part of Industry Project with Qeeri.AI, using React.js, ASP.NET Web API, Flask, and Azure. Features include AI-driven quiz questions, personalized feedback, and user authentication with ASP.NET Identity.",
      image: northstar,
      github: "https://github.com/yourusername/northstar",
    },
    {
      id: 2,
      title: "BookQuest",
      description:
        "A dynamic web application for book discovery and exploration, built with Vue.js and a PHP-MySQL Back-End. It integrates the OpenLibrary API for real-time book data. Users can search for books by title, author, or genre, and explore sections for featured books, bestsellers, authors, and genres.",
      image: bookquest,
      github: "https://github.com/AbraarMohiuddin/BookQuest",
    },
    {
      id: 3,
      title: "Decentralized Exchange App",
      description:
        "A decentralized exchange (DEX) web application for seamless cryptocurrency trading. Built with React.js, Axios, and a Crypto API for real-time market data. Features include wallet connection using Web3.js, smart contract integration for secure transactions, and user account management with MySQL.",
      image: dex,
      github: "https://github.com/AbraarMohiuddin/DecentralizedExchange",
    },
    {
      id: 4,
      title: "C++ Space Battles",
      description:
        "A simple Space Battles game built in advanced C++ featuring high-quality graphics, real-time scoring, a minimap, unique spaceships with varied abilities, and dynamic gameplay. Includes multithreading, optimized physics, and immersive visual and audio effects.",
      image: plane,
      github: "https://github.com/abrmcs/Space-Game",
    },
    {
      id: 5,
      title: "BookHub",
      description:
        "A simple CRUD application for managing bookstore records. Built with ASP.NET Core, Bootstrap, and Azure SQL Database. Implements MVC architecture, routing, and CI/CD pipeline using GitHub Workflows, Docker for testing, and Azure Containers for deployment.",
      image: restaurant,
      github: "https://github.com/AbraarMohiuddin/BookWeb",
    },
    {
      id: 6,
      title: "Portfolio",
      description:
        "A dynamic portfolio built with React.js and MUI, showcasing my projects, resume, and experiences. It features advanced functionality like smooth scrolling, responsive design, Web3Forms for contact form, and a great user experience.",
      image: portfolio,
      github: "https://github.com/yourusername/northstar",
    },
  ];

  return (
    <div className="projects">
      <div className="projects-title">
        <h1>My Projects</h1>
        <img src={themepattern} alt="Theme pattern" />
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="projectbuttons">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="view-button"
              >
                View
              </a>
              {project.code ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-button"
                >
                  View
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
