import Intro from "../../components/Intro";
import Head from "../../components/Head";

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