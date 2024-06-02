import klu from '../../assets/klu.png';
import uc from '../../assets/uc logo.png';
import './Education.css'

const Education = () => {
    return (
        <div className='timeline'>
        <div className='container left-container'>
        <img  src={uc} height={80} width={80}/>
        <div className='textbox'>
            <h2>
                University of Cincinnati
            </h2>
            <small> August 2023 - December 2024</small>
            <p>Master of Engineering in Computer Engineering {'\n'} Specialising in Data Science</p>
        </div>
        </div>

        <div className='container right-container'>
        <img  src={klu} height={80} width={80}/>
        <div className='textbox'>
            <h2>
                K L Deemed to be University
            </h2>
            <small> June 2017 - May 2021</small>
            <p>Bachelor of Technology in Electronics and Communication Engineering</p>
        </div>
        </div>
        </div>
    );
};

export default Education;