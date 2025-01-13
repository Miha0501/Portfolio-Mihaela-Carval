import Collapse from './Collapse';
import { FaGithub } from 'react-icons/fa';
import '../sass/projectCard.scss';

interface ProjectCardProps {
  title: string;
  cover: string;
  altImage: string;
  tech: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, cover, altImage, tech, description }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-text">
          <h3 className="card-title">{title}</h3>
        </div>
      </div>

      <img
        className="card-media" src={`/${cover}`} alt={altImage} />
      <div className="card-content">
        <p>{tech}</p>
      </div>
      <div className="card-actions">
        <Collapse>
          <p>{description}</p>
                  <a href="https://github.com/Miha0501" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub size={24} />
                  </a>
        </Collapse>
      </div>
    </div>
  )
}

export default ProjectCard;
