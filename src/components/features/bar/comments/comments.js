import React from "react";
import { useSelector } from "react-redux";
import { selectComments } from "./commentsSlice";
import Markdown from "react-markdown";

export default function Comments() {
  const comments = useSelector(selectComments);

  //have to add more children 
  const tsunamiIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='currentColor'
      className='bi bi-tsunami me-1'
      viewBox='0 0 16 16'
    >
      <path d='M.036 12.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65m0 2a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65M2.662 8.08c-.456 1.063-.994 2.098-1.842 2.804a.5.5 0 0 1-.64-.768c.652-.544 1.114-1.384 1.564-2.43.14-.328.281-.68.427-1.044.302-.754.624-1.559 1.01-2.308C3.763 3.2 4.528 2.105 5.7 1.299 6.877.49 8.418 0 10.5 0c1.463 0 2.511.4 3.179 1.058.67.66.893 1.518.819 2.302-.074.771-.441 1.516-1.02 1.965a1.88 1.88 0 0 1-1.904.27c-.65.642-.907 1.679-.71 2.614C11.076 9.215 11.784 10 13 10h2.5a.5.5 0 0 1 0 1H13c-1.784 0-2.826-1.215-3.114-2.585-.232-1.1.005-2.373.758-3.284L10.5 5.06l-.777.388a.5.5 0 0 1-.447 0l-1-.5a.5.5 0 0 1 .447-.894l.777.388.776-.388a.5.5 0 0 1 .447 0l1 .5.034.018c.44.264.81.195 1.108-.036.328-.255.586-.729.637-1.27.05-.529-.1-1.076-.525-1.495s-1.19-.77-2.477-.77c-1.918 0-3.252.448-4.232 1.123C5.283 2.8 4.61 3.738 4.07 4.79c-.365.71-.655 1.433-.945 2.16-.15.376-.301.753-.463 1.13' />
    </svg>
  );

  const moreIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='currentColor'
      className='bi bi-caret-down'
      viewBox='0 0 16 16'
    >
      <path d='M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659' />
    </svg>
  );

  const getReplies = (replies) => {
    return (
      <div>
        {replies.map((reply) => (
          <div key={reply.id} className='d-flex border-start flex-column ms-2 ps-1'>
            <div className='d-flex justify-content-between mx-3'>
              <span>{reply.data.author} </span>
              <div className='d-flex align-items-center'>
                {tsunamiIcon}
                <span>{reply.data.score}</span>
              </div>
            </div>
            
            <div className='bg-light bg-gradient rounded pe-0 ms-3 text-wrap'>
              <Markdown
                className='p-2 text-dark custom-font-subtitle pb-sm-2 pb-0' 
                children={reply.data.body}
              ></Markdown>
            </div>
            <details>
              <summary className='list-unstyled ms-3'>
                {reply.data && reply.data.replies === "" ? "" : moreIcon}
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
    <div className='container-fluid d-flex border rounded-2 flex-column bg-dark text-light'>
      {comments.map((comment) => (
        <div key={comment.id} className='border rounded mx-1 my-2 p-2'>
          <div className='d-flex justify-content-between mb-sm-2'>
            <span className="custom-font-author">{comment.author} </span>
            <div className='d-flex align-items-center'>
              {tsunamiIcon}
              <span>{comment.score}</span>
            </div>
          </div>
          <div className='bg-secondary bg-light rounded '>
            <Markdown
              className='p-2 text-dark custom-font-subtitle pb-sm-2 pb-1'
              children={comment.body}
            ></Markdown>
          </div>
          <details>
            <summary className='list-unstyled'>
              {comment.replies === "" ? "" : moreIcon}
            </summary>
            {comment.replies ? getReplies(comment.replies.data.children) : ""}
          </details>
        </div>
      ))}
    </div>
  );
}
