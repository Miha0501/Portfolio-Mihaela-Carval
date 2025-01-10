import { useState } from 'react';
import Collapse from './Collapse';
import '../sass/projectCard.scss';

interface ProjectCardProps {
  title: string;
  cover: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, cover }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-text">
          <h3 className="card-title">{title}</h3>
        </div>
      </div>

      <img
        className="card-media" src={`/${cover}`} alt="Photo avec la page d'accueil"/>
      <div className="card-content">
        <p></p>
      </div>
      <div className="card-actions">
<Collapse> <p>A rédiger</p>
</Collapse>
      </div>
        </div>
      )}

export default ProjectCard;
