import React, { Component } from "react";
import "../css/Article.css";
// import SavedArticle from "./SavedArticle";
import axios from "axios";

class SavedArticles extends Component {

componentDidMount() {
  axios.get("/api/articles", (req, res) => {
    console.log(res.data);
  });
}

render() {
  return(
    <div className="col s12 m6 l4" key={this.props.article._id}>
      <div className="card" data-attr={this.props.article._id}>
        <div className="card-image waves-effect waves-block waves-light">
          <img className="image"
            alt={this.props.article.headline.print_headline}
            src={this.props.article.multimedia[14] ? "http://www.nytimes.com/" + this.props.article.multimedia[14].url : "no-image-found.gif"}
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{this.props.article.headline.main}</span>
          <p>{this.props.article.snippet.slice(0,180) + "..."}</p>
          <p>Published Date: {this.props.article.pub_date}</p>
          <p><a href={this.props.article.web_url} target="_blank" rel="noopener noreferrer">Go to Article</a> 
            <span onClick={this.saveArticle} className="waves-effect waves-light btn circle right #4fc3f7 light-blue lighten-2">
              <i className="small material-icons">add</i>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
  
};

export default SavedArticles;