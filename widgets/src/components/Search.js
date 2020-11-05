import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

const Search = () => {
  const [term, setTerm] = useState("Muhammad Ali Jinah");
  const [results, setResults] = useState([]);
  //   console.log(results);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
      //   console.log("inside function");
    };
    // if you don't want to pass defulat value then make sure only search if we
    // have anything in term

    // now this check if user remove text don't request
    // but still it making request for every change in letter that is not efficient
    // so we must need to wait like 1 sec, so we guess user have typed what he want to search
    // for this purpose we set timer
    if (term && !results.length) search();
    // for firs search , search it right now
    else {
      // but for further wait for user input
      const timeoutId = setTimeout(() => {
        if (term) search();
      }, 500);
      // its making delay but at the end make sure to call so we
      // need to cancel if user type something else
      // for that purpose we get the id of timer so we can cancel  it
      // now the below function will clear the time for previous calls
      // and they will not called
      return () => {
        clearTimeout(timeoutId);
      };
    }

    // it solves the problem but we also got delay for our first default search
    // se don't want that, so to avoid this for firs serach we will putt check above

    // as we are using results.length property also in function so we need to pass that too
    // otherwise we got warning
  }, [term, results.length]);
  const searchResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
        </div>
        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
      </div>
    );
  });
  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term: </label>
          <input
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            className="input"
            type="text"
          ></input>
        </div>
      </div>
      <div className="ui celled list">{searchResults}</div>
    </div>
  );
};

export default Search;
