import react, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";
const languages = [
  { label: "Urdu", value: "ur" },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "dutch",
    value: "nl",
  },
];
const Translate = () => {
  const [language, setLanguage] = useState(languages[0]);
  const [text, setText] = useState("");
  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
        </div>
      </div>

      <Dropdown
        selected={language}
        onSelectedChange={setLanguage}
        options={languages}
        label="Select a language"
      ></Dropdown>
      <hr></hr>
      <h3 className="ui header">Translated Text</h3>
      <Convert text={text} language={language}></Convert>
    </div>
  );
};

export default Translate;
