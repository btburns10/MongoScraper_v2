import React, { Component } from "react";
import axios from "axios";

class Comment extends Component {

 state = {
   comments: []
 }

  componentDidMount() {
    axios.get("/api/articles/" + this.state.comments[0])
      .then(res => this.setState({ comments: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return(
      <div>
        comments
      </div>
    )
  }
  
};

export default Comment;