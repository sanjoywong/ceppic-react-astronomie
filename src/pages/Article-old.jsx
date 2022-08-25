import React, { useState } from "react";
import { db } from "../firebase";
import { collection,query,orderBy,onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import "./Article.css";
export default function Article() {

    const [articles,setArticles]=useState([]);
    useEffect(()=>{ 
    const articlesRef = query(
        collection(db,"articles"),
        orderBy("created","desc")
    );
    onSnapshot(articlesRef,(snapshot)=>{
        setArticles(
            snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
            }))
        );
    });
},[]);
  /*   function JsonSort(json,key){
        //console.log(json);
        for(var j=1,jl=json.length;j < jl;j++){
            var temp = json[j],
                val  = temp[key],
                i    = j-1;
            while(i >=0 && json[i][key]>val){
                json[i+1] = json[i];
                i = i-1;    
            }
            json[i+1] = temp;
            
        }
        //console.log(json);
        return json;
    } 
    var articlesNew = JsonSort(articles,'date'); */

    return(<>
        <section className="article">
        <h1>Liste les articles</h1>
        {articles.map((article)=>
            (<div key={article.id}>
            <h3>{article.data.titre}</h3>
            <p>{article.data.article}</p>
            </div>))

        }
        </section>
        </>
    );
}
