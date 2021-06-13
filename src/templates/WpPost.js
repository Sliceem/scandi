import React from "react"
import {graphql} from "gatsby";
import {Helmet} from "react-helmet/es/Helmet";
import Link from "gatsby-link";
import {TEST} from "../utils/const";

const WpPost = ({data}) => {
  const {wpPost} = data;
  return (
    <>
      <Helmet>
        <meta name="description" content={wpPost?.seo?.metaDesc}/>
      </Helmet>
      <div>
        <div>
          {wpPost.title}
        </div>
        <div>
          <div dangerouslySetInnerHTML={{__html: wpPost.content}}/>
        </div>
        <Link to={TEST}>{`<< Back to Blog`}</Link>
      </div>
    </>
  )
}

export default WpPost;

export const query = graphql`
    query PostById($id: String) {
        wpPost(id: {eq: $id}) {
            title
            content
        }
    }
`;
