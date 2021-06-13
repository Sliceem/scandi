import React from "react"
import Link from "gatsby-link";
import PostsList from "../component/PostsList";
import {ORIGIN} from "../utils/const";

const LocalPage = () => {

  return (
    <>
      <div>
        <div>
          <PostsList/>
        </div>
        <Link to={ORIGIN}>{" << Back to Main"}</Link>
      </div>
    </>
  )
}

export default LocalPage;
