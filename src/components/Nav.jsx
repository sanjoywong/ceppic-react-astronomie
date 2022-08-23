import "./Nav.css";
import {Link,Outlet} from "react-route-dom";
export default function Nav(){
    return(
        <>
        <nav classname="nav">
        <Link to="/article">Article</Link>
        <Link to="/ajouteArticle">Ajoute Article</Linke>
        <Link to="/propros">A propros</Link>
        </nav>
        </>
    );
}