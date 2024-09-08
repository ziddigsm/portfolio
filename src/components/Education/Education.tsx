import './Education.css';
import ucLogo from '../../assets/uc logo.png';  // Path for University of Cincinnati logo
import kluLogo from '../../assets/klu.png';  // Path for K L University logo
import { useThemeContext } from '../../context/ThemeContext';

function Education() {
  let theme: string = "light";
  const themeProps = useThemeContext();
  if (themeProps.theme === true) 
    theme = "dark";

  const educationDetails = [
    {
      logo: ucLogo,
      university: "University of Cincinnati",
      location: "Cincinnati, Ohio, USA",
      degree: "Master of Engineering",
      major: "Computer Engineering - Data Science",
      duration: "August 2023 - December 2024",
      gpa: "GPA: 3.83"
    },
    {
      logo: kluLogo,
      university: "K L Deemed to be University",
      location: "Vijayawada, Andhra Pradesh, India",
      degree: "Bachelor of Technology",
      major: "Electronics and Communications",
      duration: "June 2017 - May 2021",
      gpa: "GPA: 3.41"
    }
  ];

  return (
    <div className="education" id="Education" data-theme={theme}>
      <div className="education-title">
        <h1>Education</h1>
      </div>
      <div className="education-cards">
        {educationDetails.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="education-logo">
              <img src={edu.logo} alt={`${edu.university} logo`} />
            </div>
            <div className="education-content">
              <h3>{edu.university}</h3>
              <h5>{edu.location}</h5>
              <h2>{edu.degree}</h2>
              <h4>{edu.major}</h4>
              <p>{edu.duration}</p>
              <p>{edu.gpa}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
