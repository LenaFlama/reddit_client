import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Categories() {
  return (
      <nav className='navbar navbar-light flex-column align-items-start fs-2'>
        <p className="text-light fs-1 ">Categories:</p>
        <ul className="nav flex-column">
          <li className='nav-item'>
            <NavLink className='nav-link text-light' to='/categories/games'>
              Games
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link text-light' to='/categories/anime'>
              Anime
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link text-light' to='/categories/funny'>
              Funny
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link text-light' to='/categories/movies'>
              Movies
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link text-light' to='/categories/music'>
              Music
            </NavLink>
          </li>
        </ul>
      </nav>)
      {/* <div className='categories-box small'>
        <details>
          <summary className='material-symbols-outlined categories'>
            menu_open
          </summary>
          <ul className='option-box'>
            <li>
              <p>
                <NavLink to='/categories/games'>Games</NavLink>
              </p>
            </li>
            <li>
              <p>
                <NavLink to='/categories/anime'>Anime</NavLink>
              </p>
            </li>
            <li>
              <p>
                <NavLink to='/categories/funny'>Funny</NavLink>
              </p>
            </li>
            <li>
              <p>
                <NavLink to='/categories/movies'>Movies</NavLink>
              </p>
            </li>
            <li>
              <NavLink to='/categories/music'>Music</NavLink>
            </li>
          </ul>
        </details>
      </div> */}
 
}
