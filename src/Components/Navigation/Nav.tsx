import React from "react";
import TopNav from "./TopNav";
import classes from "./Nav.module.css";
import SideNav from "./SideNav";
const Nav: React.FC = () => {
  return (
    <header className={classes.container} >
      <TopNav />
      <nav className="nav"> 
        
        <SideNav />
      </nav>
    </header>
  );
};
export default Nav;
