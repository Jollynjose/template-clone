import React from 'react';
import TopNav from './TopNav';
import classes from './Nav.module.css'
import SideNav from './SideNav';
const Nav:React.FC = () => { 
    return (
    <nav className={classes.nav}>
        <TopNav/>
        <SideNav/>
    </nav>
    )
}
export default Nav;