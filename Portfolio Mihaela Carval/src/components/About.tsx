import Section from './Section';
import Skills from './Skills';
import { GiBatteries } from "react-icons/gi";
import { FcIdea } from "react-icons/fc";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { FaCalendarCheck } from "react-icons/fa";
import '../sass/about.scss';

const About: React.FC = () => {
  return (
    <>
      <Section id="about" title="A PROPOS">
        <div className='about_container'>
          <div className='soft_skills'>
            <div className="soft_skills_items">
              <div className="soft_skill">
                <div className="soft_skill_icon">
                  <GiBatteries size={32} />
                </div>
                <div className="soft_skill_label">Autonome</div>
              </div>
              <div className="soft_skill">
                <div className="soft_skill_icon">
                  <FcIdea size={32} />
                </div>
                <div className="soft_skill_label">Innovante</div>
              </div>
              <div className="soft_skill">
                <div className="soft_skill_icon">
                  <FaCalendarCheck size={32} />
                </div>
                <div className="soft_skill_label">Organisée</div>
              </div>
              <div className="soft_skill">
                <div className="soft_skill_icon">
                  <TfiCommentsSmiley size={32} />
                </div>
                <div className="soft_skill_label">Enthousiaste</div>
              </div>
            </div>
            <div className='speech'>Passionnée et déterminée j'ai a su réinventer mon parcours en passant de la gestion immobilière et comptable au développement web. Habituée à allier vision stratégique et attention aux détails, j'aime créer des interfaces web esthétiques, fonctionnelles et centrées sur l'expérience utilisateur. <br />Animée par la curiosité et l'envie de relever de nouveaux défis, je suis prête à contribuer avec enthousiasme au monde des technologies web
            </div>
          </div>
          </div>
      </Section>
      <Skills />
    </>
  );
};

export default About;