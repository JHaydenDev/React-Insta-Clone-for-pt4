import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// styling
const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2% auto;
  border: 1px solid black;
  width: 90%;
`;

const ActualComment = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2% auto;
  border: 1px solid black;
  width: 90%;
`;

//Comment functionality
const CommentInput = props => {
  return (
    <form onSubmit={props.addNewComment}>
      <input
        className="text-input"
        type="text"
        placeholder="Add a comment..."
        value={props.inputText}
        onChange={props.handler}
      />
      <p className="expand">...</p>
    </form>
  );
};

const Comment = props => {
  return (
    <CommentBox className="comment-text">
      <ActualComment className="comment">{props.comment.text}</ActualComment>{" "}
      <ActualComment className="user">-{props.comment.username}</ActualComment>
    </CommentBox>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

//CommentSection Component
class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      inputText: ""
    };
  }
  componentDidMount() {
    this.setState({ comments: this.props.comments });
  }
  handler = event => {
    this.setState({ inputText: event.target.value });
  };
  addNewComment = event => {
    event.preventDefault();
    if (!(this.state.inputText === "")) {
      this.setState({
        comments: [
          ...this.state.comments,
          { username: "Conan The Barbarian", text: this.state.inputText }
        ],
        inputText: ""
      });
    }
  };

  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map(comment => (
          <Comment key={Math.random()} comment={comment} />
        ))}
        <CommentInput
          inputText={this.state.inputText}
          handler={this.handler}
          addNewComment={this.addNewComment}
        />
      </div>
    );
  }
}

export default CommentSection;
