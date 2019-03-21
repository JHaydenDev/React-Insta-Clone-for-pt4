import React, { Component } from "react";
import styled from "styled-components";
import CommentSection from "../CommentSection/CommentSection";
import dummyData from "../../dummy-data";

//styling

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5% auto;
  border: 1px solid black;
  width: 90%;
  padding: 2%;
`;

const LikeBar = styled.div`
  display: flex;
`;

const Likes = styled.div`
  padding: 1%;
`;
const Heart = styled.div`
  padding: 1%;
`;

const CommentSymbol = styled.div`
  padding: 1%;
`;

// posts component
class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  incrementLikes = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };

  render() {
    return (
      <PostWrapper>
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
            <LikeBar>
              <Likes>{this.state.likes} likes</Likes>
              <Heart onClick={this.incrementLikes}>♡{""}</Heart>
              <CommentSymbol>💬</CommentSymbol>
            </LikeBar>
          </div>
        </div>
        <CommentSection comments={this.props.post.comments} />
      </PostWrapper>
    );
  }
}

export default Posts;
