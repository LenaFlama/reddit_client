import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateDefaultSubreddit } from "../../../../components/Cards/cardSlice";

export default function Anime () {
  const dispatch = useDispatch();

  const handleChangeSubredditToAnime = () => {
    dispatch(updateDefaultSubreddit("/r/anime"));
  };

  useEffect(() => {
    handleChangeSubredditToAnime();
  });

  return(
    <div></div>
  )
}