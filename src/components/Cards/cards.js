import React from "react";
import Title from "./title/title";
import Photo from "./photo/photo";
import Details from "./details/details";
import Bar from "../../feautures/bar/bar";

export default function Cards () {
  return (
    <div>Cards
      <header>
        <Title></Title> 
        <Details></Details>
      </header>
      <body>
        <Photo></Photo>
      </body>
      <footer>
        <Bar></Bar>
      </footer>
    </div>
  )
}