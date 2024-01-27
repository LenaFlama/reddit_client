import React from "react";
import { NavLink } from "react-router-dom";

export default function Categories () {
  return (
    <div>
      <p>Categories:</p>
      <ul>
        <li><NavLink to='/categories/games'>Games</NavLink></li>
        <li><NavLink to='/categories/anime'>Anime</NavLink></li>
        <li><NavLink to='/categories/funny'>Funny</NavLink></li>
        <li><NavLink to='/categories/movies'>Movies</NavLink></li>
        <li><NavLink to='/categories/music'>Music</NavLink></li>
      </ul>
    </div>
  )
}