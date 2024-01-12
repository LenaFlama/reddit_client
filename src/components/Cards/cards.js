import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCard } from "./cardSlice";
import { selectCards} from "./cardSlice";
import './cards.css'

export default function Cards () {
  const cards = useSelector(selectCards)
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchCard())
  }, [dispatch]);

  return (
    <div >
      {cards.map((card) => (
        <div className="cards" key={card.id}>
          <ul>
            <li id='title'>{card.title}</li>
            <li id='details-author'>{card.author}</li>
            <li id='details-time'>{card.created_utc}</li>
            <li id='image'><img src={card.thumbnail} alt=''/></li>
            <li id='bar-like'><button>UP</button></li>
            <li id='bar-upsNb'>{card.ups}</li>
            <li id='bar-unlike'><button>DOWN</button></li>
            <li id='bar-comments'>{card.num_comments}</li>
          </ul>
        </div>))}
    </div>
  )
}