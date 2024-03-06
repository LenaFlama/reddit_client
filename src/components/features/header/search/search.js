import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  setSearchTerm,
  updateDefaultSubreddit,
} from "../../../Cards/cardSlice";
import { useNavigate, createSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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
    navigate({ search: `?${queryString}` });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (term.length === 0) {
      return;
    }
    dispatch(updateDefaultSubreddit("search"));
    dispatch(setSearchTerm(term));
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };
  return (
    <form className='container-fluid d-flex ps-0' id='search' onSubmit={handleSearch}>
      <input
        className='form-control me-2'
        type='search'
        value={term}
        placeholder='Search'
        ref={searchInputRef}
        onChange={search}
        aria-label='Search'
        onKeyDown={handleKeyDown}
      ></input>
      <button className='btn btn-outline-light' aria-label='submit' type='submit'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-search'
          viewBox='0 0 16 16'
        >
          <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
        </svg>
      </button>
    </form>
  );
}
