import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateDefaultSubreddit } from "../../../../components/Cards/cardSlice";

export default function Games () {
  const dispatch = useDispatch();

  const handleChangeSubredditToGames = () => {
    dispatch(updateDefaultSubreddit("/r/gaming"));
  };

  useEffect(() => {
    handleChangeSubredditToGames();
  });

  return(
    <div></div>
  )
}