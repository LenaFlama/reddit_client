import react from "react";
import Home from "./home/home";
import New from "./new/new";
import Popular from "./popular/popular";
import Search from "./search/search";
import Categories from "./categories/categories";

export default function Header () {
  return(
    <div>
      <Home/>
      <Search/>
      <New></New>
      <Popular></Popular>
      <Categories></Categories>
    </div>
  )
}