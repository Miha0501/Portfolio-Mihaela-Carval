import htmlLogo from "../assets/skills-logo/htmlLogo.png";
import cssLogo from "../assets/skills-logo/cssLogo.png";
import jsLogo from "../assets/skills-logo/jsLogo.png";
import reactLogo from "../assets/skills-logo/reactLogo.png";
import sassLogo from '../assets/skills-logo/sassLogo.png';
import githubLogo from '../assets/skills-logo/githubLogo.png';
import nodeLogo from '../assets/skills-logo/nodeLogo.png';
import expressLogo from '../assets/skills-logo/expressLogo.png';
import agileLogo from '../assets/skills-logo/agileLogo.png';
import '../sass/skills.scss';

const Skills: React.FC = () => {
  const logos = [
    { src: htmlLogo, alt: "HTML" },
    { src: cssLogo, alt: "CSS" },
    { src: jsLogo, alt: "JavaScript" },
    { src: reactLogo, alt: "React" },
    { src: sassLogo, alt: "Sass" },
    { src: githubLogo, alt: "Github" },
    { src: nodeLogo, alt: "Nodejs" },
    { src: expressLogo, alt: "Expressjs" },
    { src: agileLogo, alt: "Agile" },
  ];

  return (
    <section className="skills">
      <h3>Mes compétences</h3>
      <div className="skills-grid">
        {logos.map((logo, index) => (
          <div key={index} className="skill">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;