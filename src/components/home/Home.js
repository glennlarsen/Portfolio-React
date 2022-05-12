import Intro from "./Intro";
import Head from "../Head";

function Home() {
    return (
        <>
            <Head page="Home" description="My Frontend developer Portfolio - Glenn Larsen" />
            <div className="container">
                <Intro />
            </div>
        </>
    )
}

export default Home;