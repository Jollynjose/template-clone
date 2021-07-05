import classes from './SectionImgItems.module.css'
import React from "react";
import Card from "../UI/Card";

const SectionImgItems: React.FC<{date:string, paragraph: string, alt: string, class: any, }> = (props) => {
  
  return (
    <Card class={props.class + " container"}>
      <div className={classes.info}>
        <h2 className={classes.title}>
            Featured Post
        </h2>
        <h5 className={classes.date}>{props.date}</h5>
        <p className={classes.paragraph}>{props.paragraph}</p>
        <span className={classes.more + " more"}>Continue reading...</span>
      </div>
      <span className={classes.img }>
        <img src="https://source.unsplash.com/random" alt={props.alt}></img>
      </span>
      
    </Card>
  );
};
export default SectionImgItems;
