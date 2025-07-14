import myImage from "../../assets/ziddi.jpeg";
import Typist from "react-typist-component";
import "./Home.css";
import { SocialIcons } from "../../components/Social/Social";
import { useThemeContext } from "../../context/ThemeContext";

function Home() {
  let theme: string = "light";
  const themeProps = useThemeContext();
  if (themeProps.theme === true) theme = "dark";
  const bio =
    "Hi, I’m Ghouse Shahe Meera Ziddi Mohammad, a full-stack software engineer with four years of hands-on experience building scalable, cloud-native applications. My core strengths lie in React, React Native, Node.js, and C#.NET, with solid experience deploying solutions to Azure and AWS. I’ve led efforts in designing efficient frontends, integrating backend APIs, and implementing DevOps pipelines using tools like Azure DevOps, Docker, and Kubernetes. I’m a recent Master’s Gradute in Computer Engineering at the University of Cincinnati, and I’m passionate about crafting clean, user-focused applications that perform well at scale.";
  const exp = "Ex-One Community Global | Ex-Accenture | Ex-Efftronics";
  return (
    <div className="home" id="Home" data-theme={theme}>
      <div className="name">
        <img
          src={myImage}
          width="200"
          height="200"
          alt="My Image"
          className="circular"
        />
        <div className="name-bio">
          <h1 className="nameonly">
            {" "}
            <Typist typingDelay={70} loop={false}>
              Ghouse Shahe Meera Ziddi Mohammad
            </Typist>
          </h1>
          <p className="exp" data-theme={theme}>
            {exp}
          </p>
        </div>
      </div>
      <div className="bio">
        <SocialIcons />
        <span className="biodata">{bio}</span>
      </div>
    </div>
  );
}

export default Home;
