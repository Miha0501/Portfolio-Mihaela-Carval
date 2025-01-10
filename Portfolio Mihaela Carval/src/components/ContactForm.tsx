import '../sass/contact.scss';
import Section from './Section';
import logoWorkTogether from '../assets/images/logoWorkTogether.jpeg';

const ContactForm: React.FC = () => {
  return (
    <Section id="contact" title="Un projet? Contactez-moi!">
      <>
        <h3>Ouverte aux nouvelles opportunités</h3>
        <div className='container_form'>
          <div className='image_form'>
            <img src={logoWorkTogether} alt="Logo Work Together" />
          </div>
          <form>
            <input type="text" placeholder="Votre nom" required />
            <input type="email" placeholder="Votre email" required />
            <textarea placeholder="Votre message" rows={5} required />
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </>
    </Section>
  );
};

export default ContactForm;