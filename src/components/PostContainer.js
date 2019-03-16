import React, { Component } from "react";
import styled from "styled-components";
import CommentSection from "./CommentSection";

//styling
const Search = styled.input``;
// component

class PostContainer extends Component {
  render() {
    return (
      <div>
        <div>This is the Post Container</div>
        <CommentSection />
      </div>
    );
  }
}

export default PostContainer;
