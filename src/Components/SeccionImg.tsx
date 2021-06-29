import React from "react";
import classes from "./SeccionImg.module.css";
import SeccionImgItems from "./SeccionImgItems";
import Card from "./UI/Card";

const SeccionImg: React.FC = () => {
  const DUMMYDATA = [
    {
      date: "Nov 12",
      paragraph:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      alt:"Img 1",
    },
    {
      date: "Nov 11",
      paragraph:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
        alt:"Img 2",
    },
  ];
  return (
    <section>
      <Card class={classes.container}>
        <h1>Title of a longer featured blog post</h1>
        <p>
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what's most interesting in this post's
          contents.
        </p>
        <h6>Continue reading...</h6>
      </Card>
      {DUMMYDATA.map(item=><SeccionImgItems  key={Math.random()} date={item.date} paragraph={item.paragraph} alt={item.alt}/>)}
    </section>
  );
};
export default SeccionImg;
