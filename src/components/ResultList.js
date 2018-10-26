import React from "react";
import "../css/ResultList.css";

const ResultList = props => (

  <div className="row">
    {props.results.map(result => (
      <div className="col s12 m6 l4" key={result._id}>
        <div className="card" data-attr={result._id}>
          <div className="card-image waves-effect waves-block waves-light">
            <img 
              alt={result.headline.print_headline}
              src={result.multimedia[14] ? "http://www.nytimes.com/" + result.multimedia[14].url : "no-image-found.gif"}
            />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{result.headline.main}<i className="material-icons right"></i></span>
            <p>{result.snippet}</p>
            <p>Published Date: {result.pub_date}</p>
            <p><a href={result.web_url} target="_blank" rel="noopener noreferrer">Go to Article</a></p>
          </div>
        </div>
      </div>
    ))}
  </div>
  
);

export default ResultList;

