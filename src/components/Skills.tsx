import '../sass/skills.scss';

const Skills: React.FC = () => {
  const logos = [
    { src: "logoTech/htmlLogo.webp", alt: "HTML" },
    { src: "logoTech/cssLogo.webp", alt: "CSS" },
    { src: "logoTech/jsLogo.webp", alt: "JavaScript" },
    { src: "logoTech/reactLogo.webp", alt: "React" },
    { src: "logoTech/sassLogo.webp", alt: "Sass" },
    { src: "logoTech/githubLogo.webp", alt: "Github" },
    { src: "logoTech/nodeLogo.webp", alt: "Nodejs" },
    { src: "logoTech/expressLogo.webp", alt: "Expressjs" },
    { src: "logoTech/agileLogo.webp", alt: "Agile" },
  ];

  return (
    <section className="skills">
      <h3>Mes compétences</h3>
      <div className="skills_container">
        {logos.map((logo, index) => (<div key={index} className="skill">
          <img src={logo.src} alt={logo.alt} loading="lazy"/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;