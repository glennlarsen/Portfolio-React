import Head from "../../components/Head";
import AboutMe from '../../components/AboutMe';
import Accordion from '../../components/Accordion';
import Tabs from '../../components/Tabs';
import Header from "../../components/Header";

function About() {
    return (
        <>
            <Head page="About" description="Short about me, my experience and education. Download my CV" />
            <div className="container">
                <section className="about content">
                    <Header>About me</Header>
                    <AboutMe />
                    <Accordion />
                    <Tabs />
                </section>
            </div>
        </>

    )
}

export default About;