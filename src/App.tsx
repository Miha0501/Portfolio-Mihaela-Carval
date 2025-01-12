import { BrowserRouter } from "react-router-dom";
import Header from'./components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import ListProjects from './components/ListProjects';
import About from './components/About';
import Presentation from './components/Presentation';
import './sass/app.scss';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Presentation />
      <About />
      <ListProjects />
      <ContactForm/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
