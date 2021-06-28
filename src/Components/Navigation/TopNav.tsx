import React from "react";
import { ReactComponent as Search } from "../../Layout/Search.svg";
import classes from './TopNav.module.css'
const TopNav: React.FC = () => {
  return (
    <div className={classes.nav_top}>
      <button type="button">SUBSCRIBE</button>
      <h2>BLOG</h2>
      <span className={classes.span}>
      <button type="button" className={classes.button_search}>
        <Search className={classes.svg}/>
      </button>
      <button type='button' className={classes.button_signUp}> 
        SIGN UP
      </button>
      </span>
      
    </div>
  );
};
export default TopNav;
