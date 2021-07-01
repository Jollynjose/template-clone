import Card from "../UI/Card";
import React from "react";
import classes from './Archives.module.css'

const Archives:React.FC = ()=>{
    const DUMMYDATES = [
        "March 2020",
        "February 2020",
        "January 2020",
        "November 1999",
        "October 1999",
        "September 1999",
        "August 1999",
        "July 1999",
        "June 1999",
        "May 1999",
        "April 1999",
      ];
      return (
        <Card class={classes.container}>
          <h2>Archives</h2>
          {DUMMYDATES.map(date => <a key={Math.random()} href="/#">{date}</a>)}
        </Card>
      );
}
export default Archives;