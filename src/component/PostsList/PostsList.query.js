import {graphql, useStaticQuery} from "gatsby";

export const Query = () => {
    return useStaticQuery(graphql`
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
}
