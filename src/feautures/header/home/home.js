import React from "react";
import Cards from "../../../components/Cards/cards";

export default function Home() {
  return (
    <div>
      <a href={<Cards></Cards>}>
        <button>Home</button>
      </a>
    </div>
  );
}
