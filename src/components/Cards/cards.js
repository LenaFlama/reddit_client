import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCard, selectCards, selectDefaultSubreddit } from "./cardSlice";
import './cards.css'
import { fetchComments } from "../../feautures/bar/comments/commentsSlice";
import Comments from "../../feautures/bar/comments/comments";
import Vote from "../../feautures/bar/vote/vote";

export default function Cards () {
  const cards = useSelector(selectCards);
  const dispatch = useDispatch();
  const defaultSubreddit = useSelector(selectDefaultSubreddit)
  const [openComments, setOpenComments] = useState({})
 

  useEffect(()=> {
    dispatch(fetchCard(defaultSubreddit)); 
  }, [dispatch, defaultSubreddit]);

  useEffect(() => {
    // Fetch comments when openComments changes
    Object.keys(openComments).map(permalink => {
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
    <div >
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <ul>
            <li id='title'>{card.title}</li>
            <li id='details-author'>{card.author}</li>
            <li id='details-time'>{new Date(card.created*1000).toLocaleString()}</li>
            <li id='image'><img src={card.thumbnail} alt='Not available'/></li>
            <li id='bar-upsNb'>{(card.score/1000).toFixed(1)+'k'}</li>
            <li><Vote></Vote></li>
            <li id='bar-comments'>
              <button onClick={() => handleToggleComments(card.permalink)}>
                {openComments[card.permalink] ? 'Hide Comments' : 'Show Comments'}
              </button>
              {openComments[card.permalink] && <Comments/>}
            </li>
          </ul>
        </div>))}
    </div>
  )
}