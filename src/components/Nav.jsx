import "./Nav.css";
import React from "react";
import {Link} from "react-route-dom";
export default function Nav(){
    return(
        <>
        <nav classname="nav">
        <Link to="/article">Article</Link>
        <Link to="/ajouteArticle">Ajoute Article</Link>
        <Link to="/propros">A propros</Link>
        </nav>
        </>
    );
}