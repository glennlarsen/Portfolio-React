import React from 'react'
import Head from "./Head";
import Navigation from "./Navigation";
import Carousel from './Carousel';


function Projects() {
    return (
        <>
            <Head page="My Projects" description="View all of my previous projects including images and specifications" />
            <Navigation />
            <div className="container">
                <section className="projects content">
                    <h1>My Projects</h1>
                    <Carousel />
                </section>
            </div>
        </>

    )
}

export default Projects;