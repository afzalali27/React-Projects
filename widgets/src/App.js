import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Navigator from "./components/Navigator";

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

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "The color blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Navigator></Navigator>
      <Route path="/">
        <Accordion items={items}></Accordion>
      </Route>
      <Route path="/list">
        <Search></Search>
      </Route>
      <Route path="/translate">
        <Translate></Translate>
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        ></Dropdown>
      </Route>
    </div>
  );
};

export default App;
