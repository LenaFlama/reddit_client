import React from "react";
import { useDispatch } from "react-redux";
import { updateDefaultSubreddit } from "../../../components/Cards/cardSlice";

export default function New() {
  const dispatch = useDispatch();

  const handleChangeSubredditToNew = () => {
    dispatch(updateDefaultSubreddit("/new"));
  };

  return (
    <div>
      <button onClick={handleChangeSubredditToNew}>New</button>
    </div>
  );
}
