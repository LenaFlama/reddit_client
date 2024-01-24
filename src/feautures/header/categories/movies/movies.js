import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateDefaultSubreddit } from "../../../../components/Cards/cardSlice";

export default function Movies () {
  const dispatch = useDispatch();

  const handleChangeSubredditToMovies = () => {
    dispatch(updateDefaultSubreddit("/r/movies"));
  };

  useEffect(() => {
    handleChangeSubredditToMovies();
  });
  return(
    <div></div>
  )
}