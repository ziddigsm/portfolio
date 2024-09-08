import "./Experience.css";
import { useThemeContext } from "../../context/ThemeContext";
import accenture from "../../assets/accenture.png";
import efftronics from "../../assets/efftronics.png";
import aai from "../../assets/aai.png";

function Experience() {
  let theme: string = "light";
  const themeProps = useThemeContext();
  if (themeProps.theme === true) theme = "dark";

  const experiences = [
    {
        logo: accenture,
      title: "Full Stack Engineering Analyst",
      company: "Accenture | Hyderabad, India",
      duration: "08/2021 – 08/2023",
      details: [
        "Developed and maintained web applications using C#, .NET MVC, LINQ, and Entity Framework.",
        "Designed over 30 automated Dataflow pipelines using Azure Data Factory, improving data processing efficiency.",
        "Built over 130 RESTful APIs in Node.js, Express.js and C#, saving the client over $18 million annually.",
        "Led the backend team during lead absences and improved product delivery by 23% using Agile planning.",
        "Recipient of Employee of the Month Award for exemplified contributions to the project success. ",
        "Developed robust user interfaces using React for seamless interactivity, effectively applying expertise in TypeScript and JavaScript. "
      ],
    },
    {
        logo: efftronics,
      title: "Software Engineer Intern",
      company: "Efftronics Pvt. Ltd. | Vijayawada, India",
      duration: "06/2019 – 02/2020",
      details: [
        "Collaborated on an Agile team to build a React app, improving user experience.",
        "Refined code reusability by 28% through the development of modular components.",
      ],
    },
    {
        logo: aai,
      title: "Student Intern",
      company: "Airports Authority of India | Vijayawada, India",
      duration: "05/2019 – 05/2019",
      details: [
        "Contributed to infrastructure monitoring and management systems.",
      ],
    },
  ];

  return (
    <div className="experience" id="Experience" data-theme={theme}>
      <div className="experience-title">
        <h1>Experience</h1>
      </div>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div className={`experience-card ${index % 2 === 0 ? "left" : "right"}`} key={index}>
            <img src={exp.logo} alt={`${exp.company} logo`} className="experience-logo" />
            <div className="experience-content">
              <h2>{exp.title}</h2>
              <h3>{exp.company}</h3>
              <h4>{exp.duration}</h4>
              <ul>
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
