import myImage from "../../assets/image4.jpg";
import "./About.css";
import { useThemeContext } from "../../context/ThemeContext";

function About() {
  let theme: string = "light";
  const themeProps = useThemeContext();
  if (themeProps.theme === true) theme = "dark";
  return (
    <>
      <div className="about" id="about" data-theme={theme}>
        <div className="about-title-div">
          <h1 className="about-title">About</h1>
        </div>
        <div className="about-main">
          <div className="about-data">
            <img src={myImage} height={320} className="about-image"></img>
          </div>
          <div className="about-skillset">
            <div className="about-intro">
              <p>
                I’m Ghouse Shahe Meera Ziddi Mohammad, a full-stack software
                engineer with four years of experience building scalable apps
                using React, Node.js, and .NET. I hold a Master’s in Computer
                Engineering from the University of Cincinnati and specialize in
                cloud-native systems on Azure and AWS. I’ve built and deployed
                end-to-end products like ThoughtHub, an AI-powered blog
                platform, and contributed to open-source projects focused on
                social impact. My work has earned recognition including Best Use
                of Generative AI, Employee of the Month at Accenture, and
                multiple hackathon wins. I’m driven by clean architecture,
                performance, and meaningful user experiences — always looking to
                build software that scales and makes a difference.
              </p>
            </div>
            <div className="about-skill-list">
              <div className="about-skill">
                <h3>Backend</h3>{" "}
                <hr className="skill-line-1" style={{ width: "78%" }} />
              </div>
              <div className="about-skill">
                <h3>Frontend</h3>{" "}
                <hr className="skill-line-2" style={{ width: "80%" }} />
              </div>
              <div className="about-skill">
                <h3>UX Design</h3>{" "}
                <hr className="skill-line-3" style={{ width: "63%" }} />
              </div>
              <div className="about-skill">
                <h3>Azure</h3>{" "}
                <hr className="skill-line-4" style={{ width: "68%" }} />
              </div>
              <div className="about-skill">
                <h3>BI</h3>{" "}
                <hr className="skill-line-5" style={{ width: "57%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="achievements">
          <div className="achievement-title">
            <h1>5+</h1>
            <strong>Awards</strong>
          </div>
          <hr />
          <div className="achievement-title">
            <h1>4</h1>
            <strong>Years of Experience</strong>
          </div>
          <hr />
          <div className="achievement-title">
            <h1>5+</h1>
            <strong>Projects</strong>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
