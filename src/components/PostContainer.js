import React, { Component } from "react";
import styled from "styled-components";
import CommentSection from "./CommentSection";
import dummyData from "../dummy-data";

//styling
const Search = styled.input``;

// container component
const PostContainer = props => {
  return (
    <div>
      {props.posts.map(p => (
        <Posts key={p.imageUrl} post={p} />
      ))}
    </div>
  );
};

// posts component
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //Likes functionality
  incrementLikes = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };

  render() {
    return (
      <div className="post">
        <div className="post-header">
          <div className="thumb-wrapper">
            <img
              src={this.props.post.thumbnailUrl}
              alt=""
              className="post-thumb"
            />
          </div>
          <h1 className="post-username">{this.props.post.username}</h1>
        </div>

        <div>
          <img className="post-image" src={this.props.post.imageUrl} alt="" />
          <div className="comment-bottom">
            <div className="like-bar">
              <p className="likes">{this.state.likes} likes</p>
              <p className="heart-emoji" onClick={this.incrementLikes}>
                ♡{" "}
              </p>
              <p>💬</p>
            </div>
          </div>
        </div>
        <CommentSection comments={this.props.post.comments} />
      </div>
    );
  }
}

export default PostContainer;
