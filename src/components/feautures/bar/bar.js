import React from "react";
import Comments from "./comments/comments";
import Like from "./like/like";
import Unlike from "./unlike/unlike";

export default function Bar () {
  return (
    <div>Bar
    <Comments></Comments>
    <Like></Like>
    <Unlike></Unlike>
    </div>
  )
}