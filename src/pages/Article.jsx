import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import React from "react";
import { useEffect, useState } from "react";
import "./Article.css"
export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articlesRef = query(
      collection(db, "articles"),
      orderBy("created", "desc")
    );
    onSnapshot(articlesRef, (snapshot) => {
      setArticles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <>
      <section className="listeArticles">
        {articles.map((article) => (
          <div key={article.id} className="article">
            <h3>{article.data.titre}</h3>
            <p>{article.data.article}</p>
          </div>
        ))}
      </section>
    </>
  );
}