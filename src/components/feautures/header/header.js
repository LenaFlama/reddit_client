import React from "react";
import Search from "./search/search";
import Categories from "./categories/categories";
import "./header.css";
import { Outlet, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <ul className='header_list'>
      <li className='material-symbols-outlined'>
        <NavLink className='home' to='/home'>
          <p>Home</p>
        </NavLink>
      </li>
      <li>
        <p><Search /></p>
      </li>
      <li>
        <NavLink to='/new'>
          <p className='new-name'>New</p>
          <span className='material-symbols-outlined new'>hotel_class</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/popular'>
          <p className='popular-name'>Popular</p>
          <span className='material-symbols-outlined popular'>groups</span>
        </NavLink>
      </li>
      <li>
        <Categories />
      </li>
      <Outlet></Outlet>
    </ul>
  );
}
