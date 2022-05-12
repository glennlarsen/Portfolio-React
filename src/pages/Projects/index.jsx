import Head from "../../components/Head";
import Carousel from '../../components/Carousel';
import Header from "../../components/Header";

function Projects() {
    return (
        <>
            <Head page="My Projects" description="View all of my previous projects including images and specifications" />
            <div className="container">
                <section className="projects">
                    <Header>My Projects</Header>
                    <Carousel />
                </section>
            </div>
        </>

    )
}

export default Projects;