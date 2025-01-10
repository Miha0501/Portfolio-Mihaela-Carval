import jobs from '../data/jobs.json';
import ProjectCard from './ProjectCard';
import Section from './Section';
import '../sass/listprojects.scss';

interface jobs {
  title: string;
  cover: string;
}
const ListProjects: React.FC = () => {
  return (
    <Section id="portfolio" title="PROJETS">
      <div className="projects_container">
        {jobs.map((elt, index) => <ProjectCard key={index} {...elt} />)}
      </div>
    </Section>)
}
export default ListProjects;