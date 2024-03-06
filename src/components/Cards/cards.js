import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCards,
  selectCards,
  selectDefaultSubreddit,
  selectSearchTerm,
} from "./cardSlice";
//import "./cards.css";
import { fetchComments } from "../features/bar/comments/commentsSlice";
import Comments from "../features/bar/comments/comments";
import Vote from "../features/bar/vote/vote";
import Markdown from "react-markdown";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cards() {
  const cards = useSelector(selectCards);
  const dispatch = useDispatch();
  const defaultSubreddit = useSelector(selectDefaultSubreddit);
  const searchTerm = useSelector(selectSearchTerm);

  const [openComments, setOpenComments] = useState({});

  useEffect(() => {
    if (defaultSubreddit !== '' || searchTerm !== '') {
    dispatch(fetchCards({ subreddit: defaultSubreddit, searchTerm }));
  }}, [dispatch, defaultSubreddit, searchTerm]);

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
    <div className='card col container-fluid p-4 bg-dark border-0'>
      {cards.map((card) => (
        <div className='card mb-3 bg-light' key={card.id}>
          <div className='card-body'>
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
                />
              </div>
            ) : card.post_hint === "hosted:video" ? (
              <div className='d-flex justify-content-center ratio ratio-4x3'>
                <video className='mw-50 mh-50 rounded-2 my-0' controls autoPlay>
                  <source src={card.media.reddit_video.fallback_url} />
                </video>
              </div>
            ) : card.post_hint === "self" || card.thumbnail === "self" ? (
              <Markdown className="card-text ">{card.selftext}</Markdown>
            ) : card.post_hint === "link" ? (
              <a
                className='figure-img img-fluid rounded-2 my-0'
                href={card.url}
              >
                <img src={card.thumbnail} alt='Not available' />
              </a>
            ) : (
              !card.post_hint
            )}
            <div className='d-flex my-3 pb-2 border-bottom'>
              <Vote></Vote>
              <div className='d-flex'>
                <span className='material-symbols-outlined favorite '>
                  settings_heart
                </span>
                <span className="fw-bold">{(card.score / 1000).toFixed(1) + "k"}</span>
              </div>
            </div>

            <div
              className='bar-comments'
              onClick={() => handleToggleComments(card.permalink)}
            >
              {openComments[card.permalink] ? (
                <p className='comments-hide'>Hide Comments</p>
              ) : (
                <p className='comments-number'>{card.num_comments}</p>
              )}
            </div>
            <span>{openComments[card.permalink] && <Comments />}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
