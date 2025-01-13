import '../sass/skills.scss';

const Skills: React.FC = () => {
  const logos = [
    { src: "logoTech/htmlLogo.webp", title:"HTML", alt: "HTML" },
    { src: "logoTech/cssLogo.webp", title:"CSS", alt: "CSS" },
    { src: "logoTech/jsLogo.webp", title:"JAVASCRIPT", alt: "JavaScript" },
    { src: "logoTech/reactLogo.webp", title:"REACT", alt: "React" },
    { src: "logoTech/sassLogo.webp", title:"SASS", alt: "Sass" },
    { src: "logoTech/githubLogo.webp", title:"GIT HUB", alt: "Github" },
    { src: "logoTech/nodeLogo.webp", title:"NODE JS", alt: "Nodejs" },
    { src: "logoTech/expressLogo.webp", title:"EXPRESS JS", alt: "Expressjs" },
    { src: "logoTech/agileLogo.webp", title:"Méthodologie AGILE", alt: "Agile" },
  ];

  return (
    <div className="skills">
      <h3>Mes compétences</h3>
      <div className="skills_container">
        {logos.map((logo, index) => (<div key={index} className="skill">
          <img src={logo.src} alt={logo.alt} loading="lazy"/>
          <span className="skill_title">{logo.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;