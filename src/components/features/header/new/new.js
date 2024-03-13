import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateDefaultSubreddit } from "../../../Cards/cardsSlice";

export default function New() {
  const dispatch = useDispatch();
  const handleChangeSubredditToNew = () => {
    dispatch(updateDefaultSubreddit("new"));
  };
  useEffect(() => {
    handleChangeSubredditToNew();
  });

  return <div></div>;
}
