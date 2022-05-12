import Head from "../Head";
import ContactByEmail from './ContactByEmail';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <>
            <Head page="Contact" description="Contact me to hear more about my portfolio or just for a casual talk" />
            <div className="container">
                <section className="contact content">
                    <h1>Contact</h1>
                    <ContactByEmail />
                    <ContactForm />
                </section>
            </div>
        </>

    )
}

export default Contact;