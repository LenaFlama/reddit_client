import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../feautures/header/home/home";
import New from "../feautures/header/new/new";
import Popular from "../feautures/header/popular/popular";
import Anime from "../feautures/header/categories/anime/anime";
import Funny from "../feautures/header/categories/funny/funny";
import Movies from "../feautures/header/categories/movies/movies";
import Music from "../feautures/header/categories/music/music";
import Layout from "./layout";
import Games from "../feautures/header/categories/games/games";



const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/new' element={<New/>}/>
          <Route path='/popular' element={<Popular/>}/>
          <Route path='/categories/games' element={<Games/>}/>
          <Route path='/categories/anime' element={<Anime/>}/>
          <Route path='/categories/funny' element={<Funny/>}/>
          <Route path='/categories/movies' element={<Movies/>}/>
          <Route path='/categories/music' element={<Music/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes