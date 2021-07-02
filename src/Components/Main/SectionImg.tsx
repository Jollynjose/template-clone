import React from "react";
import classes from "./SectionImg.module.css";
import SectionImgItems from "./SectionImgItems";
import Card from "../UI/Card";

const SectionImg: React.FC = () => {
  const DUMMYDATA = [
    {
      date: "Nov 12",
      paragraph:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      alt: "Img 1",
      class: "card1",
    },
    {
      date: "Nov 11",
      paragraph:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      alt: "Img 2",
      class: "card2",
    },
  ];
 
  return (
    <section className={classes.presetation}>
      <Card class={classes.container}>
        <div className={classes.main_content}>
          <span className={classes.title}>
            Title of a longer featured blog post
          </span>
          <span className={classes.paragraph}>
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what's most interesting in this post's
            contents.
          </span>
          <span className={classes.subtitle + " more"}>Continue reading...</span>
        </div>
        
      </Card>
      {DUMMYDATA.map((item) => (
        <SectionImgItems
          key={Math.random()}
          class={classes[item.class]}
          date={item.date}
          paragraph={item.paragraph}
          alt={item.alt}
          
        />
      ))}
    </section>
  );
};
export default SectionImg;
