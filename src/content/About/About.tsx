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
                    <img src={myImage} height={320} className="about-image"></img>
                </div>
                <div className="about-skillset">
                <div className='about-intro'>
                    <p>An experienced software engineer with a proven track record, I bring to the table over 2 years of real-world experience in developing comprehensive web applications. Having honed my skills through two internships during my bachelor’s degree, I am now further expanding my knowledge horizon at the University of Cincinnati, pursuing a master’s degree. I am passionate about leveraging my academic insights and professional expertise to drive innovation and efficiency in the tech industry.</p>
                    </div>
                   <div className='about-skill-list'>
                   <div className="about-skill">
                        <h3>Backend</h3> <hr className='skill-line-1' style={{width: "78%"}}/>
                    </div>
                    <div className="about-skill">
                        <h3>Frontend</h3> <hr className='skill-line-2' style={{width: "69%"}}/>
                    </div>
                    <div className="about-skill">
                        <h3>UX Design</h3> <hr className='skill-line-3' style={{width: "63%"}}/>
                    </div>
                    <div className="about-skill">
                        <h3>Azure</h3> <hr className='skill-line-4' style={{width: "68%"}}/>
                    </div>
                    <div className="about-skill">
                        <h3>BI</h3> <hr className='skill-line-5' style={{width: "57%"}}/>
                    </div>
                   </div>
                </div>
                </div>
                <div className="achievements">
                    <div className='achievement-title'>
                        <h1>5+</h1>
                        <strong>Awards</strong>
                    </div>
                    <hr />
                    <div className='achievement-title'>
                        <h1>2+</h1>
                        <strong>Years of Experience</strong>
                    </div>
                    <hr />
                    <div className='achievement-title'>
                        <h1>4</h1>
                        <strong>Projects</strong>
                    </div>
                </div>
            </div>
        </>
     );
}

export default About;