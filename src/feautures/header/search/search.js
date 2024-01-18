import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateDefaultSubreddit,
  setSearchTerm,
} from "../../../components/Cards/cardSlice";

export default function Search() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const search = (e) => {
    setTerm(e.currentTarget.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (term.length === 0) {
      return;
    }
    dispatch(updateDefaultSubreddit("/search"));
    dispatch(setSearchTerm(term));
  };

  return (
    <div>
      <input
        id=''
        type='text'
        value={term}
        placeholder='Search'
        onChange={search}
      ></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
