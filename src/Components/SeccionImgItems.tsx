import classes from "./SeccionImgItems.module.css";
import React from "react";
import Card from "./UI/Card";

const SeccionImgItems: React.FC<{date:string, paragraph: string, alt: string}> = (props) => {
  return (
    <Card class={classes.item}>
      <div>
        <h2>
            Featured Post
        </h2>
        <h5>{props.date}</h5>
        <p>{props.paragraph}</p>
      </div>
      <div>
          <img src="https://source.unsplash.com/random" alt={props.alt}/>
      </div>
      <h6>Continue reading...</h6>
    </Card>
  );
};
export default SeccionImgItems;
