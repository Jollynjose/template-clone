import React from "react";
import Card from "../UI/Card";
import classes from "./About.module.css";
const About: React.FC = () => {
  return (
    <Card class={classes.container}>
      <h3 className={classes.title}>About</h3>
      <p className={classes.paragraph}>
        Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur
        purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
      </p>
    </Card>
  );
};
export default About;
