import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateDefaultSubreddit, setSearchTerm } from "../../../Cards/cardsSlice";

export default function Popular() {

  const dispatch = useDispatch();
  const handleChangeSubredditToPopular = () => {
    
    dispatch(updateDefaultSubreddit("r/popular/"));
    setSearchTerm('')
  };
  useEffect(() => {
    handleChangeSubredditToPopular();
  });

  return <div></div>;
}
