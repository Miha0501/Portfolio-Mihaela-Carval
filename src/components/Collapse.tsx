import { useState, ReactNode } from 'react';
import '../sass/collapse.scss';

interface CollapseProps {
  children: ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={handleCollapse}>
        <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
      </div>
      <div className={`collapse-content ${isOpen ? 'show' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
