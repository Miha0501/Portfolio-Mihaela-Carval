import Section from './Section';
import { FaDownload } from 'react-icons/fa';
import '../sass/presentation.scss';

const Presentation: React.FC = () => {
    return (
        <Section id="presentation" title="Hello! Je suis Mihaela CARVAL">
            <h3>Développeuse web</h3>
            <div className='buttons_container'>
                <button onClick={() => window.location.href = '/cv.pdf'}>
                    <FaDownload /> Télécharger CV
                </button>
                <button onClick={() => window.open('https://github.com/Miha0501', '_blank', 'noopener,noreferrer')}>
                    Voir sur GitHub
                </button>
            </div>
        </Section>
    );
};

export default Presentation;