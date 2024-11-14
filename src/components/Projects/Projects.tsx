import "./Projects.css";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "ThoughtHub - Blogging Platform (Frontend)",
      description:
        "ThoughtHub is a full-stack web application that allows users to create, read, update, and delete blogs in various categories such as Tech, Science, Cooking, Entertainment, and more. Built with a modern tech stack, it uses React for the frontend, GoLang for the backend, and PostgreSQL for the database. The app also includes Google OAuth authentication and integrated Generative AI for blog summarization.",
      githubLink: "https://github.com/ziddigsm/thoughtHub_Frontend",
    },
    {
      title: "ThoughtHub - Blogging Platform (Backend)",
      description:
        "ThoughtHub is a full-stack web application enabling blog CRUD operations across multiple categories. Built with React (frontend), GoLang (backend), and PostgreSQL (database), it features Google OAuth for user authentication and Generative AI for blog summarization.",
      githubLink: "https://github.com/ziddigsm/thoughtHub_Backend",
    },
    {
      title: "Bard Tales",
      description:
        "Bard Tales is a web app that takes a text-based story and recites it with emotionally relevant musical backgrounds. This project uses AWS Polly for TTS, Meta's MusicGen AI for music generation, Google Gemini for prompt engineering, Flask for the backend, and HTML/CSS for the frontend.",
      githubLink: "https://github.com/ziddigsm/BardTales",
    },
    {
      title: "Portfolio",
      description:
        "React Portfolio is a personal website using React and TypeScript, showcasing React hooks, reusable JSX components, and responsive design with React-Bootstrap. It includes a contact form and is deployed on GitHub Pages.",
      githubLink: "https://github.com/ziddigsm/portfolio",
    },
    {
      title: "Flowlog Parser",
      description:
        "Flowlog Parser is a Node.js and Express.js API server that processes flowlog files, correlating them with a CSV lookup table based on port and protocol. It outputs a CSV file containing results and a table of port-protocol counts.",
      githubLink: "https://github.com/ziddigsm/FlowLogParsing",
    },
    {
      title: "Underwater Target Tracking",
      description:
        "This project utilizes passive sonar data to track underwater targets, combining Particle Filtering (PF) and Extended Kalman Filter (EKF) to improve target position, speed, and course estimates in nonlinear environments.",
      githubLink: "",
    },
  ];

  return (
    <div className="projects-section" id="Projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                className="icon github"
                rel="noopener noreferrer"
              >
                <FaGithub className="social github" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
