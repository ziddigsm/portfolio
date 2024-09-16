import accenture from '../../assets/accenture.png';
import revuc from '../../assets/revuc.png';
import hwi from '../../assets/hwi.jpg';
import "./Awards.css";

export function Awards(){
    const awards = [
        {
            title: "Best Product Market Fit - Bard Tales",
            date: "February 2024",
            company: "University of Cincinnati - Revolution UC",
            image: revuc
          },
          {
            title: "Best use of Generative AI - Bard Tales",
            date: "February 2024",
            company:"University of Cincinnati - Revolution UC",
            image: revuc
          },
        {
          title: "Employee of the Month - DU Superstar",
          date: "May 2023",
          company: "Accenture",
          image: accenture,
        },
        {
          title: "Accenture Technology Analyst School Challenge Winner",
          date: "November 2021",
          company: "Accenture",
          image: accenture
        },
        {
            title: "HackWithInfy System Engineer Specialist Winner 2020",
            date: "July 2020",
            company: "Infosys",
            image: hwi
          },
      ];
  return (
    <div className="awards-section" id='Awards'>
      <h2 className="title">Awards & Recognitions</h2>
      <div className="awards">
        {awards.map((award, index) => (
          <div className="award-with-image" key={index}>
            <div className="award-logo-container">
              <img
                src={award.image}
                alt={`${award.company} logo`}
                className="logo"
              />
            </div>
            <div className="award">
              <h3 className="award-title">{award.title}</h3>
              <p className="date">{award.date}</p>
              <p className="company">{award.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
