import React from "react";
import { NavLink } from "react-router-dom";

export default function Categories() {
  return (
  
    <nav className='navbar navbar-light flex-column align-items-start fs-5 p-0'>
      <p className='text-light fs-3 m-0 ms-2'>Categories:</p>
      <ul className='nav flex-column '>
        <li className='nav-item'>
          <NavLink
            className='nav-link text-light px-1 py-0 ms-1'
            aria-label='Games'
            to='/categories/games'
          >
            Games
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className='nav-link text-light px-1 py-0 ms-1'
            aria-label='Anime'
            to='/categories/anime'
          >
            Anime
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className='nav-link text-light px-1 py-0 ms-1'
            aria-label='Funny'
            to='/categories/funny'
          >
            Funny
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className='nav-link text-light px-1 py-0 ms-1'
            aria-label='Movies'
            to='/categories/movies'
          >
            Movies
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className='nav-link text-light px-1 py-0 ms-1'
            aria-label='Music'
            to='/categories/music'
          >
            Music
          </NavLink>
        </li>
      </ul>
    </nav>
  );
  }
