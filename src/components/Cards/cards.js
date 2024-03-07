import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCards,
  selectCards,
  selectDefaultSubreddit,
  selectSearchTerm,
} from "./cardSlice";
import { fetchComments } from "../features/bar/comments/commentsSlice";
import Comments from "../features/bar/comments/comments";
import Vote from "../features/bar/vote/vote";
import Markdown from "react-markdown";

export default function Cards() {
  const cards = useSelector(selectCards);
  const dispatch = useDispatch();
  const defaultSubreddit = useSelector(selectDefaultSubreddit);
  const searchTerm = useSelector(selectSearchTerm);

  const [openComments, setOpenComments] = useState({});

  useEffect(() => {
    if (defaultSubreddit !== "" || searchTerm !== "") {
      dispatch(fetchCards({ subreddit: defaultSubreddit, searchTerm }));
    }
  }, [dispatch, defaultSubreddit, searchTerm]);

  useEffect(() => {
    // Fetch comments when openComments changes
    Object.keys(openComments).forEach((permalink) => {
      if (openComments[permalink]) {
        dispatch(fetchComments(permalink));
      }
    });
  }, [openComments, dispatch]);

  const handleToggleComments = (permalink) => {
    setOpenComments((prevOpenComments) => ({
      ...prevOpenComments,
      [permalink]: !prevOpenComments[permalink],
    }));
  };

  return (
    <div className='container-fluid d-flex flex-column card col-md-9 col-11 p-xxl-4 p-1 pt-3 m-0 bg-dark border-0 justify-content-end'>
      {cards.map((card) => (
        <div className='container-fluid card mb-sm-3 mb-1 bg-light p-0' key={card.id}>
          <div className='card-body p-sm-3 p-1'>
            <h3>{card.title}</h3>
            <h6 className='card-subtitle'>
              <p className='my-0'>{card.author}</p>
              <p className='mt-0 mb-3 pb-2 border-bottom'>
                {new Date(card.created * 1000).toLocaleString()}
              </p>
            </h6>
            {card.post_hint === "image" || card.is_gallery ? (
              <div className='d-flex justify-content-center'>
                <img
                  src={card.url}
                  className='figure-img img-fluid rounded-2 my-0'
                  alt='Not available'
                  width='80%'
                  height='50%'
                />
              </div>
            ) : card.post_hint === "hosted:video" ? (
              <div className='d-flex justify-content-center ratio ratio-4x3'>
                <video className='rounded-2 my-0' controls autoPlay>
                  <source src={card.media.reddit_video.fallback_url} />
                </video>
              </div>
            ) : card.post_hint === "self" || card.thumbnail === "self" ? (
              <Markdown className='card-text '>{card.selftext}</Markdown>
            ) : card.post_hint === "link" ? (
              <a aria-label='thumbnail link' href={card.url}>
                <img
                  src={card.thumbnail}
                  className='figure-img img-fluid rounded-2 my-0'
                  alt='Not available'
                />
              </a>
            ) : (
              !card.post_hint
            )}
            <div className='container-fluid d-flex my-3 pb-2 border-bottom align-items-center'>
              <Vote></Vote>
              <div className='d-flex align-items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  fill='currentColor'
                  className='bi bi-tsunami me-1'
                  viewBox='0 0 16 16'
                >
                  <path d='M.036 12.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65m0 2a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65M2.662 8.08c-.456 1.063-.994 2.098-1.842 2.804a.5.5 0 0 1-.64-.768c.652-.544 1.114-1.384 1.564-2.43.14-.328.281-.68.427-1.044.302-.754.624-1.559 1.01-2.308C3.763 3.2 4.528 2.105 5.7 1.299 6.877.49 8.418 0 10.5 0c1.463 0 2.511.4 3.179 1.058.67.66.893 1.518.819 2.302-.074.771-.441 1.516-1.02 1.965a1.88 1.88 0 0 1-1.904.27c-.65.642-.907 1.679-.71 2.614C11.076 9.215 11.784 10 13 10h2.5a.5.5 0 0 1 0 1H13c-1.784 0-2.826-1.215-3.114-2.585-.232-1.1.005-2.373.758-3.284L10.5 5.06l-.777.388a.5.5 0 0 1-.447 0l-1-.5a.5.5 0 0 1 .447-.894l.777.388.776-.388a.5.5 0 0 1 .447 0l1 .5.034.018c.44.264.81.195 1.108-.036.328-.255.586-.729.637-1.27.05-.529-.1-1.076-.525-1.495s-1.19-.77-2.477-.77c-1.918 0-3.252.448-4.232 1.123C5.283 2.8 4.61 3.738 4.07 4.79c-.365.71-.655 1.433-.945 2.16-.15.376-.301.753-.463 1.13' />
                </svg>
                <span className='fw-bold fs-5'>
                  {(card.score / 1000).toFixed(1) + "k"}
                </span>
              </div>
            </div>

            <button
              aria-label="comments-button"
              className='container-fluid d-flex border rounded-2 bg-dark text-light card-footer p-0 justify-content-center'
              onClick={() => handleToggleComments(card.permalink)}
            >
              {openComments[card.permalink] ? (
                <p className='my-2'>Hide Comments</p>
              ) : (
                <p className='my-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-chat-right-text me-1'
                    viewBox='0 0 16 16'
                  >
                    <path d='M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z' />
                    <path d='M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5' />
                  </svg>
                  {card.num_comments}
                </p>
              )}
            </button>
            <span>{openComments[card.permalink] && <Comments />}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
