import React from "react";
import articles from "../data/dbArticle.json";
export default function Article() {

    function JsonSort(json,key){
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
    var articlesNew = JsonSort(articles,'date');

    return(<>
        <h1>Liste les articles</h1>
        {articlesNew.article.map((articlesNew)=>
            (<li key={articlesNew.id}>
            <div>{articlesNew.titre}</div>
            <div>{articlesNew.article}</div>
            </li>))

        }
        </>
    );
};
