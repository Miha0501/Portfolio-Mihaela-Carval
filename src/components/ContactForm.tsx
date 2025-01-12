import '../sass/contact.scss';
import Section from './Section';

const ContactForm: React.FC = () => {
  return (
    <Section id="contact" title="Un projet? Contactez-moi!">
      <>
        <h3>Ouverte aux nouvelles opportunités</h3>
        <div className='container_form'>
          <div className='image_form'>
            <img src="imageContact/logoWorkTogether.webp" alt="Logo Work Together" loading="lazy" />
          </div>
          <form>
            <input type="text" placeholder="Votre nom" aria-label='Votre nom' required />
            <input type="email" placeholder="Votre email" aria-label='Votre adresse mail' required />
            <textarea placeholder="Votre message" rows={5} aria-label='Votre message' required />
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </>
    </Section>
  );
};

export default ContactForm;