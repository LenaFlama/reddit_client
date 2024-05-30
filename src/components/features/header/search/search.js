import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  setSearchTerm,
  updateDefaultSubreddit,
} from "../../../Cards/cardsSlice";
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
    setTerm('')
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };
  return (
    <form
      className='container-fluid d-flex ps-2 py-1 align-items-center'
      id='search'
      onSubmit={handleSearch}
    >
      <input
        className='form-control p-0 ps-2 me-2 d-flex '
        type='search'
        value={term}
        placeholder='Search'
        ref={searchInputRef}
        onChange={search}
        aria-label='Search'
        onKeyDown={handleKeyDown}
        name='Search'
      ></input>
      <button
        className='btn btn-outline-light py-0 px-2'
        aria-label='submit'
        type='submit'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='10'
          height='10'
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
