import Accordian from "./components/Accordion";
import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "what is react ?",
    content: "React is a Javascript Framework",
  },
  {
    title: "Why use react ?",
    content: "React is a Favourite Javascript library among engineers ",
  },
  {
    title: "How do you use react ?",
    content: "You use react using components",
  },
];

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
