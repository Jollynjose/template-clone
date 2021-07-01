import classes from './SectionImgItems.module.css'
import React from "react";
import Card from "./UI/Card";

const SectionImgItems: React.FC<{date:string, paragraph: string, alt: string, class: any}> = (props) => {
  return (
    <Card class={props.class}>
      <div className={classes.info}>
        <h2>
            Featured Post
        </h2>
        <h5>{props.date}</h5>
        <p>{props.paragraph}</p>
        <h6 className={classes.more}>Continue reading...</h6>
      </div>
      <div className={classes.img}>
          
      </div>
      
    </Card>
  );
};
export default SectionImgItems;
