import react from "react";
import Home from "./home/home";
import New from "./new/new";
import Popular from "./popular/popular";
import Search from "./search/search";
import Categories from "./categories/categories";
import './header.css'

export default function Header () {
  return(
    <div className="header">
      <Home/>
      <Search/>
      <New></New>
      <Popular></Popular>
      <Categories></Categories>
    </div>
  )
}