import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateDefaultSubreddit } from "../../../../Cards/cardsSlice";

export default function Music() {
  const dispatch = useDispatch();
  const handleChangeSubredditToMusic = () => {
    dispatch(updateDefaultSubreddit("r/metal"));
  };

  useEffect(() => {
    handleChangeSubredditToMusic();
  });

  return <div></div>;
}
