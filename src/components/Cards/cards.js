import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCards,
  selectCards,
  selectDefaultSubreddit,
  selectSearchTerm,
} from "./cardSlice";
import "./cards.css";
import { fetchComments } from "../feautures/bar/comments/commentsSlice";
import Comments from "../feautures/bar/comments/comments";
import Vote from "../feautures/bar/vote/vote";
import Markdown from "react-markdown";

export default function Cards() {
  const cards = useSelector(selectCards);
  const dispatch = useDispatch();
  const defaultSubreddit = useSelector(selectDefaultSubreddit);
  const searchTerm = useSelector(selectSearchTerm);

  const [openComments, setOpenComments] = useState({});

  useEffect(() => {
    dispatch(fetchCards({ subreddit: defaultSubreddit, searchTerm }));
  }, [dispatch, defaultSubreddit, searchTerm]);

  useEffect(() => {
    // Fetch comments when openComments changes
    Object.keys(openComments).map((permalink) => {
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
    <div className='cards'>
      {cards.map((card) => (
        <div className='card' key={card.id}>
          <ul>
            <li id='title'>{card.title}</li>
            <ul className='details'>
              <li id='author'>{card.author}</li>
              <li className='details' id='time'>
                {new Date(card.created * 1000).toLocaleString()}
              </li>
            </ul>
            {card.post_hint === "image" || card.is_gallery ? (
              <li className='hint' id='image'>
                <img src={card.url} alt='Not available' />
              </li>
            ) : card.post_hint === "hosted:video" ? (
              <li className='hint' id='video'>
                <video controls autoPlay>
                  <source src={card.media.reddit_video.fallback_url} />
                </video>
              </li>
            ) : card.post_hint === "self" || card.thumbnail === "self" ? (
              <span className='hint' id='text'>
                <Markdown>{card.selftext}</Markdown>
              </span>
            ) : card.post_hint === "link" ? (
              <a className='hint' id='link' href={card.url}>
                <img src={card.thumbnail} alt='Not available' />
              </a>
            ) : (
              !card.post_hint
            
            )}
            <div className='bar-votes'>
              <Vote></Vote>
              <div className='likes'><span className='material-symbols-outlined favorite'>settings_heart</span>
              <p id='upsNb'>{(card.score / 1000).toFixed(1) + "k"}</p></div>
              
            </div>
            <li>
              <div
                className='bar-comments'
                onClick={() => handleToggleComments(card.permalink)}
              >
                {openComments[card.permalink] ? (
                  <span className='comments-hide'>Hide Comments</span>
                ) : (
                  <span className='comments-number'>{card.num_comments}</span>
                )}
              </div>
              <span>{openComments[card.permalink] && <Comments />}</span>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
