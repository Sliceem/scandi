import * as React from "react";
import Navigation from "../component/Navigation"
import {Link} from "gatsby";

const App = () => {
  return (
    <>
      <Navigation/>
      <Link to={"/page/test"}>LIST of POSTS</Link>
    </>
  );
};

export default App;
