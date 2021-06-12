import {graphql, useStaticQuery} from "gatsby";

export const Query = () => {
  return useStaticQuery(graphql`
      {
          allWpPage {
              edges {
                  node {
                      id
                      uri
                      slug
                      date
                      title
                  }
              }
          }
      }
  `)
}
