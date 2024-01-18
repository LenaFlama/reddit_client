import React from "react";
import { useDispatch } from "react-redux";
import { updateDefaultSubreddit } from "../../../components/Cards/cardSlice";

export default function Popular() {
  const dispatch = useDispatch();

  const handleChangeSubredditToPopular = () => {
    dispatch(updateDefaultSubreddit("/r/popular/"));
  };

  return (
    <div>
      <button onClick={handleChangeSubredditToPopular}>Popular</button>
    </div>
  );
}
