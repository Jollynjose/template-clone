import React from "react";
import classes from './Footer.module.css'
const Footer:React.FC = ()=>{
    return(
        <footer className={classes.container + " footer"}>
            <h6 className={classes.title}>Footer</h6>
            <p className={classes.paragraph}>Something here to give the footer purpose!</p>
            <span className={classes.info}>Copyright © <a href='https://material-ui.com/' className={classes.link}>Your Website</a> 2021.</span>
        </footer>
        
    )
}
export default Footer;