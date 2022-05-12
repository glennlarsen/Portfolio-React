import Head from "../../components/Head";
import ContactByEmail from '../../components/ContactByEmail';
import ContactForm from '../../components/ContactForm';
import Header from "../../components/Header";

function Contact() {
    return (
        <>
            <Head page="Contact" description="Contact me to hear more about my portfolio or just for a casual talk" />
            <div className="container">
                <section className="contact content">
                    <Header>Contact</Header>
                    <ContactByEmail />
                    <ContactForm />
                </section>
            </div>
        </>

    )
}

export default Contact;