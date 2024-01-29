import React from "react";
import { useSelector } from "react-redux";
import { selectComments } from "./commentsSlice";
import Markdown from "react-markdown";
import "./comments.css";

export default function Comments() {
  const comments = useSelector(selectComments);

  const getReplies = (replies) => {
    return (
      <div>
        {replies.map((reply, index) => (
          <div className='child-comment-box'>
            <div className='comment details child'>
              <span>{reply.data.author} </span>
              <div className='likes'>
                <span class='material-symbols-outlined favorite'>settings_heart</span>
                <span>{reply.data.score}</span>
              </div>
            </div>
            <Markdown
              className='comment-body child'
              children={reply.data.body}
            ></Markdown>
            <details key={index}>
              <summary>
                {reply.replies === "" ? (
                  ""
                ) : (
                  <span class='material-symbols-outlined comment child'>
                    expand_more
                  </span>
                )}
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
    <div className='comments-box'>
      {comments.map((comment) => (
        <div className='parent-comment-box'>
          <div className='comment details parent'>
            <span>{comment.author} </span>
            <div className='likes'>
              <span className='material-symbols-outlined favorite'>settings_heart</span>
              <span>{comment.score}</span>
            </div>
          </div>
          <Markdown
            className='comment-body parent'
            children={comment.body}
          ></Markdown>
          <details key={comment.id}>
            <summary>
              {comment.replies === "" ? (
                ""
              ) : (
                <span class='material-symbols-outlined comment parent'>
                  expand_more
                </span>
              )}
            </summary>
            {comment.replies ? getReplies(comment.replies.data.children) : ""}
          </details>
        </div>
      ))}
    </div>
  );
}
