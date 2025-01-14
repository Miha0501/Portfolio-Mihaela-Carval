import '../sass/header.scss';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#presentation">Accueil</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;