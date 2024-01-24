import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateDefaultSubreddit } from "../../../../components/Cards/cardSlice";

export default function Funny () {
  const dispatch = useDispatch();
  
  const handleChangeSubredditToFunny = () => {
    dispatch(updateDefaultSubreddit("/r/funny"));
  };

  useEffect(() => {
    handleChangeSubredditToFunny();
  });

  return(
    <div></div>
  )
}