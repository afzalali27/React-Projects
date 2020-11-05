import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "what is react?",
    content: "React is front-end javascript frameword",
  },
  {
    title: "why use react?",
    content: "React is favioure js libaray among developers",
  },
  {
    title: "How do you use react?",
    content: "You use react by creating components",
  },
];

const App = () => {
  return (
    <div>
      <Search></Search>
    </div>
  );
};

export default App;
