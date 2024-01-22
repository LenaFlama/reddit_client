import React from "react";
import { useSelector } from "react-redux";
import { selectComments } from "./commentsSlice";
import Markdown from "react-markdown";

export default function Comments() {
  const comments = useSelector(selectComments);

  const getReplies = (replies) => {
    return (
      <div>
        {replies.map((reply, index) => (
          <div key={index}>
            <details>
              <summary>
                <p>
                  <span>{reply.data.author} </span>
                  <span>{reply.data.score}</span>
                </p>
                <Markdown children={reply.data.body}></Markdown>
              </summary>
              {reply.data && reply.data.replies
                ? getReplies(reply.data.replies.data.children)
                : null}
            </details>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {comments.map((comment) => (
        <div className='comment' key={comment.id}>
          <details>
            <summary>
              <p className='comment_details'>
                <span>{comment.author} </span>
                <span>{comment.score}</span>
              </p>
              <Markdown children={comment.body}></Markdown>
            </summary>
            {comment.replies ? getReplies(comment.replies.data.children) : ""}
          </details>
        </div>
      ))}
    </div>
  );
}
