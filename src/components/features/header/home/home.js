import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateDefaultSubreddit } from "../../../Cards/cardsSlice";
import { NavLink } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const handleChangeSubredditToHome = () => {
    dispatch(updateDefaultSubreddit("r/pics/"));
  };

  useEffect(() => {
    handleChangeSubredditToHome();
  });

  return <div></div>;
}
