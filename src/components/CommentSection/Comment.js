import React from 'react';
import styled from "styled-components";


//styling

const ActualComment = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10% auto;
  border: 1px solid black;
  width: 90%;
`;

const Comment = props => {
  return (
    <ActualComment>
      <span className="comment">{props.comment.text}</span>{' '}
      <span className="user">-{props.comment.username}</span>
    </ActualComment>
  );
};

export default Comment