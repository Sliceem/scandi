import * as React from "react";
import {Query} from "./PostsList.query"
import Link from "gatsby-link";
import {main, postTitle} from "./PostsList.module.scss"
import { POST } from "../../utils/const";

const PostsListComponent = () => {
  const {allWpPost: {nodes}} = Query();

  return (
    <div>
      <p className={postTitle}>POSTS</p>
      <div>
        {nodes.map(({id, title, excerpt, uri}) => (
          <div key={id}>
            <div className={main}>{title}</div>
            <div>
              <div dangerouslySetInnerHTML={{__html: excerpt}}/>
            </div>
            <div>
              <Link to={POST + uri}>Read More >> </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsListComponent;
