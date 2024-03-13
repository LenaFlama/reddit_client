import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateDefaultSubreddit } from "../../../../Cards/cardsSlice";

export default function Anime() {
  const dispatch = useDispatch();

  const handleChangeSubredditToAnime = () => {
    dispatch(updateDefaultSubreddit("r/anime"));
  };

  useEffect(() => {
    handleChangeSubredditToAnime();
  });

  return <div></div>;
}
