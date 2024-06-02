import myImage from "../../assets/ziddi.jpeg"
import Typist from 'react-typist-component';
import './Home.css'
import myimg from '../../assets/klu.png'
import { SocialIcons } from "../../components/Social/Social";
import { useThemeContext } from "../../context/ThemeContext";

function Home() {
    let theme: string = "light";
  const themeProps = useThemeContext();
  if (themeProps.theme === true) 
    theme = "dark";
    const bio = "Embarking on a journey through the digital cosmos, I’m Ghouse Shahe Meera Ziddi Mohammad, a navigator of the data science realm, currently honing my skills in Computer Engineering at the University of Cincinnati. As I continue to master my craft, I’m on the lookout for challenging internships to apply my knowledge and further sharpen my abilities."
    const exp = "Ex-Accenture - India | Ex-Efftronics - India"
    return (
        <div className="home" id="Home" data-theme = {theme}>
        <div className="name" >
             <img src = {myImage} width="200" height="200" alt="My Image" className="circular"/>
             <div className="name-bio">
             <h1 className="nameonly"> <Typist typingDelay={70} loop={false}>Ghouse Shahe Meera Ziddi Mohammad</Typist></h1>
             <p className="exp" data-theme = {theme}>{exp}</p>
             </div>
         </div>
         <div className="bio">
         <SocialIcons />
            <span className="biodata">{bio}</span>
            <button className="resume" title="Download my Resume">
            <a href={myimg} download="Resume">My Resume</a>
            </button>
         </div>
        </div>
    )
}

export default Home;