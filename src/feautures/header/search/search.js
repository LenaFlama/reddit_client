import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  updateDefaultSubreddit,
  setSearchTerm,
} from "../../../components/Cards/cardSlice";
import { useNavigate, createSearchParams } from "react-router-dom";

export default function Search() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const searchInputRef = useRef();
  const navigate = useNavigate();

  const search = (e) => {
    setTerm(e.currentTarget.value);

    const query = {
      search: searchInputRef.current.value,
    };
    const queryString = createSearchParams(query);

    navigate({search: `?${queryString}` });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (term.length === 0) {
      return;
    }

    dispatch(updateDefaultSubreddit("/search"));
    dispatch(setSearchTerm(term));
    setTerm("");
  };

  return (
    <div>
      <input
        id=''
        type='text'
        value={term}
        placeholder='Search'
        ref={searchInputRef}
        onChange={search}
      ></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
