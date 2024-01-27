import React from "react";
import { useDispatch } from "react-redux";
import { updateDefaultSubreddit } from "../../../Cards/cardSlice";
import { useEffect } from "react";

export default function New() {
  const dispatch = useDispatch();

  useEffect(() => {
    handleChangeSubredditToNew();
  });

  const handleChangeSubredditToNew = () => {
    dispatch(updateDefaultSubreddit("/new"));
  };

  return (
    <div>
    </div>
  );
}
