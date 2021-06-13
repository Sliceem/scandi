import * as React from "react";
import {Query} from "./Navigation.query"
import Link from "gatsby-link";
import {main} from "./Navigation.module.scss"
import { PAGE } from "../../utils/const";

const NavigationComponent = () => {
  const {allWpPage: {edges}} = Query();

  return (
    <>
      <p>MENU</p>
      <div className={main}>

        {edges.map(({node: {date, id, slug, title, uri}}) => (
            <div key={id}>
              <Link to={PAGE + uri}>{title}</Link>
            </div>
          )
        )}
      </div>
    </>

  );
};

export default NavigationComponent;
