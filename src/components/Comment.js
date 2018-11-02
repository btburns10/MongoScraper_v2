import React, { Component } from "react";
import { Modal, Button } from "react-materialize";
import axios from "axios";

class Comment extends Component {

 state = {
   comment: []
 }

  componentDidMount() {
    // axios.get("/api/articles/" + this.state.comments[0])
    //   .then(res => this.setState({ comments: res.data }))
    //   .catch(err => console.log(err))
  }

  render() {
    return(
      <div>
      <Modal
        header={this.props.article.title}
        fixedFooter
        trigger={<button data-id={this.props.article_id} className="btn primary right">
                  <i className="large material-icons">comment</i>
                </button>}
        actions={
                  <div>
                    <Button className="teal" flat modal="close" waves="light" style={{color: "white"}}>Save</Button>
                  </div>
                }
        >
        <textarea style={{height: 250}}
        onChange={this.props.handleInputChange}
        value={this.props.note}
        name="note"
        type="text"
        className="form-control"
        placeholder="type notes here"
        id="noteModal"
      />
      </Modal>
      </div>
    )
  }

  
};

export default Comment;