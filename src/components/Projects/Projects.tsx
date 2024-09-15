import "./Projects.css";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Bard Tales",
      description: "Bard Tales is a web application designed to take in a story in text format, and then recite it back with emotionally relevant musical background. The project uses AWS Polly for text-to-speech conversion, Meta's MusicGen AI model to generate music, Google Gemini for prompt engineering, and Flask for the backend, in addition to using HTML and CSS for the frontend. ",
      githubLink: "https://github.com/ziddigsm/BardTales",
    },
    {
      title: "Portfolio",
      description: "React Portfolio is a personal website, built using React and TypeScript, that includes key core concepts of React like hooks, reusable JSX components, and responsive design along with React-Bootstrap. It has a form for user to input their information and reach out via email, and is publicly accessible, deployed on GitHub Pages. ",
      githubLink: "https://github.com/ziddigsm/portfolio",
    },
    {
      title: "Flowlog Parser",
      description: "The application Flowlog Parser is a backend server with single API developed with Node.js and Express.js that takes in flowlog files and correlates them with a lookup table (CSV format) based on destination port and protocol. The output of this application is a CSV file that contains the associated results and an additional table for identifying all port-protocol combinations & their counts. ",
      githubLink: "https://github.com/ziddigsm/FlowLogParsing",
    },
    {
        title: "Underwater Target Tracking",
        description: "This project tracks underwater targets using passive sonar data, employing a combination of Particle Filtering (PF) and Extended Kalman Filter (EKF) to enhance accuracy in nonlinear environments. It aims to improve target position, speed, and course estimates while addressing tracking errors.",
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
            {!project.githubLink ? project.githubLink : <a href={project.githubLink} target='_blank' className='icon github'><FaGithub className='social github'/></a>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
