import myImage from "../../assets/image2.jpg"
import './About.css'
import { useThemeContext } from '../../context/ThemeContext';

function About() {
    let theme: string = "light";
  const themeProps = useThemeContext();
  if (themeProps.theme === true) 
  theme = "dark";
    return ( 
        <>
            <div className="about" id='about' data-theme = {theme}>
                <div className="about-title-div">
                <h1 className="about-title">About</h1>
                </div>
                <div className="about-main">
                <div className="about-data">
                    <img src={myImage} height={320}></img>
                </div>
                <div className="about-skillset">
                <div className='about-intro'>
                    <p>An experienced full-stack engineer with a proven track record, I bring to the table over 2 years of real-world experience in developing comprehensive web applications. Having honed my skills through two internships during my bachelor’s degree, I am now further expanding my knowledge horizon at the University of Cincinnati, pursuing a master’s degree. I am passionate about leveraging my academic insights and professional expertise to drive innovation and efficiency in the tech industry.</p>
                    {//<p>Architect of the digital realm, I sculpt the backend with the chisel of Node and C#, craft the frontend with the palette of React, HTML, CSS, and JavaScript, and construct the infrastructure with the blueprint of Azure and Kubernetes. Together, they form the symphony of my tech expertise.</p> 
                    }
                    </div>
                   <div className='about-skill-list'>
                   <div className="about-skill">
                        <h3>Node.js</h3> <hr className='skill-line' style={{width: "78%"}}/>
                    </div>
                    <div className="about-skill">
                        <h3>React</h3> <hr className='skill-line' style={{width: "50%"}}/>
                    </div>
                    <div className="about-skill">
                        <h3>C#</h3> <hr className='skill-line' style={{width: "63%"}}/>
                    </div>
                    <div className="about-skill">
                        <h3>Azure</h3> <hr className='skill-line' style={{width: "68%"}}/>
                    </div>
                    <div className="about-skill">
                        <h3>HTML & CSS</h3> <hr className='skill-line' style={{width: "57%"}}/>
                    </div>
                   </div>
                </div>
                </div>
                <div className="achievements">
                    <div className='achievement-title'>
                        <h1>3+</h1>
                        <strong>Awards</strong>
                    </div>
                    <hr />
                    <div className='achievement-title'>
                        <h1>2+</h1>
                        <strong>Years of Experience</strong>
                    </div>
                    <hr />
                    <div className='achievement-title'>
                        <h1>3</h1>
                        <strong>Projects</strong>
                    </div>
                </div>
            </div>
        </>
     );
}

export default About;