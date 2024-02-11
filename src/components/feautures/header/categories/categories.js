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
            
              <NavLink to='/categories/games'><p>Games</p></NavLink>
            
          </li>
          <li>
            
              <NavLink to='/categories/anime'><p>Anime</p></NavLink>
            
          </li>
          <li>
            
              <NavLink to='/categories/funny'><p>Funny</p></NavLink>
            
          </li>
          <li>
            
              <NavLink to='/categories/movies'><p>Movies</p></NavLink>
            
          </li>
          <li>
            
              <NavLink to='/categories/music'><p>Music</p></NavLink>
            
          </li>
        </ul>
      </div>
      <div className='categories-box small'>
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
      </div>
    </div>
  );
}
