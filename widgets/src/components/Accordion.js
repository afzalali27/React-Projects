import React, { useState } from "react";

const Accordion = (props) => {
  const { items } = props;
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClicked = (index) => {
    console.log("clicked ", index);
    if (index === activeIndex)
      // if already selected then unselect so it can collapse again
      setActiveIndex(-1);
    else setActiveIndex(index);
  };
  const itemsList = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => {
            onTitleClicked(index);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={"content " + active}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div
      className="ui styled accordion container"
      style={{ marginTop: "10px" }}
    >
      <h1 className="ui header">Accordion List expandable</h1>
      {itemsList}
    </div>
  );
};

export default Accordion;
