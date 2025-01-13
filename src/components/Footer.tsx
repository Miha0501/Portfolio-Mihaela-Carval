import '../sass/footer.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className='all_rights'>
        <span>© 2025 Created by Mihael@dev.com</span>
      </div>
      <div className='social_links'>
        <p>Suivez-moi sur :</p>
        <a href="https://github.com/Miha0501" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/mihaela-balan-914045151/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
