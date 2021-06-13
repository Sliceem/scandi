import React from "react"
import {graphql} from "gatsby";
import Link from "gatsby-link";
import {ORIGIN} from "../utils/const";

const WpPage = ({data}) => {
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
        <Link to={ORIGIN}>{`<< Back to Main`}</Link>
      </div>
    </>
  )
}

export default WpPage;

export const query = graphql`
    query PageById($id: String) {
        wpPage(id: {eq: $id}) {
            title
            content
        }
    }
`;
