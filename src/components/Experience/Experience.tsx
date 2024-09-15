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
        "Created a persona-based capital project management system, increasing project operational effectiveness within the procurement and construction execution workflows.",
        "Integrated AI based ticket remediation for KPI monitoring, improving the issue detection and resolution by 26%.",
        "Streamlined ETL Pipelines with C#, automating processes and eliminating three major sources of manual intervention and error",
        "Designed and deployed over 130 REST APIs via Node.js, Express.js to support trade risk management, planning and optimization, while improving operational efficiency, and reducing manual errors.",
        "Incorporated crude price, tracking and market news into the web application via Scheduler jobs, facilitating real-time insights for improved supply and trade assessments.",
        "Optimized production planning and feedstock selection developing RESTful APIs to handle annual, monthly and daily planning data, saving $35 million every year.",
        "Maintained faster rendering and reduced load times by 18% through implementation of lazy loading and asynchronous data fetching techniques.",
        "Incorporated engaging KPI dashboards for real-time business insights, providing real-time insights."
      ],
    },
    {
        logo: efftronics,
      title: "Software Engineer Intern",
      company: "Efftronics Pvt. Ltd. | Vijayawada, India",
      duration: "06/2019 – 02/2020",
      details: [
        "Developed modular and reusable react components, decreasing code duplicity by 28%.",
        "Integrated interactive and interactive PowerBI reports, allowing stakeholders to make data-driven decisions.",
        "Improved Data Retrieval by incorporating GraphQL, reducing response time by 12% and preventing over-fetching of data."
      ],
    },
    {
        logo: aai,
      title: "Student Intern",
      company: "Airports Authority of India | Vijayawada, India",
      duration: "05/2019 – 05/2019",
      details: [
        "Developed serverless APIs using Azure Functions and C# as a student intern at AAI, improving response times by 16%, resulting in faster page loading and improved user experience.",
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
