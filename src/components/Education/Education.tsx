import "./Education.css";
import kluImg from "../../assets/klu.png";
import ucImg from "../../assets/uc logo.png";
import { useThemeContext } from "../../context/ThemeContext";

export function Education() {
    let theme: string = "light";
  const themeProps = useThemeContext();
  if (themeProps.theme === true) 
  theme = "dark";
  return (
    <>
      <div className="edu-container" id='Education' data-theme={theme}>
        <h2 className="title">Education</h2>
        <ul className="universities">
          <li className="uni-list">
            <img className="uni-logo" src={ucImg}></img>
            <div className="university-details uc">
              <h4>University of Cincinnati</h4>
              <a>Cincinnati, Ohio, USA</a>
              <p>Master of Engineering</p>
              <p>Computer Engineer - Data Science</p>
              <p>August 2023 - December 2024</p>
              <p>GPA - 3.83</p>
            </div>
          </li>
          <li className="uni-list">
            <img className="uni-logo" src={kluImg}></img>
            <div className="university-details klu">
              <h4>K L University</h4>
              <a>Vijayawada, India</a>
              <p>Bachelor of Technology</p>
              <p>Electronics and Communications</p>
              <p>July 2017 - May 2021</p>
              <p>GPA - 3.41</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
