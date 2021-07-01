import React from "react";
import { ReactComponent as Search } from "../../Layout/Search.svg";
import classes from "./TopNav.module.css";
const TopNav: React.FC = () => {
  return (
    <div className={classes.nav_top}>
      <span className={classes.subscribe}>Subscribe</span>
      <h2 className={classes.title}>Blog</h2>
      <span className={classes.container_span}>
        <button type="button" className={classes.button_search}>
          <Search className={classes.svg} />
        </button>
        <button type="button" className={classes.button_signUp}>
          SIGN UP
        </button>
      </span>
    </div>
  );
};
export default TopNav;
