import React from "react";
import { NavLink } from "react-router-dom";
import "./categories.css";

export default function Categories() {
  return (
    <div>
      <div className='categories-box big'>
        <span className='categories-title'>Categories:</span>
        <ul>
          <li>
            <NavLink to='/categories/games'>Games</NavLink>
          </li>
          <li>
            <NavLink to='/categories/anime'>Anime</NavLink>
          </li>
          <li>
            <NavLink to='/categories/funny'>Funny</NavLink>
          </li>
          <li>
            <NavLink to='/categories/movies'>Movies</NavLink>
          </li>
          <li>
            <NavLink to='/categories/music'>Music</NavLink>
          </li>
        </ul>
      </div>
      <div className='categories-box small'>
        <details>
          <summary className='material-symbols-outlined categories'>
            menu_open
          </summary>
          <ul className="option-box">
            <li>
              <NavLink to='/categories/games'>
                Games
              </NavLink>
            </li>
            <li>
              <NavLink to='/categories/anime'>
                Anime
              </NavLink>
            </li>
            <li>
              <NavLink to='/categories/funny'>
                Funny
              </NavLink>
            </li>
            <li>
              <NavLink to='/categories/movies'>
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink to='/categories/music'>
                Music
              </NavLink>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
}
