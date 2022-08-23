import "./Header.css";
import React from 'react';

export default function Header({title,texte}) {
    return (
        <header className="header">
          <h1>{title}</h1>
          <p>{texte}</p>
        </header>
      )
};