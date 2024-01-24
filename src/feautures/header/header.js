import Search from "./search/search";
import Categories from "./categories/categories";
import "./header.css";
import { Outlet, NavLink } from "react-router-dom";

export default function Header() {



  return (
    <div className='header'>
      <ul>
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><Search /></li>
        <li><NavLink to='/new'>New</NavLink></li>
        <li><NavLink to='/popular'>Popular</NavLink></li>
        <li><Categories/></li>
        <Outlet></Outlet>
      </ul>
    </div>
  );
}
