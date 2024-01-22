import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDefaultSubreddit } from "../../../components/Cards/cardSlice";

export default function Categories () {
  
  const dispatch = useDispatch();
  
  const handleChangeSubredditToGames = () => {
    dispatch(updateDefaultSubreddit("/r/gaming"));
  };

  const handleChangeSubredditToAnime = () => {
    dispatch(updateDefaultSubreddit("/r/anime"));
  };

  const handleChangeSubredditToFunny = () => {
    dispatch(updateDefaultSubreddit("/r/funny"));
  };

  const handleChangeSubredditToMovies = () => {
    dispatch(updateDefaultSubreddit("/r/movies"));
  };

  const handleChangeSubredditToMusic = () => {
    dispatch(updateDefaultSubreddit("/r/metal"));
  };


  return (
    <div>
      <p>Categories</p>
      <ul>
        <li onClick={handleChangeSubredditToGames}>Games</li>
        <li onClick={handleChangeSubredditToAnime}>Anime</li>
        <li onClick={handleChangeSubredditToFunny}>Funny</li>
        <li onClick={handleChangeSubredditToMovies}>Movies</li>
        <li onClick={handleChangeSubredditToMusic}>Music</li>
      </ul>
    </div>
  )
}