import React, { useState, useEffect } from "react";
import axios from "axios";

// functional component
// we are using useState hook to manage state and update the state value
const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  console.log(results);

  useEffect(() => {
    //   inside useEffect we are defining a helper function and immediately calling it after it has been made
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
    };

    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search(); // function call to the above async function
        }
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curlid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header"> {result.title}</div>
          {result.snippet}
        </div>
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label> Enter search term </label>
        <input
          className="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <div className="ui celled list"> {renderedResults} </div>
    </div>
  );
};

export default Search;
