import React, { useState, useEffect } from 'react';
import '../sass/skills.scss';

const Skills: React.FC = () => {
  const logos = [
    { src: "logoTech/htmlLogo.webp", title: "HTML", alt: "Compétences en HTML" },
    { src: "logoTech/cssLogo.webp", title: "CSS", alt: "Compétences en CSS" },
    { src: "logoTech/jsLogo.webp", title: "JAVASCRIPT", alt: "Compétences en JavaScript" },
    { src: "logoTech/reactLogo.webp", title: "REACT", alt: "Compétences en React" },
    { src: "logoTech/sassLogo.webp", title: "SASS", alt: "Compétences en Sass" },
    { src: "logoTech/githubLogo.webp", title: "GITHUB", alt: "Compétences en Github" },
    { src: "logoTech/nodeLogo.webp", title: "NODE", alt: "Compétences en Nodejs" },
    { src: "logoTech/expressLogo.webp", title: "EXPRESS", alt: "Compétences en Expressjs" },
    { src: "logoTech/agileLogo.webp", title: "Méthodologie AGILE", alt: "Compétences en Agile" },
  ];

  const [visibleLogos, setVisibleLogos] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLogos((prev) => (prev < logos.length ? prev + 1 : prev));
    }, 300);

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <div className="skills">
      <h3>Mes compétences</h3>
      <div className="skills_container">
        {logos.map((logo, index) => (<div key={index} className={`skill ${index < visibleLogos ? 'visible' : 'hidden'}`}>
          <img src={logo.src} alt={logo.alt} loading="lazy" />
          <span className="skill_title">{logo.title}</span>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;