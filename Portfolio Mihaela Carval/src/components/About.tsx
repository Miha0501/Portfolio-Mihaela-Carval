import Section from './Section';
import Skills from './Skills';
import '../sass/about.scss';

const About: React.FC = () => {
  return (
    <>
      <Section id="about" title="A PROPOS">
        <p>Soft skills</p>
        <p>Short présentation</p>
      </Section>
      <Skills />
    </>
  );
};

export default About;