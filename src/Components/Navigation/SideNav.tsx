import React from "react";
import classes from './SideNav.module.css';

const SideNav: React.FC = () => {
  const DUMMYTOPICS = [
    "Technology",
    "Design",
    "Culture",
    "Business",
    "Politics",
    "Opinion",
    "Science",
    "Health",
    "Style",
    "Travel",
  ];
  return (
    <div className={classes.container}>
      {DUMMYTOPICS.map((topic) => (
        <a key={Math.random()} className={classes.container_a} href="/#">
          {topic}
        </a>
      ))}
    </div>
  );
};
export default SideNav;
