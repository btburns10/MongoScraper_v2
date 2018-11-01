import React from "react";
// import "../css/SavedArticle.css";


const SavedArticle = props => (

<div className="col s12 m12 l8">
  <div className="card horizontal">
    <div className="card-image">
      <img src={props.article.img} style={{height: 300, padding: 5}}/>
    </div>
    <div className="card-stacked">
      <div className="card-content">
        <h5 className="header">{props.article.title}</h5>
        <hr></hr>
        <p>{props.article.summary}</p>
      </div>
      <div className="card-action">
        <a href={props.article.link}>Read more</a>
      </div>
    </div>
  </div>
</div>
  
);

export default SavedArticle;

// 