import React from "react";

const ResultList = props => (

  <ul>
    {console.log(props.results)}
    {props.results.map(result => (
      <li key={result._id}>
        <p>{result.headline.main}</p>
        <img 
          alt={result.headline.main}
          src={result.multimedia[14] ? "http://www.nytimes.com/" + result.multimedia[14].url : ''}
        />
      </li>
    ))}
  </ul>
  
);

export default ResultList;

