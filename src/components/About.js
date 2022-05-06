import React from 'react'
import Head from "./Head";
import AboutMe from './AboutMe';
import Accordion from './Accordion';
import Tabs from './Tabs';

function About() {
    return (
        <>
            <Head page="About" description="Short about me, my experience and education. Download my CV" />
            <div className="container">
                <section class="about content">
                    <h1>About me</h1>
                    <AboutMe />
                    <Accordion />
                    <Tabs />
                </section>
            </div>
        </>

    )
}

export default About;