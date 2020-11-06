import React, { useState, useEffect } from "react";
import axios from "axios";
const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  useEffect(() => {
    console.log("new text or language changed");
    // in post request second object is to send data with request
    // and 3rd is for param

    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      // set translated response
      setTranslated(data.data.translations[0].translatedText);
    };
    const timeoutId = setTimeout(() => {
      if (text) doTranslation();
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [language, text]);
  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
