import { Helmet } from "react-helmet";

function Head(props) {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>Portfolio | {props.page}</title>
            <link rel="canonical" href="http://glennportfolio.site" />
            <meta name="description" content={props.description} />
        </Helmet>
    )
}

export default Head;