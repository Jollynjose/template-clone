import React from "react";
// import classes from './SideNav.module.css';

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
    <div>
      {DUMMYTOPICS.map((topic) => (
        <a key={Math.random()} href="/#">
          {topic}
        </a>
      ))}
    </div>
  );
};
export default SideNav;
