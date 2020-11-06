import React, { useEffect, useState } from "react";
import Link from "./Link";
const Navigator = () => {
  return (
    <div className="ui secondary pointing menu container">
      {/* we can also make seperate component for a to avoid repeating and then pass href and className and text as props */}
      <Link href="/" className="item">
        Accordion
      </Link>
      <Link href="/list" className="item">
        Search Wiki
      </Link>
      <Link href="/translate" className="item">
        Language Translator
      </Link>
      <Link href="/dropdown" className="item">
        DropDown
      </Link>
    </div>
  );
};

export default Navigator;
