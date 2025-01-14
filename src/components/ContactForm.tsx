import '../sass/contact.scss';
import Section from './Section';
import React from "react";

const ContactForm: React.FC = () => {
  const [result, setResult] = React.useState<string>("");

  const onSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", import.meta.env.VITE_ACCES_FORM || "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message envoyé avec succès!");
      form.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setTimeout(() => setResult(""), 3000);
  };

  return (
    <Section id="contact" title="Un projet? Contactez-moi!">
      <>
        <h3>Ouverte aux nouvelles opportunités</h3>
        <div className='container_form'>
          <div className='image_form'>
            <img src="imageContact/logoWorkTogether.webp" alt="Logo Work Together" loading="lazy" />
          </div>
          <form action="https://api.web3forms.com/submit" method="POST" onSubmit={onSubmit}>
            <input type="hidden" name="access_key" value={import.meta.env.VITE_ACCES_FORM || ""}/>
            <input type="text" name="name" placeholder="Votre nom" aria-label='Votre nom' required />
            <input type="email" name="email" placeholder="Votre email" aria-label='Votre adresse mail' required />
            <textarea name="message" placeholder="Votre message" rows={5} aria-label='Votre message' required />
            <button type="submit">Envoyer</button>
          </form>
          {result && <span className="message_sent">{result}</span>}
        </div>
      </>
    </Section>
  );
};

export default ContactForm;