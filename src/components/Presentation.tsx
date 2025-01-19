import Section from './Section';
import { FaDownload, FaGithub } from 'react-icons/fa';
import '../sass/presentation.scss';

const Presentation: React.FC = () => {
    return (
        <Section id="presentation" title="Hello! Je suis Mihaela CARVAL">
            <h3>Développeuse web</h3>
            <div className='buttons_container'>
                <button onClick={() => window.open('/cvportfolio/cv.pdf', '_blank')}>
                    <FaDownload /> Télécharger CV
                </button>
                <button onClick={() => window.open('https://github.com/Miha0501', '_blank', 'noopener,noreferrer')}>
                    <FaGithub/> Voir sur GitHub
                </button>
            </div>
        </Section>
    );
};

export default Presentation;