import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateDefaultSubreddit } from "../../../components/Cards/cardSlice";


export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    handleChangeSubredditToHome();
  });

  const handleChangeSubredditToHome = () => {
    dispatch(updateDefaultSubreddit("/r/pics/"));
  };

  return (
    <div>
    </div>
  );
}
