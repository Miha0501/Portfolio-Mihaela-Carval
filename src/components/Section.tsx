import { ReactNode } from 'react'; // voir avec Dylan

interface SectionProps {
    title: string;
    id: string;
    children?: ReactNode;
  }
  
  const Section: React.FC<SectionProps> = ({ title, id, children }) => {
    return (
      <section id={id}>
        <h2>{title}</h2>
        {children}
      </section>
    );
  };
  
  export default Section;