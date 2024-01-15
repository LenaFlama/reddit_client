import React from "react";
import { useSelector } from "react-redux";
import { selectComments } from "./commentsSlice";

export default function Comments () {
  const comments = useSelector(selectComments);
  
  return (
    <div>
      {comments.map(comment =>(
      <ul className="comment" key={comment.id}>
        <div className="comment_details">
          <li>{comment.author}</li>
          <li>{comment.score}</li>
        </div>
          <li>{comment.body}</li>
      </ul>))}
    </div>
  )
}