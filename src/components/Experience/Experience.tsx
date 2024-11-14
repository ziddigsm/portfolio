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
      duration: "08/2021 – 08/2023"
    },
    {
        logo: efftronics,
      title: "Software Engineer Intern",
      company: "Efftronics Pvt. Ltd. | Vijayawada, India",
      duration: "06/2019 – 02/2020"
    },
    {
        logo: aai,
      title: "Student Intern",
      company: "Airports Authority of India | Vijayawada, India",
      duration: "05/2019 – 05/2019"
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
