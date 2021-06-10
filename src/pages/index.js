import * as React from "react";
import {useStaticQuery, graphql, Link as GatsbyLink} from "gatsby";
import Link from "gatsby-link";

const HomePage = () => {
    const data = useStaticQuery(graphql`
        {
            allWpPost {
                nodes {
                    id
                    title
                    excerpt
                    uri
                }
            }
        }
    `);

    const {allWpPost} = data;

    console.log('***', data);

    return (
        <div>

            <div>
                {allWpPost.nodes.map(({id, title, excerpt, uri}) => (
                    <div key={id}>
                        <div>{title}</div>
                        <div>
                            <div dangerouslySetInnerHTML={{__html: excerpt}}/>
                        </div>
                        <div>
                            <Link to={uri}>Read More >> </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
