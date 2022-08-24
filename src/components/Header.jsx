import "./Header.css";
import React from "react";
import Nav from "./Nav";
export default function Header({ title, texte }) {
  return (
    <>
      <Nav />
      <header className="header">
        <h1>{title}</h1>
        <p>{texte}</p>
      </header>
    </>
  );
}
