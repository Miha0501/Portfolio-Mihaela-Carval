import Section from './Section';
import Skills from './Skills';
import '../sass/about.scss';

const About: React.FC = () => {
  return (
    <>
      <Section id="about" title="A PROPOS">
        <div className='about_container'>
        <div className='soft_skills'>Soft skills</div>
        <div className='speech'>Passionnée et déterminée j'ai a su réinventer mon parcours en passant de la gestion immobilière et comptable au développement web. Habituée à allier vision stratégique et attention aux détails, j'aime créer des interfaces web esthétiques, fonctionnelles et centrées sur l'expérience utilisateur. <br/>Animée par la curiosité et l'envie de relever de nouveaux défis, je suis prête à contribuer avec enthousiasme au monde des technologies web
        </div>
        </div>
      </Section>
      <Skills />
    </>
  );
};

export default About;