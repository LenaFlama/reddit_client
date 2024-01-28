import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateDefaultSubreddit } from "../../../Cards/cardSlice";


export default function Popular() {
  const dispatch = useDispatch();

  useEffect(() => {
    handleChangeSubredditToPopular();
  });

  const handleChangeSubredditToPopular = () => {
    dispatch(updateDefaultSubreddit("/r/popular/"));
  };

  return (
    <div>
    </div>
  );
}
