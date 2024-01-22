import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCards,
  selectCards,
  selectDefaultSubreddit,
  selectSearchTerm,
} from "./cardSlice";
import "./cards.css";
import { fetchComments } from "../../feautures/bar/comments/commentsSlice";
import Comments from "../../feautures/bar/comments/comments";
import Vote from "../../feautures/bar/vote/vote";
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
    <div>
      {cards.map((card) => (
        <div className='card' key={card.id}>
          <ul>
            <li id='title'>{card.title}</li>
            <li id='details-author'>{card.author}</li>
            <li id='details-time'>
              {new Date(card.created * 1000).toLocaleString()}
            </li>
            
            {card.post_hint === "image" || card.is_gallery?(
              <li><img src={card.thumbnail} alt='Not available' /></li>
            ): card.post_hint === "hosted:video"? (
              <li>
                <video controls autoPlay>
                  <source src={card.media.reddit_video.scrubber_media_url}/>
                </video>
              </li>
            ):card.post_hint === "self" || card.thumbnail === 'self'? (
              <li><p><Markdown>{card.selftext}</Markdown></p></li>
            ):card.post_hint === 'link'? (
              <a href={card.url}><img src={card.thumbnail} alt='Not available' /></a>
            ):!card.post_hint}
            <li id='bar-upsNb'>{(card.score / 1000).toFixed(1) + "k"}</li>
            <li>
              <Vote></Vote>
            </li>
            <li id='bar-comments'>
              <button onClick={() => handleToggleComments(card.permalink)}>
                {openComments[card.permalink]
                  ? "Hide Comments"
                  : card.num_comments}
              </button>
              {openComments[card.permalink] && <Comments />}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
