import React from "react"
import {graphql} from "gatsby";
import Link from "gatsby-link";

const WpPost = ({data}) => {
  const {wpPage: {content, title}} = data;

  const createMarkup = () => {
    return {__html: content};
  }

  return (
    <>
      <div>
        <div>
          {title}
        </div>
        <div>
          <div dangerouslySetInnerHTML={createMarkup()}/>
        </div>
        <Link to="/">{`<< Back to Blog`}</Link>
      </div>
    </>
  )
}

export default WpPost;

export const query = graphql`
    query PageById($id: String) {
        wpPage(id: {eq: $id}) {
            title
            content
        }
    }
`;
