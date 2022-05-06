
import Intro from "./Intro";
import Head from "./Head";
import Navigation from "./Navigation";



function Home() {
    return (
        <>
        <Head page="Home" description="My Frontend developer Portfolio - Glenn Larsen" />
            <Navigation />
            <div className="container">
                <Intro />
            </div>
        </>
    )
}


export default Home;