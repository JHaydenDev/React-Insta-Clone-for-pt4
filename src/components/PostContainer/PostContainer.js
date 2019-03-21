import React from "react";
import styled from "styled-components";
import Posts from "./Posts";

//styling
const PostsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10% auto;
  border: 1px solid black;
  width: 90%;
`;


// container component
const PostContainer = props => {
  return (
    <PostsBox>
      {props.posts.map(post => (
        <Posts key={post.imageUrl} post={post} />
      ))}
    </PostsBox>
  );
};

export default PostContainer;
