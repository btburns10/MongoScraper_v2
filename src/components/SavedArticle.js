import React from "react";
import { Modal } from "react-materialize";
import "../css/SavedArticle.css";


const SavedArticle = props => (

<div className="col s12 m12 l8">
  <div className="card horizontal">
    <div className="card-image">
      <img src={props.article.img} style={{height: 250, width: 300, padding: 10}}/>
    </div>
    <div className="card-stacked">
      <div className="card-content">
        <h5 className="header">{props.article.title}</h5>
        <hr></hr>
        <p>{props.article.summary}</p>
      </div>
      <div className="card-action">
        <a href={props.article.link} target="_blank">Read more here</a>
        <Modal
          header='Modal Header'
          fixedFooter
          trigger={<button data-id={props.article_id} className="btn primary right">
                    <i className="large material-icons">comment</i>
                  </button>}>
          Make Notes Here!
        </Modal>
      </div>
    </div>
  </div>
</div>
  
);

export default SavedArticle;
