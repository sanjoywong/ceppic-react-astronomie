import axios from "axios";
import React from "react";
import { useState } from "react";
export default function AjouteArtcle() {
  const [titre, setTitre] = useState();
  const [article, setArticle] = useState();
  const [submitted, setSubmitted] = useState(false);
  const CurrentYear = () => {
    return new Date().getFullYear();
  };
  const mdate = CurrentYear();
  //console.log(message);
  const handleSubmit = (event) => {
    event.preventDefault();
    const articles = { titre, article, mdate };
  // console.log(articles);

    axios
      .post("http://localhost:4000/article", articles)
      .then((response) => {
        console.log("axios response=>", response);
        setSubmitted(true);
      })
      .catch((error) => {
        console.log("axios error =>", error);
      });
  };

  if (submitted) {
    return (
      <>
        <p>Merci pour votre article!</p>
      </>
    );
  }

  return (
    <div className="article">
      <h1>Article</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="titre"
            placeholder="votre titre"
            required
            onChange={(e) => setTitre(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="article"
            placeholder="article"
            required
            onChange={(e) => setArticle(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">Envoyer le message</button>
        </div>
      </form>
    </div>
  );
}
